// Image paths reference
// Place images in the public/images directory

export const images = {
  // Attorney Bio Images
  attorneyPortrait: '/images/attorney-portrait.jpg', // Main portrait of Norma Henning
  attorneyPortrait2: '/images/attorney-portrait-2.jpg', // Alternative portrait (denim jacket)
  attorneyHonoraryConsul: '/images/honorary-consul.jpg', // Photo with Honorary Consul emblem
  attorneyHonoraryConsulBanner: '/images/honorary-consul-banner.jpg', // Photo with banner "Honorary Consul of the Federal Republic of Germany"
  attorneyNaval: '/images/attorney-naval.jpg', // Photo on ship with helicopter
  attorneyProfessional: '/images/7PWgsf7ekyxExcbqsPx56M9JvVBoxh9qBQjfF9te-_x600-resize-trim(0,0,1280,960).png', // Hero slide: public policy lecture
  
  // Office/Consultation Images
  consultation: '/images/UN7YODP2OLJi16bTeXhjlHnPFtgPFi4Q06v7Qd7M-1920x_-resize-trim(0,0,3840,2563).jpg', // Hero slide: US Market Entry Bootcamp
  officeSpace: '/images/office-space.jpg', // Office environment
  
  // Event/Gallery Images
  germanEmbassy: '/images/german-embassy-group.jpg', // Group photo at German Embassy
  bootcampEvent: '/images/bootcamp-event.jpg', // US Market Entry Bootcamp group photo
  presentation: '/images/presentation.jpg', // Presentation with Abraham Lincoln quote
  
  // Client/Testimonial Related
  passports: '/images/C4ASTuDUUtisY4BU8ZXwWQIhE6yhO08tHuJlBQzs-_x600-resize-trim(0,0,1550,913).jpg', // Hero slide: German embassy group
  consultationClient: '/images/consultation-client.jpg', // Man holding smartphone
  
  // Branding/Logo
  logo: '/images/logo.png', // Henning Law Firm logo
  logoWhite: '/images/logo-white.png', // Henning Law Firm logo on white background
  logoBlack: '/images/logo-black.png', // Henning Law Firm logo on black background
  logoPathElements: '/images/logo-path-elements.png', // Path stepping stones graphic
  
  // Miscellaneous
  uliSteinCartoon: '/images/uli-stein-cartoon.jpg', // Uli Stein cartoon with German text
};

// Helper function to get image with fallback
export const getImagePath = (key: keyof typeof images, fallback?: string): string => {
  return images[key] || fallback || '/images/placeholder.jpg';
};