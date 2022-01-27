import React from 'react';
import { AdrSourceDescriptor } from '../model/adr/AdrSourceDescriptor';


interface SearchFileResPayload {
  items: Array<GithubFile>
}

export interface GithubFile {
  name: String,
  path: String,
  url: String,
  html_url: String
}


class GithubClient {

  constructor() {}

    public getFileContent(ur:String){

     
    }


  public searchAllAdrs(): Promise<Array<AdrSourceDescriptor>> {
    return fetch("https://api.github.com/search/code?q=filename:.adr.md+repo:mi4p/adr-starter").then((res) => {

      return res.json() as Promise<SearchFileResPayload>

    }).then(payload => {

      let adrFiles = payload.items.map(item =>  AdrSourceDescriptor.of(item))

      return adrFiles
    });

  }

}

export const githubClient = new GithubClient();
