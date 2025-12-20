import React from 'react';

const FilterTabs = ({ activeFilter, onFilterChange }) => {
    const filters = [
        { id: 'all', label: 'All' },
        { id: 'commerce', label: 'Commerce' },
        { id: 'private', label: 'Private' }
    ];

    return (
        <div 
            className="flex items-center space-x-4 mb-8"
            role="tablist"
            aria-label="Filter portfolio cases"
        >
            {filters.map((filter) => (
                <button
                    key={filter.id}
                    onClick={() => onFilterChange(filter.id)}
                    role="tab"
                    aria-selected={activeFilter === filter.id}
                    aria-controls="case-slider"
                    className={`
                        px-4 py-1 text-sm uppercase font-semibold font-neue-semibold rounded-full transition-colors 
                        ${
                            activeFilter === filter.id
                            ? 'bg-portfolio-green text-black'
                            : 'bg-transparent text-[#979797] border border-gray-300 hover:bg-gray-100'
                        }
                    `}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
};

export default FilterTabs;