import React from 'react';

class GithubClient {

  private counter = 1;



  constructor() {

  }

  public getAllAdrs()
  {
      fetch("https://api.github.com/users/michibe/repos").then(res => console.log(res));

  }


  go()
  {
    console.log("goooooooooo "+ this.counter)
    this.counter++
  }

}

export const githubClient = new GithubClient();
