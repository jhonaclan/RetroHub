import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CommunityCard from './CommunityCard';
import './searchResults.css';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]); // Rename to results to include both communities and groups
  const searchTerm = searchParams.get('query');

  useEffect(() => {
    // Replace with your actual search API call
    const fetchResults = async () => {
      if (searchTerm) {
        try {
          const response = await fetch(`/api/search?query=${searchTerm}`); // Adjust the API endpoint
          const data = await response.json();
          setResults(data);
        } catch (error) {
          console.error('Error fetching results:', error);
        }
      }
    };

    fetchResults();
  }, [searchTerm]);

  return (
    <div className="search-results">
      <h1>Search Results for "{searchTerm}"</h1>
      <div className="results-list">
        {results.map((result, index) => (
          <CommunityCard key={index} {...result} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
