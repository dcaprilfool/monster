import React from "react";
import reactDom from "react-dom";
import "./App.css";
import { Cardlist } from './components/card-list/card-list.component';
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField : '',
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({searchField : e.target.value})
  }

  render() {

    const {monsters, searchField} = this.state;
    const filtedMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox handleChange={this.handleChange} />
       <br/>
        <br/>
        <Cardlist monsters={filtedMonsters} /> 
      </div>
    );
  }
}

export default App;
