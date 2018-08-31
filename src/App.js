import React, { Component } from 'react';
import Search from './components/Search';
// import List from './components/List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      inputValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.handleSubmit();
  }

  handleChange(event) {
    let filteredList = this.state.lists;
    filteredList = filteredList.filter((item => {
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    }));
    this.setState({
      lists: filteredList,
    })
  }

  handleSubmit(event) {
    let url = 'https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json';

    fetch(url) 
      .then(res => res.json())
      .then((out) => {
        this.setState({
          lists: out.Reggae
        });
        
      })
      .catch(err => {
        throw err
      });    
  }

  render() {
    return (
      <div className="App">
        <h1>React Search !</h1>
        <h2>Here is a list of Reggae artists rendered from a JSON object</h2>

        <Search 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <ul>
          {this.state.lists.map(list => {
              return (
                <li>{list}</li>
              );
            })
          } 
          {this.state.message ? <li>No search results.</li> : '' }
        </ul>
        

      </div>
    );
  }
}

export default App;
