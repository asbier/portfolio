import React from 'react';

const FilterTabs = ({ activeFilter, onFilterChange }) => {
    const filters = [
        { id: 'all', label: 'All' },
        { id: 'commerce', label: 'Commerce' },
        { id: 'private', label: 'Private' }
    ];

    return (
        <div className="flex items-center space-x-4 mb-8">
            {filters.map((filter) => (
                <button
                    key={filter.id}
                    onClick={() => onFilterChange(filter.id)}
                    className={`
                        px-4 py-1 text-sm uppercase font-neue font-medium rounded-full transition-colors 
                        ${
                            activeFilter === filter.id
                            ? 'bg-portfolio-green text-black' // Active style: Green background, black text
                            : 'bg-transparent text-black border border-gray-300 hover:bg-gray-100' // Inactive style
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