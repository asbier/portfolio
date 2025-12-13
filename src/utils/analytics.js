// Analytics utility functions for portfolio tracking

// Check if Google Analytics is loaded and user consented
const isAnalyticsAvailable = () => {
  const consent = localStorage.getItem('cookie-consent');
  return consent === 'accepted' && window.gtag;
};

// Generic event tracking
export const trackEvent = (eventName, parameters = {}) => {
  if (!isAnalyticsAvailable()) return;
  
  window.gtag('event', eventName, {
    ...parameters,
    // Add timestamp for better tracking
    custom_timestamp: new Date().toISOString()
  });
};

// Portfolio-specific tracking functions
export const trackProjectView = (projectName, projectIndex) => {
  trackEvent('project_viewed', {
    project_name: projectName,
    project_index: projectIndex,
    event_category: 'portfolio',
    event_label: `Project: ${projectName}`
  });
};

export const trackContactClick = (source) => {
  trackEvent('contact_clicked', {
    contact_source: source, // 'nav', 'footer', 'about'
    event_category: 'conversion',
    event_label: `Contact from ${source}`
  });
};

export const trackCVDownload = () => {
  trackEvent('cv_download', {
    event_category: 'conversion',
    event_label: 'CV Download',
    value: 1 // This is a valuable action
  });
};

export const trackPasswordEntry = (projectName, success) => {
  trackEvent('password_entered', {
    project_name: projectName,
    success: success,
    event_category: 'engagement',
    event_label: `Password ${success ? 'Success' : 'Failed'}: ${projectName}`
  });
};

export const trackVideoInteraction = (videoName, action, completion = null) => {
  trackEvent('video_interaction', {
    video_name: videoName,
    video_action: action, // 'play', 'pause', 'complete'
    completion_percentage: completion,
    event_category: 'media',
    event_label: `Video ${action}: ${videoName}`
  });
};

export const trackPageSection = (sectionName, action) => {
  trackEvent('page_section', {
    section_name: sectionName,
    section_action: action, // 'expanded', 'collapsed', 'viewed'
    event_category: 'engagement',
    event_label: `${sectionName} ${action}`
  });
};

export const trackModalInteraction = (modalType, action) => {
  trackEvent('modal_interaction', {
    modal_type: modalType,
    modal_action: action, // 'opened', 'closed'
    event_category: 'ui_interaction',
    event_label: `${modalType} modal ${action}`
  });
};

// Enhanced page view tracking
export const trackPageView = (pagePath, pageTitle) => {
  if (!isAnalyticsAvailable()) return;
  
  window.gtag('config', 'GA_MEASUREMENT_ID', {
    page_path: pagePath,
    page_title: pageTitle,
    anonymize_ip: true
  });
};

// Track user journey milestones
export const trackUserJourney = (milestone) => {
  trackEvent('user_journey', {
    milestone: milestone, // 'landing', 'about_viewed', 'project_opened', 'contact_intent'
    event_category: 'journey',
    event_label: `Journey: ${milestone}`
  });
}; 