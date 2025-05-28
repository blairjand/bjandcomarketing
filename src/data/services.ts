interface Service {
  id: string;
  serviceName: string;
  description: string;
  shortDescription: string;
  videoUrl: string;
  benefits: string[];
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: 'brand-identity',
    serviceName: 'Brand Identity',
    description: "We craft distinctive visual identities that capture your brand's essence and resonate with your target audience. Our comprehensive brand identity service encompasses logo design, color palettes, typography, and visual guidelines that work harmoniously to establish a strong, memorable presence in your market.",
    shortDescription: "Creating distinctive visual identities that tell your brand's story.",
    videoUrl: '/service-video/service-brand-identity-video.mp4',
    benefits: [
      'Stand out in a crowded market',
      'Build brand recognition and trust',
      'Maintain consistency across all platforms',
      'Connect emotionally with your audience'
    ],
    deliverables: [
      'Logo design and variations',
      'Color palette and typography guide',
      'Brand guidelines documentation',
      'Marketing collateral templates'
    ]
  },
  {
    id: 'brand-strategy',
    serviceName: 'Brand Strategy',
    description: "We develop comprehensive brand strategies that align with your business goals and resonate with your target audience. Our strategic approach ensures your brand's message, values, and positioning create meaningful connections and drive sustainable growth.",
    shortDescription: 'Strategic brand development for meaningful market impact.',
    videoUrl: '/service-video/service-brand-video.mp4',
    benefits: [
      'Clear brand positioning',
      'Consistent brand messaging',
      'Improved market presence',
      'Better customer engagement',
      'Strategic growth planning'
    ],
    deliverables: [
      'Brand positioning statement',
      'Target audience analysis',
      'Competitive landscape review',
      'Brand voice guidelines',
      'Marketing strategy recommendations'
    ]
  },
  {
    id: 'content-development',
    serviceName: 'Content Development',
    description: "Our content development service creates engaging, purposeful content that tells your brand's story and connects with your audience. From copywriting to visual content, we ensure every piece aligns with your brand strategy and drives engagement.",
    shortDescription: 'Creating engaging content that tells your story.',
    videoUrl: '/service-video/service-content-development-video.mp4',
    benefits: [
      'Engaging storytelling',
      'Consistent brand voice',
      'Increased audience engagement',
      'Better content ROI',
      'Multi-platform content strategy'
    ],
    deliverables: [
      'Content strategy document',
      'Original copywriting',
      'Visual content creation',
      'Content calendar',
      'Performance analytics'
    ]
  },
  {
    id: 'creative-direction',
    serviceName: 'Creative Direction',
    description: "Our creative direction service provides the vision and leadership needed to bring your brand to life visually. We guide all creative aspects of your brand's expression, ensuring cohesive and impactful design across all touchpoints.",
    shortDescription: "Guiding your brand's visual journey with expertise.",
    videoUrl: '/service-video/service-creative-direction-video.mp4',
    benefits: [
      'Cohesive visual strategy',
      'Innovative design solutions',
      'Brand consistency',
      'Enhanced visual impact',
      'Creative problem solving'
    ],
    deliverables: [
      'Creative strategy document',
      'Design direction guidelines',
      'Project art direction',
      'Visual concept development',
      'Design review and feedback'
    ]
  },
  {
    id: 'digital-management',
    serviceName: 'Digital Management',
    description: "We provide comprehensive digital management services to maintain and optimize your brand's online presence. From website design and development to social media management, we ensure your digital platforms effectively represent your brand.",
    shortDescription: 'Managing and enhancing your digital presence with modern website design and optimization.',
    videoUrl: '/service-video/service-digital-management-video.mp4',
    benefits: [
      'Professional website design and development',
      'Enhanced user experience and interface',
      'Consistent online presence',
      'Improved digital engagement',
      'Regular platform updates',
      'Performance monitoring',
      'Digital asset management'
    ],
    deliverables: [
      'Custom website design and development',
      'Responsive and mobile-friendly layouts',
      'Digital strategy plan',
      'Regular maintenance schedule',
      'Performance reports',
      'Content updates',
      'Platform optimization'
    ]
  }
]; 