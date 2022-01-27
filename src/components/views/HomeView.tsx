import React from 'react';


interface AppProperties {
  dataName?: String
}

interface AppState {
  name: String
}

class HomeView extends React.Component<AppProperties, AppState>{

  constructor(props: AppProperties) {
    super(props)
    this.state = { name: "michi" }

    this.hm = this.hm.bind(this);
  }

  hm(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log("ahaaaa")
  }

  public render() {
    return (
      <div className="HomeView">
      <h1>Homew </h1>
      </div>
    )
  }
}

export default HomeView