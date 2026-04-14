import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Mic, BookOpen, BarChart3, RotateCcw, GalleryHorizontal, Dumbbell, Upload, Volume2, VolumeX } from "lucide-react";

const demoSteps = [
  { type: "student", text: "I don't understand quadratic equations. Can you teach me?", delay: 500,
    narration: "A student asks Reva to explain quadratic equations." },
  { type: "reva", text: "Of course! Let me open a lesson on quadratic equations for you.", delay: 1200, feature: "slides",
    narration: "Reva instantly opens a personalised teaching lesson — no waiting, no scheduling." },
  { type: "reva", text: "Now let's solve x² - 5x + 6 = 0 together on the whiteboard.", delay: 2000, feature: "whiteboard",
    narration: "Reva solves the equation step by step on the interactive whiteboard — just like a real teacher.",
    whiteboard: [
      { line: "x² - 5x + 6 = 0", color: "#1e40af" },
      { line: "Find: a × b = 6,  a + b = −5", color: "#7c3aed" },
      { line: "(x − 2)(x − 3) = 0", color: "#059669" },
      { line: "x = 2  or  x = 3  ✓", color: "#dc2626" },
    ],
  },
  { type: "student", text: "Got it! Can I practise some questions?", delay: 1200,
    narration: "The student is ready to practice." },
  { type: "reva", text: "Here's a Smart Practice set based on your weak areas in factorisation.", delay: 1500, feature: "practice",
    narration: "Reva activates Smart Practice — automatically targeting the student's weakest topics." },
  { type: "student", text: "I uploaded my homework paper, can you check it?", delay: 1200,
    narration: "The student uploads their homework question paper." },
  { type: "reva", text: "I can see your question paper. Let me work through question 3 for you step by step.", delay: 1500, feature: "upload",
    narration: "Reva reads the paper and explains every question — photos, PDFs, all supported." },
  { type: "reva", text: "Based on this session, I've updated your weakness tracker. Factorisation needs more work!", delay: 2000, feature: "quiz",
    narration: "After every session, Reva automatically updates the student's progress and flags weak areas." },
];

interface WhiteboardLine { line: string; color: string; }
interface DemoStep {
  type: string; text: string; delay: number; narration?: string;
  whiteboard?: WhiteboardLine[]; feature?: string;
}

const slideContent = [
  { title: "What is a Quadratic Equation?", body: "ax² + bx + c = 0\nwhere a ≠ 0" },
  { title: "Methods to Solve", body: "1. Factorisation\n2. Quadratic Formula\n3. Completing the Square" },
  { title: "Factorisation Method", body: "x² - 5x + 6 = 0\n→ Find two numbers: × gives 6, + gives −5\n→ Answer: (x-2)(x-3) = 0" },
];

const hasSpeechSynthesis = typeof window !== "undefined" && "speechSynthesis" in window;

