import React from 'react';


interface SearchFileResPayload {
  items: Array<GithubFile>


}

interface GithubFile {
  name: String,
  path: String,
  url: String,
  html_url: String
}

class AdrFile {
  public readonly name: String;
  public readonly path: String;
  public readonly infoUrl: String;
  public readonly downloadUrl: String;

  constructor(
    name: String,
    path: String,
    infoUrl: String,
    downloadUrl:String) {
    this.name = name;
    this.path = path;
    this.infoUrl = infoUrl;
    this.downloadUrl=downloadUrl;
  }



  createDownloadUrl() {
    let ref = this.infoUrl.substring(this.infoUrl.indexOf("ref=") + 4, this.infoUrl.length);
    console.log(this.infoUrl);
    console.log(ref);
    let userName = "mi4p";
    let projectName = "adr-starter";
    let url = `https://raw.githubusercontent.com/${userName}/${projectName}/${ref}/$`;
  }

  static of(githubFile:GithubFile):AdrFile{

    let downloadUrl=githubFile.html_url.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")

    return new AdrFile(
        githubFile.name,
        githubFile.path,
        githubFile.url,
        downloadUrl
    )
  }

}


class GithubClient {

  private counter = 1;



  constructor() {

  }

  public searchAllAdrs(): Promise<Array<AdrFile>> {
    return fetch("https://api.github.com/search/code?q=filename:.adr.md+repo:mi4p/adr-starter").then((res) => {

      return res.json() as Promise<SearchFileResPayload>

    }).then(payload => {

      let adrFiles = payload.items.map(item =>  AdrFile.of(item))

      return adrFiles
    });

  }


  go() {
    console.log("goooooooooo " + this.counter)
    this.counter++
  }

}

export const githubClient = new GithubClient();
