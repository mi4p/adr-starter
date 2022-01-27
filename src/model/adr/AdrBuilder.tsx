import { AdrSourceDescriptor } from "./AdrSourceDescriptor";
import { AdrContent } from "./AdrContent";

class AdrBuilder {
  public readonly descriptor?: AdrSourceDescriptor;
  public readonly content: AdrContent;

  constructor(  
    content:AdrContent,
    descriptor?:AdrSourceDescriptor,
  ) {
    this.content=content;
    this.descriptor=descriptor;
  }



  
}
