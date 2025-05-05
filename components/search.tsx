'use client'

import { useState } from 'react';
import { Listbox } from '@headlessui/react'; 
import { Input } from './ui/input';

interface SearchProps {
  data: string[];
}

const Search: React.FC<SearchProps> = ({ data }) => {
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState(data);

  // Handles the input change and filters the data
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    const results = data.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredResults(results);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Shadcn Input component */}
      <Input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
      />
      {/* Results dropdown */}
      <Listbox as="ul" className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
        {filteredResults.length > 0 ? (
          filteredResults.map((result, index) => (
            <Listbox.Option key={index} value={result}>
              {({ active }) => (
                <li
                  className={`p-2 cursor-pointer ${active ? 'bg-blue-100' : 'bg-white'}`}
                >
                  {result}
                </li>
              )}
            </Listbox.Option>
          ))
        ) : (
          <li className="p-2 text-gray-500">No results found</li>
        )}
      </Listbox>
    </div>
  );
};

export default Search;
