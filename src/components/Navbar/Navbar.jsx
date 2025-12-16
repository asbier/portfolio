import React from 'react';
// Import Link from react-router-dom if you use it, or leave as <a> tags if not.

const Navbar = () => {
  return (
    // 🛑 CRITICAL: Ensure 'fixed', 'top-0', 'w-full', and a high 'z-index' are present
    <header className="fixed top-0 left-0 w-full z-20 bg-white shadow-md"> 
      <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        
        {/* Large Title - mimicking the 'PRODUCT DESIGN & BRANDING' area */}
        <h1 className="text-4xl sm:text-5xl font-bold font-neue text-black uppercase opacity-20">
          PRODUCT DESIGN & BRANDING 
        </h1>

        {/* Navigation Links - mimicking the buttons on the right */}
        <nav className="flex space-x-4">
          {['Contact', 'Commercial', 'Private', 'History'].map((item) => (
            <a 
              key={item} 
              // Using relative links for proper navigation
              href={item === 'Contact' ? '/contact' : '#'} 
              className={`px-4 py-2 text-sm uppercase font-neue font-medium rounded-full transition-colors 
                ${item === 'Contact' ? 'bg-portfolio-green text-black' : 'hover:bg-gray-100 text-black'}`
              }
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;