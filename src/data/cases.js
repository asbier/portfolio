// Portfolio case data
export const cases = [
  {
    id: 1,
    title: "Berlin Tech Job Dashboard",
    category: "PRODUCT DESIGN / DEV COLLAB",
    image: "linear-gradient(180deg, #3A4057 0%, #363C53 100%)",
    tags: ["REACT", "TAILWIND", "DASHBOARD"],
    description: "Visualizing the Berlin tech job market through data-driven design.",
    year: "2024",
    challenge: "Fragmented job data made it hard for developers to find roles.",
    detailImage1: "linear-gradient(180deg, #3A4057 0%, #363C53 100%)",
    impact: "Created a focused interface for tech-stack based job hunting.",
    detailImage2: "linear-gradient(180deg, #363C53 0%, #1A1D25 100%)",
    outcome: "A high-fidelity MVP built with a developer partner.",
    detailImage3: "linear-gradient(180deg, #3A4057 0%, #363C53 100%)",
  },
  {
    id: 2, 
    title: "HellagutmannxDAYONE",
    category: "PRODUCT DESIGN",
    image: "/images/01_hellagutmann/sliderImage_hellagutmann_dashboard_hero.jpg",
    tags: ["DIAGNOSTICS", "ADAS", "UI-DESIGN"],
    description: "Advanced diagnostic systems for workshops.",
    year: "2024",
    challenge: "Workshops needed faster vehicle selection.",
    impact: "Streamlined ADAS workflows to save time.",
    detailImage1: "/images/01_hellagutmann/fahrzeug_auswählen_basis_default_1280-800.jpg",
    detailImage2: "/images/01_hellagutmann/hella_gutmann_protocol_2.jpg",
    detailImage3: "/images/01_hellagutmann/hellagutmann_dashboard_adas_guide_calibration.jpg",
    outcome: "Reduced vehicle selection time and improved accuracy."
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







