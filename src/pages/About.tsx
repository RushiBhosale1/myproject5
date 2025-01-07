import { motion } from "framer-motion";
import { Users, Trophy, Target, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Your Partner in Digital Success</p>
        </div>

        {/* Story & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, we've been at the forefront of digital marketing innovation. Our passion for helping businesses grow in the digital space has driven us to deliver exceptional results for our clients.
            </p>
            <p className="text-gray-600">
              We believe in combining creativity with data-driven strategies to create marketing solutions that not only look good but deliver measurable results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              To empower businesses with innovative digital marketing solutions that drive growth and create lasting impact in the digital landscape.
            </p>
            <p className="text-gray-600">
              We're committed to staying ahead of digital trends and delivering exceptional value to our clients through strategic thinking and creative execution.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="p-6 bg-white rounded-lg shadow-lg">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600">Meet the experts behind our success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary mb-2">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

const values = [
  {
    title: "Innovation",
    description: "We stay ahead of digital trends to provide cutting-edge solutions.",
    icon: "💡"
  },
  {
    title: "Integrity",
    description: "We believe in transparent communication and honest relationships.",
    icon: "🤝"
  },
  {
    title: "Impact",
    description: "We focus on delivering measurable results that matter.",
    icon: "🎯"
  }
];

const team = [
  {
    name: "Rushikesh Bhosale",
    position: "CEO & Founder",
    description: "Digital marketing veteran with 15+ years of experience."
  },
  {
    name: "Sumit Anarase",
    position: "Head of Strategy",
    description: "Expert in developing comprehensive digital strategies."
  },
  {
    name: "Priyanka Patil",
    position: "Technical Director",
    description: "Leads our technical SEO and web development initiatives."
  }
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "50+", label: "Team Members" },
  { value: "95%", label: "Client Retention" }
];

export default About;