import React from 'react';
import Axios from 'axios'
import './App.css';
import "./index.css";

import PlayersList from './components/PlayersList'
import Navigation from './components/Navigation'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    data: [],
    name: "",
    country: "",
  };
}
  componentDidMount() {
    Axios.get("http://localhost:5000/api/players")
      .then(response => {
        console.log(response.data);
        this.setState({
          data: response.data,
          name: response.data.name,
          country: response.data.country
        });
      })
      .catch(error => console.log('error'));
  }

  render() {
    return (
      <div className="App">
        <Navigation />

        <PlayersList 
                data={this.state.data}
                name={this.state.name}
                country={this.state.country}
            />
      </div>
    );
  }
}
export default App;