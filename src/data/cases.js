// Mock case data for 14 portfolio cases
export const cases = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    category: "commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=350&h=500&fit=crop",
    description: "Complete redesign of e-commerce platform focusing on user experience and conversion optimization.",
    tags: ["UX Design", "E-Commerce", "Conversion"]
  },
  {
    id: 2,
    title: "Brand Identity System",
    category: "private",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=350&h=500&fit=crop",
    description: "Comprehensive brand identity system with typography, color palette, and visual guidelines.",
    tags: ["Branding", "Identity", "Design System"]
  },
  {
    id: 3,
    title: "Mobile App Interface",
    category: "commerce",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=350&h=500&fit=crop",
    description: "Modern mobile app interface design with focus on accessibility and user engagement.",
    tags: ["Mobile", "UI Design", "Accessibility"]
  },
  {
    id: 4,
    title: "Editorial Design Project",
    category: "private",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=350&h=500&fit=crop",
    description: "Editorial design for print and digital publications with custom typography.",
    tags: ["Editorial", "Typography", "Print"]
  },
  {
    id: 5,
    title: "SaaS Dashboard Design",
    category: "commerce",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=350&h=500&fit=crop",
    description: "Data visualization dashboard for SaaS platform with intuitive user interface.",
    tags: ["Dashboard", "Data Viz", "SaaS"]
  },
  {
    id: 6,
    title: "Art Direction Campaign",
    category: "private",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=350&h=500&fit=crop",
    description: "Creative direction for multi-channel marketing campaign with visual storytelling.",
    tags: ["Art Direction", "Campaign", "Creative"]
  },
  {
    id: 7,
    title: "E-Commerce Checkout Flow",
    category: "commerce",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=350&h=500&fit=crop",
    description: "Optimized checkout experience reducing cart abandonment and improving conversion rates.",
    tags: ["E-Commerce", "UX", "Conversion"]
  },
  {
    id: 8,
    title: "Portfolio Website Design",
    category: "private",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=350&h=500&fit=crop",
    description: "Minimalist portfolio website design showcasing creative work with elegant presentation.",
    tags: ["Web Design", "Portfolio", "Minimalist"]
  },
  {
    id: 9,
    title: "Product Landing Page",
    category: "commerce",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=350&h=500&fit=crop",
    description: "High-converting landing page design with clear value proposition and call-to-action.",
    tags: ["Landing Page", "Conversion", "Marketing"]
  },
  {
    id: 10,
    title: "Photography Portfolio",
    category: "private",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=350&h=500&fit=crop",
    description: "Visual portfolio showcasing photography work with immersive gallery experience.",
    tags: ["Photography", "Portfolio", "Gallery"]
  },
  {
    id: 11,
    title: "Marketplace Platform",
    category: "commerce",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=350&h=500&fit=crop",
    description: "Multi-vendor marketplace platform with advanced filtering and search capabilities.",
    tags: ["Marketplace", "Platform", "E-Commerce"]
  },
  {
    id: 12,
    title: "Creative Studio Branding",
    category: "private",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=350&h=500&fit=crop",
    description: "Complete brand identity for creative studio including logo, website, and marketing materials.",
    tags: ["Branding", "Identity", "Studio"]
  },
  {
    id: 13,
    title: "Subscription Service UI",
    category: "commerce",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=350&h=500&fit=crop",
    description: "User interface design for subscription-based service with seamless onboarding.",
    tags: ["Subscription", "UI Design", "Onboarding"]
  },
  {
    id: 14,
    title: "Exhibition Design",
    category: "private",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=350&h=500&fit=crop",
    description: "Spatial design for art exhibition with interactive elements and immersive experience.",
    tags: ["Exhibition", "Spatial", "Interactive"]
  }
];

// Helper function to get cases by category
export const getCasesByCategory = (category) => {
  if (!category || category === 'all') return cases;
  return cases.filter(caseItem => caseItem.category === category);
};

// Helper function to get case by ID
export const getCaseById = (id) => {
  return cases.find(caseItem => caseItem.id === parseInt(id));
};