export default function RevaDemo() {
  const [displayedSteps, setDisplayedSteps] = useState<DemoStep[]>([]);
  const [whiteboardLines, setWhiteboardLines] = useState<WhiteboardLine[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [activeFeature, setActiveFeature] = useState("chat");
  const [slideIndex, setSlideIndex] = useState(0);
  const [narrationOn, setNarrationOn] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const narrationRef = useRef(false);

  const speak = useCallback((text: string) => {
    if (!hasSpeechSynthesis || !narrationRef.current) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.95;
    utter.pitch = 1.05;
    utter.volume = 1;
    // Prefer a natural-sounding voice
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v =>
      v.name.includes("Google") || v.name.includes("Samantha") || v.name.includes("Karen") || v.name.includes("Natural")
    );
    if (preferred) utter.voice = preferred;
    utter.onstart = () => setIsSpeaking(true);
    utter.onend = () => setIsSpeaking(false);
    utter.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utter);
  }, []);

  const stopSpeech = useCallback(() => {
    if (hasSpeechSynthesis) window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  const typeText = (text: string, onDone: () => void) => {
    setIsTyping(true);
    setTypingText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) { setTypingText(text.slice(0, i + 1)); i++; }
      else { clearInterval(interval); setIsTyping(false); onDone(); }
    }, 25);
    return interval;
  };

  const runSteps = (steps: DemoStep[], index: number) => {
    if (index >= steps.length) return;
    const step = steps[index];
    timerRef.current = setTimeout(() => {
      if (step.narration) speak(step.narration);
      if (step.type === "reva") {
        typeText(step.text, () => {
          setDisplayedSteps(prev => [...prev, step]);
          setTypingText("");
          if (step.feature) setActiveFeature(step.feature);
          if (step.whiteboard) setWhiteboardLines(step.whiteboard);
          runSteps(steps, index + 1);
        });
      } else {
        setDisplayedSteps(prev => [...prev, step]);
        runSteps(steps, index + 1);
      }
    }, step.delay);
  };

  const startDemo = useCallback((withNarration?: boolean) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    stopSpeech();
    setDisplayedSteps([]); setWhiteboardLines([]);
    setTypingText(""); setIsTyping(false);
    setActiveFeature("chat"); setSlideIndex(0);

    if (withNarration !== undefined) {
      narrationRef.current = withNarration;
      setNarrationOn(withNarration);
    }

    if (narrationRef.current) {
      // Brief intro narration before demo starts
      if (hasSpeechSynthesis) {
        const intro = new SpeechSynthesisUtterance("Meet Reva — your AI maths tutor, available 24 hours a day, 7 days a week.");
        intro.rate = 0.95;
        intro.pitch = 1.05;
        const voices = window.speechSynthesis.getVoices();
        const preferred = voices.find(v => v.name.includes("Google") || v.name.includes("Samantha") || v.name.includes("Karen"));
        if (preferred) intro.voice = preferred;
        intro.onend = () => runSteps(demoSteps, 0);
        intro.onerror = () => runSteps(demoSteps, 0);
        setIsSpeaking(true);
        window.speechSynthesis.speak(intro);
        return;
      }
    }
    runSteps(demoSteps, 0);
  }, [speak, stopSpeech]);

  const toggleNarration = () => {
    const next = !narrationOn;
    startDemo(next);
  };

  useEffect(() => {
    narrationRef.current = false;
    startDemo();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (hasSpeechSynthesis) window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [displayedSteps, typingText]);

  const features = [
    { id: "chat", icon: <Sparkles className="w-3.5 h-3.5" />, label: "Chat" },
    { id: "whiteboard", icon: <BookOpen className="w-3.5 h-3.5" />, label: "Whiteboard" },
    { id: "slides", icon: <GalleryHorizontal className="w-3.5 h-3.5" />, label: "Slides" },
    { id: "voice", icon: <Mic className="w-3.5 h-3.5" />, label: "Voice" },
    { id: "practice", icon: <Dumbbell className="w-3.5 h-3.5" />, label: "Practice" },
    { id: "upload", icon: <Upload className="w-3.5 h-3.5" />, label: "Upload" },
    { id: "quiz", icon: <BarChart3 className="w-3.5 h-3.5" />, label: "Progress" },
  ];

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            See Reva in Action
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Watch Reva Teach a Real Lesson</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Chat · Whiteboard · Teaching Slides · Voice · Smart Practice · Upload & Solve · Progress Tracking
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden shadow-lg">

            {/* Feature Tabs */}
            <div className="bg-white border-b border-gray-200 px-4 py-3">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                <span className="text-xs text-gray-400 ml-1">Reva AI — revaai.eduversejr.com</span>
                <div className="ml-auto flex items-center gap-2">
                  {hasSpeechSynthesis && (
                    <button
                      onClick={toggleNarration}
                      title={narrationOn ? "Mute narration" : "Enable voice narration"}
                      className={`flex items-center gap-1 text-xs px-2 py-1 rounded-lg border transition-all ${
                        narrationOn
                          ? "bg-purple-100 border-purple-300 text-purple-700"
                          : "bg-gray-50 border-gray-200 text-gray-500 hover:border-purple-300 hover:text-purple-600"
                      }`}
                    >
                      {narrationOn ? (
                        <><Volume2 className="w-3 h-3" />{isSpeaking ? <span className="animate-pulse">Speaking…</span> : "Audio On"}</>
                      ) : (
                        <><VolumeX className="w-3 h-3" />Audio Off</>
                      )}
                    </button>
                  )}
                  <button onClick={() => startDemo()} className="flex items-center gap-1 text-xs text-gray-400 hover:text-purple-600 transition-colors">
                    <RotateCcw className="w-3 h-3" /> Replay
                  </button>
                </div>
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {features.map(f => (
                  <button key={f.id} onClick={() => setActiveFeature(f.id)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                      activeFeature === f.id ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}>
                    {f.icon} {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Panel */}
            <div className="grid md:grid-cols-2" style={{ minHeight: "420px" }}>

              {/* Chat */}
              <div className="border-r border-gray-200 flex flex-col">
                <div className="px-4 py-2 bg-white border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wide">Reva AI Chat</div>
                <div ref={chatRef} className="flex-1 overflow-y-auto p-3 space-y-2.5" style={{ maxHeight: "360px" }}>
                  {displayedSteps.map((step, i) => (
                    <div key={i} className={`flex ${step.type === "student" ? "justify-end" : "justify-start"}`}>
                      {step.type === "reva" && (
                        <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                          <Sparkles className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <div className={`max-w-[82%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                        step.type === "student"
                          ? "bg-blue-600 text-white rounded-br-sm"
                          : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm shadow-sm"
                      }`}>
                        {step.text}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                      <div className="max-w-[82%] px-3 py-2 rounded-2xl rounded-bl-sm bg-white border border-gray-200 text-xs shadow-sm text-gray-800">
                        {typingText}<span className="inline-block w-0.5 h-3.5 bg-purple-500 ml-0.5 animate-pulse align-middle" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-3 border-t border-gray-100 bg-white">
                  <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1.5">
                    <span className="text-xs text-gray-400 flex-1">Ask Reva anything...</span>
                    <Mic className="w-3.5 h-3.5 text-purple-500" />
                  </div>
                </div>
              </div>

              {/* Right Panel */}
              <div className="flex flex-col">
                <div className="px-4 py-2 bg-white border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {activeFeature === "whiteboard" && "Interactive Whiteboard"}
                  {activeFeature === "slides" && "Teaching Slides"}
                  {activeFeature === "voice" && "Voice Mode"}
                  {activeFeature === "practice" && "Smart Practice"}
                  {activeFeature === "upload" && "Question Paper Upload"}
                  {activeFeature === "quiz" && "Weakness & Progress"}
                  {activeFeature === "chat" && "All Features"}
                </div>

                <div className="flex-1 p-4 flex flex-col justify-center">

                  {/* Whiteboard */}
                  {activeFeature === "whiteboard" && (
                    <div className="bg-white rounded-2xl border-2 border-gray-200 p-4 min-h-[180px] font-mono">
                      <div className="text-xs text-gray-400 mb-3 flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        Reva is writing...
                      </div>
                      <div className="space-y-2.5">
                        {whiteboardLines.map((wl, i) => (
                          <div key={i} className="text-sm md:text-base font-bold" style={{ color: wl.color }}>{wl.line}</div>
                        ))}
                        {whiteboardLines.length === 0 && <div className="text-gray-300 text-xs italic">Whiteboard activates during lesson...</div>}
                      </div>
                    </div>
                  )}

                  {/* Slides */}
                  {activeFeature === "slides" && (
                    <div className="space-y-3">
                      <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-5 text-white min-h-[140px]">
                        <div className="text-xs text-white/70 mb-2">Slide {slideIndex + 1} of {slideContent.length}</div>
                        <h3 className="font-bold text-sm mb-2">{slideContent[slideIndex].title}</h3>
                        <pre className="text-xs text-white/90 font-sans leading-relaxed whitespace-pre-wrap">{slideContent[slideIndex].body}</pre>
                      </div>
                      <div className="flex justify-between gap-2">
                        <button onClick={() => setSlideIndex(Math.max(0, slideIndex - 1))} className="flex-1 py-1.5 text-xs bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-40" disabled={slideIndex === 0}>← Prev</button>
                        <button onClick={() => setSlideIndex(Math.min(slideContent.length - 1, slideIndex + 1))} className="flex-1 py-1.5 text-xs bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 disabled:opacity-40" disabled={slideIndex === slideContent.length - 1}>Next →</button>
                      </div>
                      <p className="text-xs text-gray-400 text-center">AI-generated slides — click to navigate</p>
                    </div>
                  )}

                  {/* Voice */}
                  {activeFeature === "voice" && (
                    <div className="flex flex-col items-center justify-center gap-3 py-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                          <Mic className="w-7 h-7 text-purple-600" />
                        </div>
                        <div className="absolute inset-0 rounded-full border-4 border-purple-300 animate-ping opacity-40"></div>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-gray-800 text-sm">Speak your question</p>
                        <p className="text-xs text-gray-500 mt-1">Reva is listening...</p>
                      </div>
                      <div className="flex gap-1 items-end h-6">
                        {[3,5,8,4,7,5,3,6,4,8].map((h, i) => (
                          <div key={i} className="w-1.5 bg-purple-400 rounded-full animate-pulse" style={{ height: `${h * 2.5}px`, animationDelay: `${i * 0.1}s` }} />
                        ))}
                      </div>
                      <p className="text-xs text-gray-400">Works on mobile &amp; desktop</p>
                    </div>
                  )}

                  {/* Smart Practice */}
                  {activeFeature === "practice" && (
                    <div className="space-y-3">
                      <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
                        <p className="text-xs font-bold text-orange-700 mb-2">🧠 Smart Practice — Factorisation</p>
                        <p className="text-sm text-gray-800 font-medium">Q1: Factorise x² + 7x + 12</p>
                        <div className="mt-2 space-y-1">
                          {["(x+3)(x+4)", "(x+2)(x+6)", "(x+1)(x+12)", "Cannot factorise"].map((opt, i) => (
                            <div key={i} className={`text-xs px-3 py-1.5 rounded-lg border cursor-pointer hover:bg-orange-100 ${i === 0 ? "border-green-400 bg-green-50 text-green-700" : "border-gray-200 bg-white text-gray-700"}`}>
                              {i === 0 ? "✓ " : ""}{opt}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 text-center">AI picks questions targeting your weak spots</div>
                    </div>
                  )}

                  {/* Upload */}
                  {activeFeature === "upload" && (
                    <div className="space-y-3">
                      <div className="border-2 border-dashed border-purple-300 rounded-2xl p-5 text-center bg-purple-50">
                        <Upload className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">Question paper uploaded</p>
                        <p className="text-xs text-gray-500 mt-1">homework.pdf · 3 pages</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-xl p-3">
                        <p className="text-xs font-bold text-purple-700 mb-1">Reva found 5 questions:</p>
                        <div className="space-y-1">
                          {["Q1: Solve 2x² - 3x - 2 = 0", "Q2: Factorise 4x² - 9", "Q3: Sketch y = x² - 4x + 3"].map((q, i) => (
                            <p key={i} className="text-xs text-gray-600 py-1 border-b border-gray-50">{q}</p>
                          ))}
                          <p className="text-xs text-gray-400 pt-1">+ 2 more questions detected</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 text-center">Upload PDFs, photos, or images</p>
                    </div>
                  )}

                  {/* Progress / Weakness */}
                  {activeFeature === "quiz" && (
                    <div className="space-y-3">
                      <div className="bg-white rounded-xl border border-gray-200 p-3">
                        <p className="text-xs font-bold text-gray-700 mb-3">📊 Topic Progress</p>
                        {[
                          { topic: "Linear Equations", pct: 92, color: "bg-green-500" },
                          { topic: "Quadratic Equations", pct: 74, color: "bg-blue-500" },
                          { topic: "Factorisation", pct: 58, color: "bg-yellow-400" },
                          { topic: "Trigonometry", pct: 45, color: "bg-red-400" },
                        ].map((t, i) => (
                          <div key={i} className="mb-2">
                            <div className="flex justify-between text-xs mb-0.5">
                              <span className="text-gray-600">{t.topic}</span>
                              <span className="font-bold">{t.pct}%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-1.5">
                              <div className={`${t.color} h-1.5 rounded-full transition-all`} style={{ width: `${t.pct}%` }}></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-700">
                        ⚠️ <strong>Weakness detected:</strong> Factorisation &amp; Trigonometry need more practice
                      </div>
                    </div>
                  )}

                  {/* All features overview */}
                  {activeFeature === "chat" && (
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { icon: "💬", text: "AI Chat" },
                        { icon: "✏️", text: "Whiteboard" },
                        { icon: "📑", text: "Slides" },
                        { icon: "🎤", text: "Voice" },
                        { icon: "🧠", text: "Smart Practice" },
                        { icon: "📤", text: "Upload Paper" },
                        { icon: "📉", text: "Weakness Track" },
                        { icon: "📊", text: "Progress" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white rounded-xl p-2.5 border border-gray-100 text-xs text-gray-700">
                          <span className="text-base">{item.icon}</span> {item.text}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Narration hint */}
          {hasSpeechSynthesis && !narrationOn && (
            <div className="text-center mt-4">
              <button
                onClick={toggleNarration}
                className="inline-flex items-center gap-2 text-sm text-purple-600 hover:text-purple-800 border border-purple-200 hover:border-purple-400 px-4 py-2 rounded-full transition-all"
              >
                <Volume2 className="w-4 h-4" />
                Enable voice narration to hear the demo
              </button>
            </div>
          )}

          <div className="text-center mt-6">
            <p className="text-gray-600 mb-4">Ready to experience it for real?</p>
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-6 rounded-full text-lg font-bold"
              onClick={() => window.open('https://revaai.eduversejr.com', '_blank')}
            >
              Try Reva Free — Start Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
