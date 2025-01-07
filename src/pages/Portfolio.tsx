import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => 
        project.tags.some(tag => tag === activeCategory)
      );

  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-xl text-gray-600">Discover our successful digital marketing campaigns</p>
      </motion.div>

      {/* Portfolio Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === category 
                ? "bg-primary text-white" 
                : "bg-muted hover:bg-primary hover:text-white"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a href="#" className="text-white flex items-center gap-2 hover:text-primary transition-colors">
                  View Case Study <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Results Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 bg-muted rounded-2xl p-12"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-gray-600">Measurable results that drive business growth</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">{result.value}</div>
              <div className="text-gray-600">{result.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

const categories = [
  "All",
  "SEO",
  "Social Media",
  "Content Marketing",
  "Web Design",
  "Facebook Ads"
];

const projects = [
  {
    title: "E-commerce Growth Campaign",
    description: "Increased online sales by 150% through targeted Facebook ads and SEO optimization.",
    image: "/placeholder.svg",
    tags: ["E-commerce", "Facebook Ads", "SEO"]
  },
  {
    title: "Brand Awareness Success",
    description: "Built a strong social media presence resulting in 200% follower growth.",
    image: "/placeholder.svg",
    tags: ["Social Media", "Content Marketing"]
  },
  {
    title: "Local Business Expansion",
    description: "Helped a local business expand their customer base through digital marketing.",
    image: "/placeholder.svg",
    tags: ["Local SEO", "Google Ads"]
  },
  {
    title: "Website Redesign Impact",
    description: "Redesigned website leading to 80% increase in conversion rate.",
    image: "/placeholder.svg",
    tags: ["Web Design", "UX/UI"]
  },
  {
    title: "Content Strategy Success",
    description: "Developed content strategy that doubled organic traffic.",
    image: "/placeholder.svg",
    tags: ["Content Marketing", "SEO"]
  },
  {
    title: "Social Media Campaign",
    description: "Viral social media campaign reaching over 1M impressions.",
    image: "/placeholder.svg",
    tags: ["Social Media", "Viral Marketing"]
  }
];

const results = [
  { value: "250+", label: "Projects Completed" },
  { value: "180%", label: "Average ROI" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "15+", label: "Industry Awards" }
];

export default Portfolio;