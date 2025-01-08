import { Rocket, Users, BarChart, Globe } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            AI-Powered Social Media Insights
          </h1>
          <p className="text-xl text-gray-600">
            Unlock actionable insights to grow your audience and make data-driven decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Take Your Social Media Strategy to the Next Level</h2>
          <p className="text-xl text-gray-600 mb-8">Start gaining insights and growing your presence.</p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Analytics",
    description: "Track and analyze your social media performance with precision.",
    icon: BarChart,
  },
  {
    title: "Audience Insights",
    description: "Understand your followers and their preferences like never before.",
    icon: Users,
  },
  {
    title: "Global Trends",
    description: "Stay updated with the latest trends across platforms and regions.",
    icon: Globe,
  },
  {
    title: "Real-Time Insights",
    description: "Get real-time updates and adapt to changes instantly.",
    icon: Rocket,
  },
];

export default Home;