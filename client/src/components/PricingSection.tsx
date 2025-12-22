import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      features: [
        "2 classes per week",
        "Personalized learning path",
        "Progress tracking",
        "Email support",
      ],
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      features: [
        "4 classes per week",
        "Personalized learning path",
        "Progress tracking",
        "Priority support",
        "Parent dashboard",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "$299",
      period: "/month",
      features: [
        "Unlimited classes",
        "Personalized learning path",
        "Progress tracking",
        "24/7 support",
        "Parent dashboard",
        "Custom curriculum",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Subscriptions</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Choose a Plan That Fits Your Child's Needs!
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Affordable, Personalised Learning Plans for every budget and need!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-8 transition-all ${
                plan.highlighted
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-900 shadow-md"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={plan.highlighted ? "text-blue-100" : "text-gray-600"}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center">
                    <span className="mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 rounded-lg font-semibold ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-semibold">
            Choose Your Plan
          </Button>
        </div>
      </div>
    </section>
  );
}
