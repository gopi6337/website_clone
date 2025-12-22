import { Button } from "@/components/ui/button";

export default function AppsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">EduVerseJr Applications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track progress, manage live classes, and practice anywhere, anytime!
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 md:p-12 shadow-md">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Download EduVerseJr App
              </h3>
              <p className="text-gray-600 mb-6">
                Get the full EduVerseJr experience on your mobile device
              </p>
            </div>

            <div className="space-y-4">
              <Button className="w-full bg-black text-white hover:bg-gray-800 py-6 rounded-lg text-lg font-semibold">
                🍎 Apple Store
              </Button>
              <Button className="w-full bg-green-600 text-white hover:bg-green-700 py-6 rounded-lg text-lg font-semibold">
                🎮 Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
