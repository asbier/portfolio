import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MobileCaseView from './MobileCaseView';
import DesktopCaseView from './DesktopCaseView';

const CaseDetail = ({ cases }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Support both old numeric IDs and new slugs for backwards compatibility
  const isNumeric = /^\d+$/.test(slug);
  const caseItem = isNumeric
    ? cases.find((c) => c.id.toString() === slug)
    : cases.find((c) => c.slug === slug);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Redirect old numeric URLs to new slug URLs
  useEffect(() => {
    if (caseItem && isNumeric) {
      navigate(`/case/${caseItem.slug}`, { replace: true });
    }
  }, [caseItem, isNumeric, navigate]);

  if (!caseItem) return <div className="p-20 text-center font-neue text-black">Case not found</div>;

  return isMobile ? (
    <MobileCaseView caseItem={caseItem} />
  ) : (
    <DesktopCaseView caseItem={caseItem} />
  );
};

export default CaseDetail;