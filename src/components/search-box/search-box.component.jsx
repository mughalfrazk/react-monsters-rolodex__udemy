import { Component } from 'react';

import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    const { className, placeholder, onChangeHandler } = this.props;
    return (
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
