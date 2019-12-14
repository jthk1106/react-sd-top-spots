import React, { Component } from 'react';
import './app.css';
import TopSpot from './topspot';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App container'>
        <div className='titleBox row justify-content-center'>
          <div className='col'>
            <h2 className='titleBoxContents'>San Diego Top Spots</h2>
            <p className='titleBoxContents'>A list of the top 30 places to see in San Diego, California.</p>
          </div>
        </div>
        {
          this.state.topspots.map(topspot => (
            <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location}
            />
          ))
        }
      </div>
    );
  }
}

export default App;
