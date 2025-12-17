import React from 'react';

const Navbar = ({ activeFilter, setActiveFilter }) => {
  const mainNavs = ['Contact', 'History'];
  const filterOptions = ['all', 'commerce', 'private']; 

  const handleFilterChange = (filterName) => {
      setActiveFilter(filterName);
  };
  
  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-background-light"> 
      <div className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto"> 
        
        {/* Titel: Responsiv skaliert (text-xl auf Mobile, text-5xl auf Desktop) */}
        <h1 className="text-xl sm:text-2xl lg:text-5xl font-bold font-neue uppercase text-title-gray">
          PRODUCT DESIGN & BRANDING 
        </h1>

        <nav className="flex space-x-1 sm:space-x-2 items-center">
          
          {/* Filter Buttons */}
          {filterOptions.map((filterName) => (
            <button 
                key={filterName}
                onClick={() => handleFilterChange(filterName)}
                className={`
                  px-3 py-1 lg:px-6 lg:py-2 
                  text-xs sm:text-base lg:text-[2rem] font-semibold uppercase 
                  font-neue rounded-full border border-[1px] transition-colors 
                  ${activeFilter === filterName 
                      ? 'bg-portfolio-green text-black border-portfolio-green' 
                      : 'hover:bg-gray-100 text-tag-gray border-tag-gray'
                  }`}
            >
                {filterName.toUpperCase()}
            </button>
          ))}

          {/* Main Navigation Links */}
          {mainNavs.map((item) => (
            <a 
              key={item} 
              /* 🛑 HIER IST DIE ÄNDERUNG: mailto für Contact 🛑 */
              href={item === 'Contact' ? 'mailto:deine-email@beispiel.de' : '/history'} 
              className={`
                px-3 py-1 lg:px-6 lg:py-2 
                text-xs sm:text-base lg:text-[2rem] font-semibold uppercase 
                font-neue rounded-full border border-[1px] transition-colors 
                hover:bg-gray-100 text-tag-gray border-tag-gray`}
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