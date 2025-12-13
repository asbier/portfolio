import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import './ProjectPage.css';
import { useNavigate } from 'react-router-dom';

const ProjectPage = ({ isOpen, onClose, projectData }) => {
  const [blocks, setBlocks] = useState([]);
  const [activeBlockId, setActiveBlockId] = useState(null);
  const [isResizing, setIsResizing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    onClose();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get responsive positions based on viewport width
  const getResponsivePositions = useCallback(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    
    // Mobile: return null positions - blocks will stack via CSS
    if (vw <= 768) {
      return {
        image: [
          { left: 0, top: 0, width: vw - 36, height: Math.min(250, vh * 0.35) },
          { left: 0, top: 0, width: vw - 36, height: Math.min(250, vh * 0.35) },
          { left: 0, top: 0, width: vw - 36, height: Math.min(250, vh * 0.35) },
        ],
        overview: { left: 0, top: 0, width: vw - 36, height: Math.min(200, vh * 0.25) },
        challenge: { left: 0, top: 0, width: vw - 36, height: Math.min(200, vh * 0.25) },
        solution: { left: 0, top: 0, width: vw - 36, height: Math.min(200, vh * 0.25) },
        results: { left: 0, top: 0, width: vw - 36, height: Math.min(200, vh * 0.25) },
        hero: { left: 0, top: 0, width: vw - 36, height: Math.min(280, vh * 0.35) },
        description: { left: 0, top: 0, width: vw - 36, height: Math.min(200, vh * 0.25) },
        info: { left: 0, top: 0, width: vw - 36, height: Math.min(300, vh * 0.4) },
      };
    }
    
    // Tablet: scaled down positions
    if (vw <= 1024) {
      const scale = Math.min(vw / 1024, 1);
      const baseGap = 20 * scale;
      
      return {
        image: [
          { left: vw * 0.25, top: 50, width: Math.min(320, vw * 0.25), height: Math.min(400, vh * 0.5) },
          { left: vw * 0.55, top: 70, width: Math.min(350, vw * 0.28), height: Math.min(380, vh * 0.45) },
          { left: vw * 0.3, top: vh * 0.5, width: Math.min(300, vw * 0.22), height: Math.min(320, vh * 0.4) },
        ],
        overview: { left: baseGap, top: vh * 0.35, width: Math.min(320, vw * 0.25), height: Math.min(280, vh * 0.3) },
        challenge: { left: baseGap, top: vh * 0.65, width: Math.min(320, vw * 0.25), height: Math.min(260, vh * 0.28) },
        solution: { left: vw * 0.28, top: vh * 0.8, width: Math.min(350, vw * 0.28), height: Math.min(280, vh * 0.3) },
        results: { left: vw * 0.6, top: vh * 0.45, width: Math.min(320, vw * 0.25), height: Math.min(380, vh * 0.45) },
        hero: { left: vw * 0.08, top: 80, width: Math.min(500, vw * 0.35), height: Math.min(350, vh * 0.4) },
        description: { left: vw * 0.1, top: vh * 0.45, width: Math.min(350, vw * 0.28), height: Math.min(240, vh * 0.28) },
        info: { left: 20, top: 50, width: Math.min(300, vw * 0.24), height: Math.min(350, vh * 0.4) },
      };
    }
    
    // Desktop: full positions
    const scale = Math.min(vw / 1400, 1);
    const baseGap = 20 * scale;
    
    return {
      image: [
        { left: vw * 0.28, top: 50, width: Math.min(380, vw * 0.28), height: Math.min(500, vh * 0.6) },
        { left: vw * 0.58, top: 80, width: Math.min(420, vw * 0.3), height: Math.min(480, vh * 0.55) },
        { left: vw * 0.35, top: vh * 0.55, width: Math.min(350, vw * 0.25), height: Math.min(400, vh * 0.45) },
      ],
      overview: { left: baseGap, top: vh * 0.4, width: Math.min(380, vw * 0.28), height: Math.min(320, vh * 0.35) },
      challenge: { left: baseGap, top: vh * 0.7, width: Math.min(380, vw * 0.28), height: Math.min(300, vh * 0.3) },
      solution: { left: vw * 0.32, top: vh * 0.85, width: Math.min(420, vw * 0.3), height: Math.min(320, vh * 0.32) },
      results: { left: vw * 0.65, top: vh * 0.5, width: Math.min(380, vw * 0.28), height: Math.min(450, vh * 0.5) },
      hero: { left: vw * 0.1, top: 100, width: Math.min(600, vw * 0.4), height: Math.min(400, vh * 0.45) },
      description: { left: vw * 0.12, top: vh * 0.5, width: Math.min(400, vw * 0.3), height: Math.min(280, vh * 0.3) },
      info: { left: 20, top: 50, width: Math.min(360, vw * 0.24), height: Math.min(400, vh * 0.45) },
    };
  }, []);

  // Initialize blocks with positions when project data changes
  useEffect(() => {
    if (projectData && projectData.blocks) {
      const positions = getResponsivePositions();

      let imageIndex = 0;
      const blocksWithPositions = projectData.blocks.map((block, index) => {
        let position;
        if (block.type === 'image') {
          position = positions.image[imageIndex] || positions.image[0];
          imageIndex++;
        } else {
          position = positions[block.type] || { left: 100 + index * 50, top: 100 + index * 50, width: 300, height: 200 };
        }
        return {
          ...block,
          ...position,
          zIndex: index + 1,
        };
      });

      // Add info block
      const infoBlock = {
        id: 'info',
        type: 'info',
        ...positions.info,
        zIndex: 10,
      };

      setBlocks([infoBlock, ...blocksWithPositions]);
    }
  }, [projectData, getResponsivePositions]);

  // Update positions on window resize
  useEffect(() => {
    const handleResize = () => {
      if (isMobile) return; // Don't reposition on mobile
      
      const positions = getResponsivePositions();
      
      setBlocks(prevBlocks => {
        let imageIndex = 0;
        return prevBlocks.map(block => {
          if (block.type === 'info') {
            return { ...block, left: 20, top: 50, width: 360, height: 400 };
          }
          if (block.type === 'image') {
            const pos = positions.image[imageIndex] || positions.image[0];
            imageIndex++;
            return { ...block, ...pos };
          }
          const pos = positions[block.type];
          return pos ? { ...block, ...pos } : block;
        });
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, getResponsivePositions]);

  if (!isOpen || !projectData) return null;

  const bringToFront = (id) => {
    const maxZ = Math.max(...blocks.map(b => b.zIndex || 0));
    setBlocks(prevBlocks =>
      prevBlocks.map(block =>
        block.id === id ? { ...block, zIndex: maxZ + 1 } : block
      )
    );
    setActiveBlockId(id);
  };

  const handleDragEnd = (id, info) => {
    if (isMobile) return;
    setBlocks(prevBlocks =>
      prevBlocks.map(block =>
        block.id === id
          ? { ...block, left: block.left + info.offset.x, top: block.top + info.offset.y }
          : block
      )
    );
  };

  const handleResizeStart = (e, blockId) => {
    if (isMobile) return;
    const block = blocks.find(b => b.id === blockId);
    // Only images should be resizable
    if (!block || block.type !== 'image') return;
    e.stopPropagation();
    setIsResizing(true);
    bringToFront(blockId);

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = block.width;
    const startHeight = block.height;

    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;
      
      setBlocks(prevBlocks =>
        prevBlocks.map(b =>
          b.id === blockId
            ? {
                ...b,
                width: Math.max(150, startWidth + deltaX),
                height: Math.max(100, startHeight + deltaY),
              }
            : b
        )
      );
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const renderBlockContent = (block) => {
    switch (block.type) {
      case 'info':
        return (
          <div className="block-info">
            <h1 className="info-title">{projectData.title}</h1>
            <p className="info-subtitle">{projectData.subtitle}</p>
            <div className="info-meta">
              <span className="info-role">{projectData.role}</span>
              <span className="info-year">{projectData.year}</span>
            </div>
            {projectData.tags && (
              <div className="info-tags">
                {projectData.tags.map((tag, i) => (
                  <span key={i} className="info-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        );

      case 'hero':
        return (
          <div 
            className="block-hero"
            style={{ background: block.gradient || projectData.gradient }}
          >
            <div className="hero-content">
              <div className="hero-title-wrap">
                <h1 className="hero-title">{block.title || projectData.title}</h1>
              </div>
              <div className="hero-subtitle-wrap">
                <p className="hero-subtitle">{block.content || projectData.subtitle}</p>
              </div>
            </div>
          </div>
        );
      
      case 'image':
        return (
          <div className="block-image">
            <img src={block.imageUrl} alt={block.caption || 'Project image'} />
            {block.caption && <span className="image-caption">{block.caption}</span>}
          </div>
        );
      
      case 'overview':
        return (
          <div className="block-text block-overview">
            <h3 className="block-title">Overview</h3>
            <div className="block-divider" />
            <p className="block-content">{block.content}</p>
          </div>
        );
      
      case 'challenge':
        return (
          <div className="block-text block-challenge">
            <h3 className="block-title">The Challenge</h3>
            <div className="block-divider" />
            <p className="block-content">{block.content}</p>
          </div>
        );
      
      case 'solution':
        return (
          <div className="block-text block-solution">
            <h3 className="block-title">The Solution</h3>
            <div className="block-divider" />
            {Array.isArray(block.content) ? (
              <ul className="block-list">
                {block.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="block-content">{block.content}</p>
            )}
          </div>
        );
      
      case 'results':
        return (
          <div className="block-text block-results">
            <h3 className="block-title">Results & Impact</h3>
            <div className="block-divider" />
            {Array.isArray(block.content) ? (
              <ul className="block-list">
                {block.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="block-content">{block.content}</p>
            )}
          </div>
        );
      
      case 'description':
        return (
          <div className="block-text block-description">
            <h3 className="block-title">{block.title || 'About'}</h3>
            <div className="block-divider" />
            <p className="block-content">{block.content}</p>
          </div>
        );
      
      default:
        return (
          <div className="block-text">
            <h3 className="block-title">{block.title || block.type}</h3>
            <div className="block-divider" />
            <p className="block-content">{block.content}</p>
          </div>
        );
    }
  };

  return (
    <motion.div
      className="collage-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Back Arrow */}
      {/* Back Arrow */}
      <button className="collage-back" onClick={onClose}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      {/* Home Logo */}
      <a href="/" className="collage-home-logo" onClick={handleHomeClick}>
        <div className="collage-logo-letters">
          <span className="collage-logo-a">A</span>
          <span className="collage-logo-m">M</span>
        </div>
        <span className="collage-logo-title">PRODUCT DESIGN & BRANDING</span>
      </a>

      {/* Collage Canvas */}
      <div className="collage-canvas">
        {blocks.map((block, index) => {
          const isActive = activeBlockId === block.id;
          
          return (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              drag={!isResizing}
              dragMomentum={false}
              dragElastic={0}
              dragConstraints={false}
              onDragStart={() => bringToFront(block.id)}
              onDragEnd={(e, info) => handleDragEnd(block.id, info)}
              whileHover={{ scale: isResizing ? 1 : 1.01 }}
              whileDrag={{ scale: 1.02, zIndex: 200 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25, delay: index * 0.05 }}
              className={`collage-block ${isActive ? 'active' : ''} ${isMobile ? 'mobile-block' : ''}`}
              style={{
                ...(isMobile ? {} : {
                  left: `${block.left}px`,
                  top: `${block.top}px`,
                  width: `${block.width}px`,
                  height: block.type === 'info' ? 'auto' : `${block.height}px`,
                  minHeight: block.type === 'info' ? `${block.height}px` : undefined,
                }),
                zIndex: isActive ? 100 : block.zIndex || index + 1,
              }}
              onMouseDown={() => bringToFront(block.id)}
            >
              {renderBlockContent(block)}
              
              {/* Resize Handle - Desktop only, images only */}
              {!isMobile && block.type === 'image' && (
                <div 
                  className="resize-handle"
                  onMouseDown={(e) => handleResizeStart(e, block.id)}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M11 0L0 11V12H1L12 1V0H11Z"/>
                    <path d="M11 4L4 11V12H5L12 5V4H11Z"/>
                    <path d="M11 8L8 11V12H9L12 9V8H11Z"/>
                  </svg>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Team Section - if available */}
      {projectData.team && (
        <div className="project-team">
          <h3 className="team-title">Design Team</h3>
          <div className="team-members">
            {projectData.team.map((member, i) => (
              <div key={i} className="team-member">
                <span className="member-name">{member.name}</span>
                <span className="member-role">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectPage;



