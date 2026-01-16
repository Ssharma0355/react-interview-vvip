import React, { useEffect, useState } from 'react'
import UseDebounce from './UseDebounce';
import axios from 'axios';

const SearchFeature = () => {
    const [searchItem, setSearchItem] = useState("");
    const [results, setResults] = useState([]); // Store results
    const [loading, setLoading] = useState(false); // UI feedback
    
    const debounceValue = UseDebounce(searchItem, 1000);

    useEffect(() => {
        // Optimization: Don't call API if the search is empty
        if (!debounceValue) {
            setResults([]);
            return;
        }

        const fetchRecipes = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`https://dummyjson.com/recipes/search?q=${debounceValue}`);
                setResults(res.data.recipes);
            } catch (err) {
                console.error("Search failed", err);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [debounceValue]);

    return (
        <div>
            <input value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
            {loading && <p>Searching.....</p>}
            <ul>
                {results.map(recipe => <li key={recipe.id}>{recipe.name}</li>)}
            </ul>
        </div>
    );
}

export default SearchFeature
