import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Mic, BookOpen, BarChart3, RotateCcw } from "lucide-react";

// Demo conversation steps
const demoSteps = [
  {
    type: "student",
    text: "I don't understand how to solve quadratic equations. Can you help?",
    delay: 500,
  },
  {
    type: "reva",
    text: "Of course! Let's solve x² - 5x + 6 = 0 together. I'll show you step by step on the whiteboard.",
    delay: 1200,
    whiteboard: [
      { line: "x² - 5x + 6 = 0", color: "#1e40af" },
    ],
  },
  {
    type: "reva",
    text: "Step 1: We need two numbers that multiply to 6 and add to −5.",
    delay: 2000,
    whiteboard: [
      { line: "x² - 5x + 6 = 0", color: "#1e40af" },
      { line: "Find: a × b = 6 and a + b = −5", color: "#7c3aed" },
    ],
  },
  {
    type: "reva",
    text: "Those numbers are −2 and −3. So we can factorise!",
    delay: 1800,
    whiteboard: [
      { line: "x² - 5x + 6 = 0", color: "#1e40af" },
      { line: "(x − 2)(x − 3) = 0", color: "#059669" },
    ],
  },
  {
    type: "reva",
    text: "Step 2: Each bracket equals zero. So x = 2 or x = 3. ✓",
    delay: 2000,
    whiteboard: [
      { line: "(x − 2)(x − 3) = 0", color: "#059669" },
      { line: "x = 2  or  x = 3  ✓", color: "#dc2626" },
    ],
  },
  {
    type: "student",
    text: "That makes sense! Can I try a quiz now?",
    delay: 1200,
  },
  {
    type: "reva",
    text: "Great idea! You scored 8/10 on your last quiz. Let's focus on the 2 you missed.",
    delay: 1500,
    badge: "quiz",
  },
];

interface WhiteboardLine {
  line: string;
  color: string;
}

interface DemoStep {
  type: string;
  text: string;
  delay: number;
  whiteboard?: WhiteboardLine[];
  badge?: string;
}

