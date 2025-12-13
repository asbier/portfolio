import React from 'react';
import { motion } from 'framer-motion';
import './CaseStudyGrid.css';
import sliderVW from '../../Assets/SliderTeaser/SliderImage_Volkswagen_N_UserJourney.gif';
import sliderVWProb from '../../Assets/SliderTeaser/SliderImage_Volkswagen-IDModelleProbefahren.png';
import sliderEdited from '../../Assets/SliderTeaser/SliderImage_EDITED.gif';
import sliderEditedStores from '../../Assets/SliderTeaser/SliderImage_EDITED-Stores.gif';
import sliderEditedEvent from '../../Assets/SliderTeaser/SliderImage-EDITED-Event.gif';
import sliderConic from '../../Assets/SliderTeaser/SliderImage_ConicRose.jpg';
import sliderBiorama from '../../Assets/SliderTeaser/SliderImage_BIORAMA.jpg';
import sliderComma from '../../Assets/SliderTeaser/SliderImage_Comma.jpg';
import sliderMonaM from '../../Assets/SliderTeaser/SliderImage_MonaM.gif';
import sliderMonki from '../../Assets/SliderTeaser/SliderImage_MONKI.jpg';
import sliderBumble from '../../Assets/SliderTeaser/SliderImage_BUMBLE.jpg';
import sliderPerma from '../../Assets/SliderTeaser/SliderImage_PermaCulture.png';
import sliderGap from '../../Assets/SliderTeaser/SliderImage_TheGapMagazine.gif';
import sliderHella from '../../Assets/SliderTeaser/SliderImage_HellaGutmannDashboard.png';
import sliderAYRebrand from '../../Assets/SliderTeaser/SliderImage_AboutYou_Rebrand.png';
import sliderAYAwards from '../../Assets/SliderTeaser/SliderImage_AboutYou_Awards.png';
import sliderCarharttHelp from '../../Assets/SliderTeaser/SliderImage_Carhartt-WIP_Helpcenter.png';
import sliderCarharttDS from '../../Assets/SliderTeaser/SliderImage_Carhartt-WIP-ImageSlider.png';
import sliderCarharttShop from '../../Assets/SliderTeaser/ImageSlider_Carhartt-WIP_Shopexperience.jpg';
import sliderJovana from '../../Assets/SliderTeaser/SliderImageJovana.png';
import sliderIndie from '../../Assets/SliderTeaser/SliderImage_Indie.png';

