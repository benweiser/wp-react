export class Post {
    id: number;
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
    excerpt: string;
    link: string;
    constructor(obj: any) {
        if (obj) {
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