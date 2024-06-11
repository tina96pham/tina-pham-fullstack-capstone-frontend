import "./SearchBar.scss";
import searchIcon from "../../assets/icons/search.png";
import { useSearch } from "../../utils/useFetchData";
import Loading from "../Loading/Loading"

const SearchBar = () => {
  const {
    query,
    setQuery,
    results,
    loading,
    error,
    handleSearchSubmit
  } = useSearch();



  let content;
  if (error) {
    content = (<p className="error">"{query}" did not match any fields.</p>);
  } else if (loading) {
    content = (<Loading />);
  } else {
    content = (
      <ul className="warehouses__list">
         {results.map((result, index) => (
            <li key={index}>{result.productName}</li>
          ))}
      </ul>
    );
  }

  
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
      {loading && <Loading />}
      {!loading && (
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result.productName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};



export default SearchBar