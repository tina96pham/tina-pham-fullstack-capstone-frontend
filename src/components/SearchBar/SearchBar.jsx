import "./SearchBar.scss";
import searchIcon from "../../assets/icons/search.png";
import { useSearch } from "../../utils/useFetchData";
import Loading from "../Loading/Loading";
import { useState } from "react";
import InstructionModal from "../InstructionModal/InstructionModal";

const SearchBar = () => {
  const { 
    query, 
    setQuery, 
    results, 
    loading, 
    error, 
    handleSearchSubmit 
  } = useSearch();
  const [openItemId, setOpenItemId] = useState(null);

  const handleItemClick = (productId) => {
    setOpenItemId(productId === openItemId ? null : productId); 
  };


  return (
    <div>
      <form className="search" onSubmit={handleSearchSubmit}>
        <img className="search__icon" src={searchIcon} alt="Search icon" />
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
        <ul className="search__list">
          {results.map((result) => (
            <li
              className= "search__item"
              key={result.productId}
              id={result.productId}
              onClick={() => handleItemClick(result.productId)}
            >
              {result.productName}
            {openItemId === result.productId && (
                <InstructionModal
                  id={result.productId}
                  data={result}
                  handleModalClose={() => handleItemClick(null)}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
