import BookingForm from "./BookingForm";
import { Calendar, Users, Award, Sparkles } from "lucide-react";

export default function BookingSection() {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Limited Slots Available
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your FREE Trial Class Today!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience personalized learning with our expert educators. No commitment required. See the EduVerseJr difference for yourself!
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600 text-sm">Choose a time that works best for your family</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">1-on-1 Attention</h3>
            <p className="text-gray-600 text-sm">Personalized session with certified educator</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Zero Obligation</h3>
            <p className="text-gray-600 text-sm">100% free trial - no credit card required</p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto border border-gray-100">
          <BookingForm />
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>1000+ Happy Families</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Trusted in 40+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>4.8/5 Parent Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
