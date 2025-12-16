import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import { getCaseById } from '../data/cases';

const CaseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const caseItem = getCaseById(id);
  const [zoomedImage, setZoomedImage] = useState(null);

  if (!caseItem) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-900 underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const handleImageDoubleClick = (imageUrl) => {
    setZoomedImage(imageUrl);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  // Mock images for the case detail (in real app, these would come from caseItem)
  const caseImages = [
    { id: 1, url: caseItem.image, alt: `${caseItem.title} - Image 1` },
    { id: 2, url: caseItem.image, alt: `${caseItem.title} - Image 2` },
    { id: 3, url: caseItem.image, alt: `${caseItem.title} - Image 3` },
    { id: 4, url: caseItem.image, alt: `${caseItem.title} - Image 4` },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-8 text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back
          </button>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {caseItem.title}
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            {caseItem.description}
          </p>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {caseImages.map((image, index) => (
              <motion.div
                key={image.id}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.2}
                whileDrag={{ scale: 1.05 }}
                className="cursor-move"
              >
                <div
                  className="relative bg-gray-100 rounded-lg overflow-hidden aspect-[7/10]"
                  onDoubleClick={() => handleImageDoubleClick(image.url)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Text Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseItem.tags.map((tag, index) => (
              <motion.div
                key={index}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.1}
                whileDrag={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-lg cursor-move"
              >
                <h3 className="text-sm font-semibold text-gray-900 mb-2">{tag}</h3>
                <p className="text-sm text-gray-600">
                  Minimal text content for {tag.toLowerCase()} related information.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Zoom Modal */}
      {zoomedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeZoom}
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={zoomedImage}
            alt="Zoomed"
            className="max-w-full max-h-full object-contain"
            style={{ width: '700px', height: '1000px' }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={closeZoom}
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
          >
            ×
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default CaseDetail;


