export interface PostItem {
  id: number;
  better_featured_image?: {
    source_url?: string;
    alt_text?: string;
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
}
