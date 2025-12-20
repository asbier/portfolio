import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Den Import von getCaseById löschen wir, da wir die Props nutzen!
import MobileCaseView from './MobileCaseView';
import DesktopCaseView from './DesktopCaseView';

const CaseDetail = ({ cases }) => { // <--- cases als Prop empfangen
  const { id } = useParams();
  
  // Wir suchen direkt im cases-Array
  const caseItem = cases.find((c) => c.id.toString() === id.toString());

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!caseItem) return <div className="p-20 text-center font-neue text-black">Case not found</div>;

  return isMobile ? (
    <MobileCaseView caseItem={caseItem} />
  ) : (
    <DesktopCaseView caseItem={caseItem} />
  );
};

export default CaseDetail;