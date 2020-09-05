import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list-compnent";
import { SearchBox } from "./components/search-box/search-box.component";
import styles from "./App.module.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    const handleChange = e => {
      this.setState({ searchField: e.target.value });
    };
    return (
      <div className="App">
        <h1 className={styles.Title}>Monster Roledex</h1>
        <SearchBox
          placeholder={"Find monster"}
          searchField={this.state.searchField}
          handleChange={handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
