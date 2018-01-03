import * as _ from "lodash";
import { PostItem } from "../interfaces/PostItem";

export class Post implements PostItem {
  id: number;
  better_featured_image: {
    source_url: string;
    alt_text: string;
  };
  content: {
    protected: boolean;
    rendered: string;
  };
  date: Date;
  date_gmt: Date;
  modified: Date;
  modified_gmt: Date;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;

  constructor(obj: any) {
    if (!_.isEmpty(obj)) {
      this.better_featured_image = {
        source_url: obj.better_featured_image !== null ? obj.better_featured_image.source_url : "",
        alt_text: obj.better_featured_image !== null ? obj.better_featured_image.alt_text : ""
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
      this.title = obj.title;
      this.excerpt = obj.excerpt;
      this.link = obj.link;
    }
  }
}

export default Post;