const caseStudies = [
  // Job Market Dashboard (before Hella Gutmann)
  {
    id: -2,
    title: 'JOB MARKET DASHBOARD',
    subtitle: 'Berlin Engineering Market Analysis',
    gradient: 'linear-gradient(to bottom, #0f3057, #6fa3d6)',
    tags: ['JOB MARKET', 'UX DESIGN', 'DASHBOARD'],
    category: 'commercial',
  },
  // Hella Gutmann (before Volkswagen)
  {
    id: -1,
    title: 'HELLA GUTMANN ADAS',
    imageUrl: sliderHella,
    subtitle: 'ADAS Dashboard Redesign',
    gradient: 'linear-gradient(to bottom, #1b365d, #4f9dd9)',
    tags: ['HELLA GUTMANN', 'UX DESIGN', 'ADAS'],
    category: 'commercial',
  },
  // Volkswagen Cases
  {
    id: 0,
    title: 'VW STOCK LOCATOR',
    imageUrl: sliderVWProb,
    subtitle: 'User Journey Design',
    gradient: 'linear-gradient(to bottom, #2600ff, #4a90e2)',
    tags: ['VOLKSWAGEN', 'UX DESIGN', 'USER JOURNEY'],
    category: 'commercial',
  },
  {
    id: 1,
    title: 'VW QUICK ENTRY',
    imageUrl: sliderVW,
    subtitle: 'Online Buyer Experience',
    gradient: 'linear-gradient(to bottom, #2600ff, #00d4aa)',
    tags: ['VOLKSWAGEN', 'UX DESIGN', 'INNOVATION'],
    category: 'commercial',
  },
  // Carhartt Cases
  {
    id: 2,
    title: 'CARHARTT HELP CENTER',
    imageUrl: sliderCarharttHelp,
    subtitle: 'Support Experience',
    gradient: 'linear-gradient(to bottom, #1a1a1a, #666666)',
    tags: ['CARHARTT', 'UX DESIGN', 'SUPPORT'],
    category: 'commercial',
  },
  {
    id: 3,
    title: 'CARHARTT WIP',
    imageUrl: sliderCarharttDS,
    subtitle: 'Building a System for Video and Image Formats',
    gradient: 'linear-gradient(to bottom, #1a1a1a, #333333)',
    tags: ['CARHARTT', 'UX DESIGN', 'TECHNICAL'],
    category: 'commercial',
  },
  {
    id: 4,
    title: 'CARHARTT SHOPEXPERIENCE',
    imageUrl: sliderCarharttShop,
    subtitle: 'Shop Experience Design',
    gradient: 'linear-gradient(to bottom, #1a1a1a, #4a4a4a)',
    tags: ['CARHARTT', 'UX DESIGN', 'E-COMMERCE'],
    category: 'commercial',
  },
  // EDITED Cases
  {
    id: 6,
    title: 'EDITED STORES',
    imageUrl: sliderEditedStores,
    subtitle: 'Store Design & Vision',
    gradient: 'linear-gradient(to bottom, #979797, #c0c0c0)',
    tags: ['EDITED', 'ART DIRECTION', 'RETAIL'],
    category: 'commercial',
  },
  {
    id: 7,
    title: 'EDITED EVENTS',
    imageUrl: sliderEditedEvent,
    subtitle: 'Seasonal Event Design',
    gradient: 'linear-gradient(to bottom, #979797, #deff06)',
    tags: ['EDITED', 'ART DIRECTION', 'EVENTS'],
    category: 'commercial',
  },
  {
    id: 8,
    title: 'EDITED SOCIAL',
    imageUrl: sliderEdited,
    subtitle: 'Social Media Concept',
    gradient: 'linear-gradient(to bottom, #979797, #b0b0b0)',
    tags: ['EDITED', 'ART DIRECTION', 'SOCIAL MEDIA'],
    category: 'commercial',
  },
  // ABOUT YOU Cases
  {
    id: 9,
    title: 'ABOUT YOU REBRAND',
    subtitle: 'Broader Target Group',
    gradient: 'linear-gradient(to bottom, #ff7a15, #ffa500)',
    imageUrl: sliderAYRebrand,
    tags: ['ABOUT YOU', 'ART DIRECTION', 'BRANDING'],
    category: 'commercial',
  },
  {
    id: 12,
    title: 'ABOUT YOU AWARDS',
    subtitle: 'Awards Show Design',
    gradient: 'linear-gradient(to bottom, #ff7a15, #deff06)',
    imageUrl: sliderAYAwards,
    tags: ['ABOUT YOU', 'ART DIRECTION', 'EVENTS'],
    category: 'commercial',
  },
  // Other Projects
  {
    id: 13,
    title: 'CONIC ROSE',
    subtitle: 'Album Cover Design',
    gradient: 'linear-gradient(to bottom, #979797, #f6a7a8)',
    imageUrl: sliderConic,
    tags: ['DESIGN', 'ALBUM ART', 'VISUAL'],
    category: 'private',
  },
  {
    id: 14,
    title: 'JOVANA REISINGER',
    imageUrl: sliderJovana,
    subtitle: 'Book & Visual Design',
    gradient: 'linear-gradient(to bottom, #d4a5ff, #ff6b9d)',
    tags: ['DESIGN', 'PRINT', 'VISUAL'],
    category: 'private',
  },
  {
    id: 15,
    title: 'HEROES & HEROINES',
    imageUrl: sliderBumble,
    subtitle: 'Event Experience',
    gradient: 'linear-gradient(to bottom, #ffb115, #ff5722)',
    tags: ['EVENT', 'EXPERIENCE', 'BRANDING'],
    category: 'commercial',
  },
  {
    id: 16,
    title: 'PLASTIC MEDIA',
    imageUrl: sliderPerma,
    subtitle: 'Agency Work',
    gradient: 'linear-gradient(to bottom, #00bcd4, #009688)',
    tags: ['AGENCY', 'DESIGN', 'BRANDING'],
    category: 'commercial',
  },
  {
    id: 17,
    title: 'MONOPOL MEDIA',
    imageUrl: sliderGap,
    subtitle: 'Agency Direction',
    gradient: 'linear-gradient(to bottom, #607d8b, #455a64)',
    tags: ['ART DIRECTION', 'AGENCY', 'EDITORIAL'],
    category: 'commercial',
  },
  {
    id: 18,
    title: 'COMMA',
    imageUrl: sliderComma,
    subtitle: 'Brand Work',
    gradient: 'linear-gradient(to bottom, #8bc34a, #4caf50)',
    tags: ['ART DIRECTION', 'BRANDING', 'FASHION'],
    category: 'commercial',
  },
  {
    id: 19,
    title: 'MONA M',
    imageUrl: sliderMonaM,
    subtitle: 'Album Cover',
    gradient: 'linear-gradient(to bottom, #9c27b0, #673ab7)',
    tags: ['DESIGN', 'ALBUM ART', 'MUSIC'],
    category: 'private',
  },
  // Magazine Cases
  {
    id: 20,
    title: 'BIORAMA',
    imageUrl: sliderBiorama,
    subtitle: 'Art Direction & Refresh',
    gradient: 'linear-gradient(to bottom, #607d8b, #90a4ae)',
    tags: ['ART DIRECTION', 'EDITORIAL', 'MAGAZINE'],
    category: 'commercial',
  },
  {
    id: 21,
    title: 'MONKI MAGAZINE',
    imageUrl: sliderMonki,
    subtitle: 'Art Direction Assistant',
    gradient: 'linear-gradient(to bottom, #00bcd4, #80deea)',
    tags: ['ART DIRECTION', 'EDITORIAL', 'ILLUSTRATION'],
    category: 'commercial',
  },
  {
    id: 22,
    title: 'INDIE MAGAZINE',
    subtitle: 'Layout & Cover Design',
    gradient: 'linear-gradient(to bottom, #009688, #4db6ac)',
    imageUrl: sliderIndie,
    tags: ['DESIGN', 'EDITORIAL', 'ILLUSTRATION'],
    category: 'commercial',
  },
];

