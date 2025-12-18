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
    description: "Redesigning advanced diagnostic systems to empower workshops through high-speed calibration and intuitive data management.",
    year: "2024",
    role: "LEAD",
    challenge: "The legacy ADAS dashboard suffered from excessive complexity and a lack of intuitive design, rendering mechanical workflows laborious and susceptible to error. Technicians lacked visibility into task progress, potential interruptions, and estimated completion times, which hindered operational efficiency and made documentation tracking unnecessarily difficult.",
    impact: "Streamlined ADAS dashboard workflows that significantly reduced calibration time and enhanced the precision of documentation.",
    detailImage1: "/images/01_hellagutmann/fahrzeug_auswählen_basis_default_1280-800.jpg",
    detailImage2: "/images/01_hellagutmann/hella_gutmann_protocol_2.jpg",
    detailImage3: "/images/01_hellagutmann/hellagutmann_dashboard_adas_guide_calibration.jpg",
    outcome: "A guided, step-by-step interface incorporating real-time estimates, proactive notifications, and integrated documentation layers. This enables mechanics to monitor progress seamlessly, recover from interruptions, and ultimately optimise the entire calibration workflow.",
    learning: "Always be the one to ask—early enough—if a feature is truly required and what fundamental purpose it serves.",
    team: {
      title: "DAYONE X HELLAGUTMANN",
      members: [
        "Christopher G. Product Design Lead",
        "Annemarie S. UX",
        "Bean D. UI",
        "Silvana M. PM"
      ]
    }
  },
  {
    id: 3,
    title: "CARHARTT-WIP",
    category: "PRODUCT DESIGN",
    image: "/images/03_case_03/ImageSlider-Carhartt-Helpcenter.jpg",
    tags: ["UX DESIGN", "UI DESIGN", "STRATEGY"],
    team: {
      title: "CARHARTT-WIP",
      members: [  "DESIGN TEAM ",
        "Digital Design Lead Lutz Erian",
        "Product Designer Annemarie Sauerbier"

      ]
    },
    description: "Developing a help center to improve customer support and self-service capabilities.",
    year: "2019",
    role: "Product / Digital Designer",
    challenge: "Increased support tickets and customer frustration.",
    impact: "Improved self-service rates and reduced support ticket volume through better information architecture and search functionality.",
    detailImage1: "/images/03_case_03/Carhartt_help_desk_live_garmentsecure.jpg",
    detailImage2: "/images/03_case_03/Helpdesk-Userflow.jpg",
    detailImage3: "/images/03_case_03/Helpdesk_Designflow.jpg",
    outcome: "A redesigned help center with intuitive navigation, improved search, and clear categorization that enables customers to quickly find the information they need.",
    learning: "User research and testing are crucial for understanding how customers actually search for information."
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







