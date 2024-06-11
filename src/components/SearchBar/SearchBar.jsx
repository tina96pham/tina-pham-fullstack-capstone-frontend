import "./SearchBar.scss";
import searchIcon from "../../assets/icons/search.png";
import { useSearch } from "../../utils/useFetchData";

const SearchBar = () => {
  const {
    query,
    setQuery,
    results,
    handleSearchSubmit
  } = useSearch();

  
  return (
    <div>
      <form className="search" onSubmit={handleSearchSubmit}>
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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result.name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};



export default SearchBar