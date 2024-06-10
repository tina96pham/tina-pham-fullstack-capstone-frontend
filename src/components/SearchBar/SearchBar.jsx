import "./SearchBar.scss";
import searchIcon from "../../assets/icons/search.png";
import { useSearchProducts } from "../../utils/useFetchData";


function SearchBar (){
  const { 
    searchTerm, 
    setSearchTerm, 
    searchResults, 
    isLoading, 
    error 
  } = useSearchProducts();
  return (
    <div>
    <form className="search">
    <img
      className="search__icon"
      src={searchIcon}
      alt="Search icon"
    />
    <input
      className="search__input"
      type="text"
      name="search"
      id="search"
      placeholder="Search by product name"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </form>
  {isLoading && <p>Loading results...</p>}
  {error && <p className="error-message">{error}</p>}
  {/* Conditionally render search results */}
  {searchResults.length > 0 && (
    <div className="search-results">
      {searchResults.map((result) => (
        <div key={result.id} className="result-item">
          <h3>{result.name}</h3>
          {/* Add more information about the result as needed */}
        </div>
      ))}
    </div>
  )}
</div>
);
}


  
export default SearchBar;