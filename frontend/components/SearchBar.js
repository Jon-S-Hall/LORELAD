import React from "react";
import styles from "../styles/SearchBar.module.css";

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     search: "",
  //   };
  // }
  // handleChange(e) {
  //   this.setState({ search: e.target.value });
  // }
  render() {
    return (
      <div className={styles.container}>
        <label for="search">search</label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="search"
          // onChange={this.handleChange}
        />
        <button type="submit" name="send">
          <i class="fas fa-search"></i>
        </button>
      </div>
    );
  }
}

export default SearchBar;
