import React from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.component.jsx"
import SearchBox from './components/search-box/search-box.component';

class App extends React.Component  {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
  }
  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      this.setState({monsters: users})
    })
  }
  render() {
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
  return (
    <div className="App">
      <h1>MONSTERS ROLODEX</h1>
      <SearchBox placeholder={"searchMonster"} changeHandler= {e => this.setState({searchField: e.target.value})} />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
  }
}

export default App;
