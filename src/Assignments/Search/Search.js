import { useState } from 'react';
import Search1 from  './SearchBar'
import cars from './CarsData';
function Search() {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filterPosts = (cars, query) => {
        if (!query) {
            return cars;
        }
    
        return cars.filter((car) => {
            const carName = car.name.toLowerCase();
            return carName.includes(query);
        });
    };
    const filteredPosts = filterPosts(cars, searchQuery);
    
    return (
        <div style ={{margin:"auto",
            width: "60",
            border: "3px solid #73AD21",
            padding: "10px"}} 
            
          >
            <Search1
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <ul>
                {filteredPosts.map(car => (
                    <li key={car.key}>{car.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default Search