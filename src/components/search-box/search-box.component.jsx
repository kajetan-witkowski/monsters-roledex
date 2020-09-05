import React from "react";
import styles from "./search-box.module.css";
export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className={styles.search}
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
