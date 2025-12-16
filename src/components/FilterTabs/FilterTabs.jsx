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
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeFilter === filter.id
              ? 'text-gray-900 border-b-2 border-gray-900'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;


