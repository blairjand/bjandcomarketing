import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

type ProjectId = 'brand-identity' | 'brand-strategy' | 'content-development' | 'creative-direction' | 'digital-management';

const projectDetails: Record<ProjectId, {
  title: string;
  client: string;
  duration: string;
  team: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
    avatar: string;
  };
  gallery: {
    src: string;
    alt: string;
  }[];
}> = {
  'brand-identity': {
    title: 'Brand Identity Evolution',
    client: 'Luminary Fashion',
    duration: '4 months',
    team: '8 experts',
    image: '/images/service-brand-identity/main.jpg',
    challenge: 'Luminary Fashion needed to redefine their brand identity to appeal to a more sophisticated, sustainability-conscious audience while maintaining their heritage in luxury fashion.',
    solution: 'We developed a comprehensive brand identity system that merged sustainable luxury with modern aesthetics, including a refined visual language, sustainable packaging design, and cohesive brand guidelines.',
    results: [
      'Increased brand recognition by 85% among target audience',
      'Improved customer trust and loyalty by 65%',
      'Achieved 92% positive feedback on new brand identity',
      'Boosted social media engagement by 150%',
      'Reduced environmental impact by 40% through sustainable design'
    ],
    technologies: ['Visual Design', 'Typography', 'Color Theory', 'Sustainable Design', 'Brand Guidelines'],
    testimonial: {
      quote: "The new brand identity perfectly captures our vision of sustainable luxury. It's elevated our brand to new heights while staying true to our core values.",
      author: "Isabella Chen",
      position: "Creative Director, Luminary Fashion",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    },
    gallery: [
      {
        src: "/images/service-brand-identity/gallery-1.jpg",
        alt: "Brand identity elements"
      },
      {
        src: "/images/service-brand-identity/gallery-2.jpg",
        alt: "Sustainable packaging design"
      },
      {
        src: "/images/service-brand-identity/gallery-3.jpg",
        alt: "Visual brand applications"
      }
    ]
  },
  'brand-strategy': {
    title: 'Strategic Brand Evolution',
    client: 'EcoVibe Living',
    duration: '6 months',
    team: '10 experts',
    image: '/images/service-brand-strategy/main.jpg',
    challenge: 'EcoVibe Living struggled to differentiate themselves in the crowded sustainable living market and needed a comprehensive strategy to scale their brand globally.',
    solution: 'We created a multi-faceted brand strategy that positioned them as industry innovators, including market positioning, communication strategy, and sustainable growth roadmap.',
    results: [
      'Achieved 45% increase in market share',
      'Grew brand value by 2.5 times',
      'Delivered 320% return on investment',
      'Expanded to 5 new international markets',
      'Established 15+ strategic partnerships'
    ],
    technologies: ['Market Analysis', 'Brand Positioning', 'Growth Strategy', 'Consumer Insights', 'Digital Strategy'],
    testimonial: {
      quote: "Their strategic approach transformed our brand from a local player to a global leader in sustainable living solutions.",
      author: "Marcus Green",
      position: "CEO, EcoVibe Living",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    },
    gallery: [
      {
        src: "/images/service-brand-strategy/gallery-1.jpg",
        alt: "Strategy presentation"
      },
      {
        src: "/images/service-brand-strategy/gallery-2.jpg",
        alt: "Team collaboration"
      },
      {
        src: "/images/service-brand-strategy/gallery-3.jpg",
        alt: "Market analysis"
      }
    ]
  },
  'content-development': {
    title: 'Content Excellence',
    client: 'Mindful Media Co',
    duration: '12 months',
    team: '15 experts',
    image: '/images/service-content-development/main.jpg',
    challenge: 'Mindful Media Co needed to establish a strong content strategy that would engage their audience across multiple platforms while maintaining consistent brand messaging.',
    solution: 'We developed an integrated content strategy combining storytelling, visual content, and digital engagement, supported by data-driven insights and creative direction.',
    results: [
      'Increased engagement rate by 175%',
      'Reached over 5 million users organically',
      'Improved conversion rates by 88%',
      'Created 1000+ pieces of original content',
      'Achieved 95% positive audience feedback'
    ],
    technologies: ['Content Strategy', 'Storytelling', 'Social Media', 'SEO', 'Analytics'],
    testimonial: {
      quote: "Their content strategy revolutionized our brand voice and dramatically increased our audience engagement across all platforms.",
      author: "Sarah Martinez",
      position: "Head of Content, Mindful Media Co",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200"
    },
    gallery: [
      {
        src: "/images/service-content-development/gallery-1.jpg",
        alt: "Content creation"
      },
      {
        src: "/images/service-content-development/gallery-2.jpg",
        alt: "Team collaboration"
      },
      {
        src: "/images/service-content-development/gallery-3.jpg",
        alt: "Content strategy"
      }
    ]
  },
  'creative-direction': {
    title: 'Artisan Coffee Experience',
    client: 'Brew & Co. Coffee Roasters',
    duration: '6 months',
    team: '8 experts',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070',
    challenge: 'Brew & Co. needed to transform their traditional coffee shop into a modern, experiential destination that would elevate their craft coffee offerings while creating memorable customer experiences.',
    solution: 'We developed a comprehensive brand experience focusing on artisanal coffee culture, expert barista training, and unique customer touchpoints. This included innovative menu design, custom merchandise, and immersive pop-up events that brought the coffee journey to life.',
    results: [
      'Achieved 95% positive feedback on barista expertise',
      'Increased average order value by 45% with new menu design',
      'Increased customer retention by 85%',
      'Successfully launched 6 seasonal pop-up events',
      'Doubled specialty drink sales through menu innovation'
    ],
    technologies: [
      'Barista Training & Expertise',
      'Menu Design & Innovation',
      'Packaging & Brand Identity',
      'Pop-Up Events & Collaborations',
      'Coffee Education Program',
      'Sensory Branding Experience',
      'Loyalty Program & Personalization',
      'Online Ordering & Delivery'
    ],
    testimonial: {
      quote: "Their creative approach transformed our coffee shop into an immersive experience. The new menu design and presentation has significantly improved our customer engagement and sales.",
      author: "James Chen",
      position: "Founder, Brew & Co. Coffee Roasters",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1920",
        alt: "Artisanal coffee preparation"
      },
      {
        src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=1920",
        alt: "Elegant coffee menu and presentation"
      },
      {
        src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1920",
        alt: "Coffee shop ambiance and experience"
      }
    ]
  },
  'digital-management': {
    title: 'Digital Presence',
    client: 'Future Forward Tech',
    duration: '9 months',
    team: '14 experts',
    image: '/images/service-digital-management/main.jpg',
    challenge: 'Future Forward Tech needed to establish a strong digital presence that would showcase their innovative technology solutions while maintaining user engagement across all platforms.',
    solution: 'We implemented a comprehensive digital management strategy, including social media optimization, content marketing, and digital brand experience enhancement.',
    results: [
      'Achieved 250% growth in online presence',
      'Reached over 200M+ users globally',
      'Increased engagement by 150%',
      'Improved digital conversion by 95%',
      'Enhanced brand visibility by 180%'
    ],
    technologies: ['Digital Strategy', 'Social Media Management', 'Analytics', 'Content Marketing', 'SEO/SEM'],
    testimonial: {
      quote: "Their digital management expertise has revolutionized our online presence and significantly expanded our global reach.",
      author: "Rachel Kim",
      position: "Digital Director, Future Forward Tech",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    gallery: [
      {
        src: "/images/service-digital-management/gallery-1.jpg",
        alt: "Digital strategy dashboard"
      },
      {
        src: "/images/service-digital-management/gallery-2.jpg",
        alt: "Analytics and performance"
      },
      {
        src: "/images/service-digital-management/gallery-3.jpg",
        alt: "Team collaboration on digital solutions"
      }
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id && projectDetails[id as ProjectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-white/70">The project you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-white/60 text-sm font-medium tracking-wider uppercase mb-4"
          >
            Case Study
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/80"
          >
            Client: {project.client}
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-medium text-white mb-6">The Challenge</h2>
              <p className="text-white/80 leading-relaxed">{project.challenge}</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-medium text-white mb-6">Our Solution</h2>
              <p className="text-white/80 leading-relaxed">{project.solution}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-white/60 mb-2">Duration</p>
                <p className="text-white text-lg">{project.duration}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-white/60 mb-2">Team Size</p>
                <p className="text-white text-lg">{project.team}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Results & Technologies */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-medium text-white mb-6">Key Results</h2>
            <ul className="space-y-4">
              {project.results.map((result, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center text-white/80"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>{result}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-medium text-white mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 bg-white/10 rounded-lg text-white/80 hover:bg-white/15 transition-colors duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Project Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-medium text-white mb-8">Project Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.2 }}
                className="relative rounded-xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300 z-10" />
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-black/50">
                <img
                  src={project.testimonial.avatar}
                  alt={project.testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <blockquote className="text-xl text-white/90 italic mb-6 mt-8 text-center">
              "{project.testimonial.quote}"
            </blockquote>
            <cite className="not-italic text-center block">
              <div className="text-white font-medium">{project.testimonial.author}</div>
              <div className="text-white/60">{project.testimonial.position}</div>
            </cite>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 