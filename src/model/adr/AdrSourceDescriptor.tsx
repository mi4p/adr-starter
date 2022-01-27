import { GithubFile } from "../../clients/GithubClient";

export class AdrSourceDescriptor {
  public readonly fileName: String;
  public readonly filePath: String;
  public readonly infoUrl: String;
  public readonly downloadUrl: String;

  constructor(
    fileName: String,
    filePath: String,
    infoUrl: String,
    downloadUrl: String) {
    this.fileName = fileName;
    this.filePath = filePath;
    this.infoUrl = infoUrl;
    this.downloadUrl = downloadUrl;
  }



  static of(githubFile: GithubFile): AdrSourceDescriptor {

    let downloadUrl = githubFile.html_url.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/");

    return new AdrSourceDescriptor(
      githubFile.name,
      githubFile.path,
      githubFile.url,
      downloadUrl
    );
  }

}
