import React, { MouseEventHandler } from 'react';
import { githubClient } from '../../clients/GithubClient';
import logo from '../../logo.svg';

interface AdrElementProperties {
  dataName?: String
}

interface AdrElementState {
  name: String
  lastName: String
}

export default class AdrElement extends React.Component<AdrElementProperties, AdrElementState>{

  constructor(props: AdrElementProperties) {
    super(props);
    this.state = { name: "michi", lastName: "Behr" };
    this.go = this.go.bind(this);
  }



  go(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log("click");
    githubClient.go();
    this.setState({
      name: "Herbert"
    })
  }


  public render() {
    return (
      <div className="App" onClick={githubClient.getAllAdrs}>
        getAllDrs {this.state.name}  {this.state.lastName} {this.props.dataName}
      </div>
    )
  }
}

