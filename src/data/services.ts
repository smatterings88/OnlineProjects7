import { Globe, FileText, TrendingUp, Palette, UserCheck, Brain } from 'lucide-react';

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  fullDescription: string;
}

const services: ServiceType[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'End-to-End AI Development and Integration',
    icon: Brain,
    features: [
      'Custom AI model development and training',
      'Natural Language Processing (NLP) solutions',
      'Computer Vision applications',
      'AI-powered automation systems',
      'Machine Learning integration',
      'AI consulting and strategy'
    ],
    fullDescription: 'Our AI Solutions service provides comprehensive artificial intelligence development and integration tailored to your business needs. We specialize in developing custom AI models, implementing natural language processing systems, creating computer vision applications, and designing AI-powered automation solutions. Our team of experts guides you through the entire process, from initial strategy to deployment and maintenance, ensuring your AI implementation delivers real business value.'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom websites and web applications built to meet your specific business needs.',
    icon: Globe,
    features: [
      'Responsive website design for all devices',
      'E-commerce solutions and integrations',
      'Custom web application development',
      'Website maintenance and support',
      'Performance optimization',
      'SEO-friendly structure'
    ],
    fullDescription: 'Our web development services focus on creating custom websites and web applications tailored to your business objectives. We combine clean code, modern design principles, and best practices to deliver high-performance, responsive websites that work seamlessly across all devices. From simple informational sites to complex e-commerce platforms, we provide end-to-end development solutions including ongoing maintenance and support.'
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'Engaging content that tells your brand story and connects with your target audience.',
    icon: FileText,
    features: [
      'Blog posts and articles',
      'Website copy and product descriptions',
      'Email newsletters and campaigns',
      'Social media content',
      'Whitepapers and case studies',
      'SEO optimization for all content'
    ],
    fullDescription: 'Our content creation service provides high-quality, engaging content that resonates with your target audience. We craft compelling narratives that align with your brand voice and business goals, whether you need blog posts, website copy, email campaigns, or social media content. Each piece is carefully researched and strategically optimized for search engines to maximize visibility and engagement.'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions to increase your online visibility and drive growth.',
    icon: TrendingUp,
    features: [
      'SEO optimization and strategy',
      'Social media marketing and management',
      'Email marketing campaigns',
      'PPC and Google Ads management',
      'Content marketing strategy',
      'Performance tracking and analytics'
    ],
    fullDescription: 'Our digital marketing services are designed to build your online presence and drive measurable results. We create comprehensive strategies that incorporate SEO, social media, email marketing, and paid advertising to reach your target audience effectively. Our data-driven approach allows us to continuously optimize campaigns for maximum ROI, while detailed analytics reporting provides clear insights into performance.'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Professional visual designs that enhance your brand identity and marketing materials.',
    icon: Palette,
    features: [
      'Logo design and brand identity',
      'Social media graphics and templates',
      'Marketing collateral and print materials',
      'UI/UX design for websites and apps',
      'Infographics and data visualization',
      'Packaging design'
    ],
    fullDescription: 'Our graphic design services transform ideas into compelling visual communications that strengthen your brand. From logo development and brand identity systems to marketing materials and digital assets, we create designs that are both aesthetically pleasing and strategically effective. Our design process emphasizes understanding your brand values and audience preferences to deliver visuals that make a lasting impression.'
  },
  {
    id: 'virtual-assistant',
    title: 'Virtual Assistant',
    description: 'Administrative support and task management to help you focus on growing your business.',
    icon: UserCheck,
    features: [
      'Email and calendar management',
      'Customer service and support',
      'Data entry and administration',
      'Research and presentation preparation',
      'Travel arrangements and scheduling',
      'Social media management'
    ],
    fullDescription: 'Our virtual assistant services provide reliable administrative support to help you reclaim your time and focus on core business activities. Our experienced assistants handle everything from email management and scheduling to customer service and research. We establish efficient workflows and communication systems to seamlessly integrate with your business, providing the exact level of support you need when you need it.'
  }
];

export default services;