export default function RevaDemo() {
  const [currentStep, setCurrentStep] = useState(-1);
  const [displayedSteps, setDisplayedSteps] = useState<DemoStep[]>([]);
  const [whiteboardLines, setWhiteboardLines] = useState<WhiteboardLine[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [activeFeature, setActiveFeature] = useState("chat");
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stepRef = useRef(0);

  const typeText = (text: string, onDone: () => void) => {
    setIsTyping(true);
    setTypingText("");
    let i = 0;
    const speed = 28;
    const interval = setInterval(() => {
      if (i < text.length) {
        setTypingText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        onDone();
      }
    }, speed);
    return interval;
  };

  const runStep = (stepIndex: number) => {
    if (stepIndex >= demoSteps.length) {
      setIsRunning(false);
      return;
    }
    const step = demoSteps[stepIndex];
    timerRef.current = setTimeout(() => {
      if (step.type === "reva") {
        setIsTyping(true);
        setTypingText("");
        const interval = typeText(step.text, () => {
          const finalStep = { ...step };
          setDisplayedSteps(prev => [...prev, finalStep]);
          setTypingText("");
          if (step.whiteboard) {
            setWhiteboardLines(step.whiteboard);
            setActiveFeature("whiteboard");
          }
          if (step.badge === "quiz") setActiveFeature("quiz");
          stepRef.current = stepIndex + 1;
          runStep(stepIndex + 1);
        });
        return () => clearInterval(interval);
      } else {
        setDisplayedSteps(prev => [...prev, step]);
        stepRef.current = stepIndex + 1;
        runStep(stepIndex + 1);
      }
    }, step.delay);
  };

  const startDemo = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentStep(0);
    setDisplayedSteps([]);
    setWhiteboardLines([]);
    setTypingText("");
    setIsTyping(false);
    setIsRunning(true);
    setActiveFeature("chat");
    stepRef.current = 0;
    runStep(0);
  };

  useEffect(() => {
    startDemo();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [displayedSteps, typingText]);

  const features = [
    { id: "chat", icon: <Sparkles className="w-4 h-4" />, label: "AI Chat" },
    { id: "whiteboard", icon: <BookOpen className="w-4 h-4" />, label: "Whiteboard" },
    { id: "voice", icon: <Mic className="w-4 h-4" />, label: "Voice" },
    { id: "quiz", icon: <BarChart3 className="w-4 h-4" />, label: "Quiz" },
  ];

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            See Reva in Action
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Watch Reva Teach a Real Lesson
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            This is exactly how Reva tutors your child — live AI conversation, interactive
            whiteboard, voice interaction, and personalised quizzes.
          </p>
        </div>

        {/* Demo Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden shadow-lg">

            {/* Feature Tab Bar */}
            <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1 mr-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {features.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFeature(f.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeFeature === f.id
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {f.icon} {f.label}
                  </button>
                ))}
              </div>
              <div className="ml-auto">
                <button
                  onClick={startDemo}
                  className="flex items-center gap-1 text-xs text-gray-500 hover:text-purple-600 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" /> Replay
                </button>
              </div>
            </div>

            {/* Main Panel */}
            <div className="grid md:grid-cols-2 min-h-[420px]">

              {/* Chat Panel */}
              <div className="border-r border-gray-200 flex flex-col">
                <div className="px-4 py-2 bg-white border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Reva AI Chat
                </div>
                <div
                  ref={chatRef}
                  className="flex-1 overflow-y-auto p-4 space-y-3"
                  style={{ maxHeight: "380px" }}
                >
                  {displayedSteps.map((step, i) => (
                    <div key={i} className={`flex ${step.type === "student" ? "justify-end" : "justify-start"}`}>
                      {step.type === "reva" && (
                        <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                          <Sparkles className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                          step.type === "student"
                            ? "bg-blue-600 text-white rounded-br-sm"
                            : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm shadow-sm"
                        }`}
                      >
                        {step.text}
                        {step.badge === "quiz" && (
                          <div className="mt-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-green-700 text-xs font-medium">
                            📊 Last quiz: 8/10 · Weak area: Factorisation
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <Sparkles className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div className="max-w-[80%] px-3 py-2 rounded-2xl rounded-bl-sm bg-white border border-gray-200 text-gray-800 text-sm shadow-sm">
                        {typingText}
                        <span className="inline-block w-0.5 h-4 bg-purple-500 ml-0.5 animate-pulse align-middle" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Input bar */}
                <div className="p-3 border-t border-gray-100 bg-white">
                  <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                    <span className="text-xs text-gray-400 flex-1">Ask Reva anything...</span>
                    <Mic className="w-4 h-4 text-purple-500" />
                  </div>
                </div>
              </div>

              {/* Right Panel — Whiteboard / Voice / Quiz */}
              <div className="flex flex-col">
                <div className="px-4 py-2 bg-white border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {activeFeature === "whiteboard" && "Interactive Whiteboard"}
                  {activeFeature === "voice" && "Voice Mode"}
                  {activeFeature === "chat" && "How It Works"}
                  {activeFeature === "quiz" && "Progress & Quiz"}
                </div>

                <div className="flex-1 p-5 flex flex-col justify-center">

                  {/* Whiteboard */}
                  {activeFeature === "whiteboard" && (
                    <div className="bg-white rounded-2xl border-2 border-gray-200 p-5 min-h-[200px] font-mono">
                      <div className="text-xs text-gray-400 mb-3 flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        Reva is drawing...
                      </div>
                      <div className="space-y-3">
                        {whiteboardLines.map((wl, i) => (
                          <div
                            key={i}
                            className="text-base md:text-lg font-bold animate-fade-in"
                            style={{ color: wl.color, animationDelay: `${i * 0.3}s` }}
                          >
                            {wl.line}
                          </div>
                        ))}
                        {whiteboardLines.length === 0 && (
                          <div className="text-gray-300 text-sm italic">Whiteboard will activate during the lesson...</div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Voice */}
                  {activeFeature === "voice" && (
                    <div className="flex flex-col items-center justify-center gap-4 py-6">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center">
                          <Mic className="w-8 h-8 text-purple-600" />
                        </div>
                        <div className="absolute inset-0 rounded-full border-4 border-purple-300 animate-ping opacity-40"></div>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-gray-800">Speak your question</p>
                        <p className="text-sm text-gray-500 mt-1">Reva is listening...</p>
                      </div>
                      <div className="flex gap-1 items-end h-8">
                        {[3,5,8,4,7,5,3,6,4,8].map((h, i) => (
                          <div
                            key={i}
                            className="w-1.5 bg-purple-400 rounded-full animate-pulse"
                            style={{ height: `${h * 3}px`, animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-400">Works on mobile &amp; desktop</p>
                    </div>
                  )}

                  {/* Quiz */}
                  {activeFeature === "quiz" && (
                    <div className="space-y-4">
                      <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                        <p className="text-xs font-semibold text-green-700 mb-2">📊 Progress Report</p>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Algebra</span>
                          <span className="font-bold text-green-700">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Factorisation</span>
                          <span className="font-bold text-yellow-600">62%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "62%" }}></div>
                        </div>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                        <p className="text-xs font-semibold text-purple-700 mb-2">🎯 Reva recommends:</p>
                        <p className="text-sm text-gray-700">Practice 5 more factorisation problems to reach 80%</p>
                      </div>
                    </div>
                  )}

                  {/* Chat / How it works */}
                  {activeFeature === "chat" && (
                    <div className="space-y-3 text-sm text-gray-600">
                      {[
                        { icon: "💬", text: "Ask any maths question in plain English" },
                        { icon: "✏️", text: "Reva draws on the whiteboard step-by-step" },
                        { icon: "🎤", text: "Speak your question with voice mode" },
                        { icon: "📝", text: "Take quizzes, get instant feedback" },
                        { icon: "📊", text: "Track your progress across every topic" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-3 border border-gray-100">
                          <span className="text-xl">{item.icon}</span>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* CTA below demo */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Ready to experience it for real?</p>
            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-6 rounded-full text-lg font-bold"
              onClick={() => window.open('http://agenticaifirst.in', '_blank')}
            >
              Try Reva Free — No Sign-up Needed
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
