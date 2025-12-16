import React from 'react';

// Accept the filter state/setter as props
const Navbar = ({ activeFilter, setActiveFilter }) => {
  const mainNavs = ['Contact', 'History'];
  const filterOptions = ['all', 'commerce', 'private']; 

  const handleFilterChange = (filterName) => {
      setActiveFilter(filterName);
  };
  
  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-background-light"> 
      {/* Reduced padding for tighter fit */}
      <div className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto"> 
        
        {/* Left Side: Large Title - Apply D9D9D9 color */}
        <h1 className="text-xl sm:text-2xl lg:text-5xl font-bold font-neue uppercase text-title-gray">
          PRODUCT DESIGN & BRANDING 
        </h1>

        {/* Right Side: Consolidated Navigation and Filters */}
        <nav className="flex space-x-1 sm:space-x-2 items-center overflow-x-auto"> {/* Added overflow-x-auto for extremely small screens */}
          
          {/* Filter Buttons */}
          {filterOptions.map((filterName) => (
            <button 
                key={filterName}
                onClick={() => handleFilterChange(filterName)}
                // 🛑 NEW RESPONSIVE STYLING 🛑
                className={`
                    px-3 py-1 lg:px-6 lg:py-2 
                    text-base sm:text-lg lg:text-[2rem] font-semibold uppercase 
                    font-neue whitespace-nowrap rounded-full border border-[1px] transition-colors 
                    ${activeFilter === filterName 
                        ? 'bg-portfolio-green text-black border-portfolio-green' 
                        : 'hover:bg-gray-100 text-tag-gray border-tag-gray'
                    }`
                }
            >
                {filterName.toUpperCase()}
            </button>
          ))}

          {/* Main Navigation Links (Contact, History) */}
          {mainNavs.map((item) => (
            <a 
              key={item} 
              href={item === 'Contact' ? '/contact' : '/history'} 
              // 🛑 NEW RESPONSIVE STYLING 🛑
              className={`
                px-3 py-1 lg:px-6 lg:py-2 
                text-base sm:text-lg lg:text-[2rem] font-semibold uppercase 
                font-neue whitespace-nowrap rounded-full border border-[1px] transition-colors 
                hover:bg-gray-100 text-tag-gray border-tag-gray`
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