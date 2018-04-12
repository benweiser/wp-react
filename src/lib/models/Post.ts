import * as _ from "lodash";
import { PostItem } from "../interfaces/PostItem";

export class Post implements PostItem {
  public readonly id: number;
  public readonly better_featured_image: {
    readonly source_url: string;
    readonly alt_text: string;
  };
  public readonly content: {
    readonly protected: boolean;
    readonly rendered: string;
  };
  public readonly date: Date;
  public readonly date_gmt: Date;
  public readonly modified: Date;
  public readonly modified_gmt: Date;
  public readonly title: {
    readonly rendered: string;
  };
  public readonly excerpt: {
    readonly rendered: string;
  };
  public readonly link: string;

  constructor(obj: PostItem) {
    if (!_.isEmpty(obj)) {
      this.better_featured_image = {
        source_url:
          obj.better_featured_image !== null
            ? obj.better_featured_image.source_url
            : "",
        alt_text:
          obj.better_featured_image !== null
            ? obj.better_featured_image.alt_text
            : ""
      };
      this.id = obj.id;
      this.content = {
        protected: obj.content.protected,
        rendered: obj.content.rendered
      };
      this.date = obj.date;
      this.date_gmt = obj.date_gmt;
      this.modified = obj.modified;
      this.modified_gmt = obj.modified_gmt;
      this.title = {
        rendered: _.unescape(obj.title.rendered)
      };
      this.excerpt = obj.excerpt;
      this.link = obj.link;
    }
  }
}

export default Post;