const CaseStudyGrid = ({ onSelectCase, hasVisibleContent, activeFilter, setActiveFilter }) => {
  // Filter case studies based on activeFilter (can be category or tag)
  const filteredStudies = React.useMemo(() => {
    if (!activeFilter || activeFilter === 'all') {
      return caseStudies;
    }
    // Check if filtering by category
    if (activeFilter === 'commercial' || activeFilter === 'private') {
      return caseStudies.filter(study => study.category === activeFilter);
    }
    // Filter by tag (e.g., 'VOLKSWAGEN', 'UX DESIGN', etc.)
    return caseStudies.filter(study => 
      study.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase())) ||
      study.title.toLowerCase().includes(activeFilter.toLowerCase()) ||
      study.subtitle.toLowerCase().includes(activeFilter.toLowerCase())
    );
  }, [activeFilter]);

  // Handle tag click as filter
  const handleTagClick = (e, tag) => {
    e.stopPropagation();
    if (setActiveFilter) {
      setActiveFilter(tag.toLowerCase());
    }
  };

  return (
    <div className={`case-study-container ${hasVisibleContent ? 'with-about' : ''}`}>
      {/* Grid */}
      <div className="case-study-grid">
        {filteredStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => onSelectCase(study.id)}
            className="case-card"
          >
            <div
              className="card-background"
              style={{
                background: study.gradient,
              }}
            >
              {study.imageUrl && (
                <img
                  className="card-image"
                  src={study.imageUrl}
                  alt={study.title}
                  loading="lazy"
                />
              )}
              {/* Tags at bottom */}
              <div className="card-tags">
                {study.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="tag"
                    onClick={(e) => handleTagClick(e, tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyGrid;
