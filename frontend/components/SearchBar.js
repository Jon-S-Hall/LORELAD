import styles from "../styles/SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <label for="search">search</label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search"
        required
      />
      <button type="button" name="send">
        <i class="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
