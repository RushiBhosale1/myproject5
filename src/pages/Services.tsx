import { motion } from "framer-motion";
import { Check, ArrowRight, Rocket, Target, Users, BarChart2, Layout, MessageSquare } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Digital Marketing Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive digital solutions to help your business grow and succeed online
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver results for your business</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create a customized digital marketing strategy for your business
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-opacity-90 transition-colors">
              Schedule a Consultation
              <ArrowRight className="ml-2" size={20} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Improve your website's visibility and rank higher in search results",
    icon: Target,
    features: [
      "Keyword Research & Strategy",
      "On-Page SEO Optimization",
      "Technical SEO Audit",
      "Link Building",
      "Local SEO"
    ]
  },
  {
    title: "Social Media Marketing",
    description: "Build and engage your audience across social platforms",
    icon: Users,
    features: [
      "Platform Strategy",
      "Content Creation",
      "Community Management",
      "Social Media Analytics",
      "Influencer Partnerships"
    ]
  },
  {
    title: "Content Marketing",
    description: "Create valuable content that attracts and converts your target audience",
    icon: MessageSquare,
    features: [
      "Content Strategy",
      "Blog Writing",
      "Email Marketing",
      "Video Content",
      "Content Distribution"
    ]
  },
  {
    title: "Website Design & Development",
    description: "Create stunning, responsive websites that convert visitors",
    icon: Layout,
    features: [
      "Custom Website Design",
      "Mobile Optimization",
      "E-commerce Solutions",
      "Website Maintenance",
      "Speed Optimization"
    ]
  },
  {
    title: "Facebook Advertising",
    description: "Reach your ideal customers with targeted ad campaigns",
    icon: BarChart2,
    features: [
      "Campaign Strategy",
      "Ad Creative Design",
      "Audience Targeting",
      "Performance Tracking",
      "A/B Testing"
    ]
  },
  {
    title: "Performance Marketing",
    description: "Drive measurable results through data-driven campaigns",
    icon: Rocket,
    features: [
      "Conversion Rate Optimization",
      "Landing Page Design",
      "Marketing Automation",
      "Analytics & Reporting",
      "ROI Tracking"
    ]
  }
];

const process = [
  {
    title: "Discovery",
    description: "We analyze your business goals, target audience, and current digital presence"
  },
  {
    title: "Strategy",
    description: "Develop a customized digital marketing plan aligned with your objectives"
  },
  {
    title: "Implementation",
    description: "Execute the strategy with our expert team and proven methodologies"
  },
  {
    title: "Optimization",
    description: "Continuously monitor, analyze, and improve performance for better results"
  }
];

export default Services;