import React from 'react';


interface AppProperties {
  dataName?: String
}

interface AppState {
  name: String
}

class PageNotFoundView extends React.Component<AppProperties, AppState>{

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
      <div className="ImprintView">
      <h1>PageNotFoundView </h1>
      </div>
    )
  }
}

export default PageNotFoundView