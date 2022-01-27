import React from 'react';
import logo from './logo.svg';
import './App.css';
import AdrElement from './components/elements/AdrElement';
import { githubClient } from './clients/GithubClient';


interface AppProperties {
  dataName?: String
}

interface AppState {
  name: String
}

class App extends React.Component<AppProperties, AppState>{

  constructor(props: AppProperties) {
    super(props)
    this.state = { name: "michi" }

    this.hm = this.hm.bind(this);
  }

  hm(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log("ahaaaa")
    githubClient.go()
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.hm} />
          <p onClick={this.hm}>
            [{this.state.name}] {this.props.dataName}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <AdrElement></AdrElement>
        </header>
      </div>
    )
  }
}

export default App;
