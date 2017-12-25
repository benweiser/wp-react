import * as React from "react";
import axios from "axios";
import Post from "../models/Post";

interface PostsProps {
    id: number;
}

interface PostsState {
    isLoaded: boolean;
    posts: Post[];
    test: string[];
}

class PostsList extends React.Component<PostsProps, PostsState> {
    items: JSX.Element[];
    postItems: JSX.Element[];

    constructor(props: PostsProps) {
        super(props);
        this.state = {
            isLoaded: false,
            posts: [],
            test: ["hello", "hello2", "hello3"]
        };

        this.items = this.state.test.map((item, index) =>
            <li key={index}>{item}</li>
        );
    }

    componentDidMount() {
        axios.get("https://benweiser.com/wp-json/wp/v2/posts")
            .then(response => {
                this.setState({
                    isLoaded: true,
                    posts: response.data.map((key: object) => new Post(key))
                });
            })
            .then(response => {
                this.postItems = [...this.state.posts].map((item, index) =>
                    <div key={index}>{item.title.rendered}</div>
                );
            });
    }

    render() {
        const {posts, isLoaded} = this.state;
        return (
            <div>
                {console.log("my state", posts)}
                {isLoaded ? this.postItems : "Loading..."}
                {/*             {
                 Object.keys(this.state).map((key, index) => (
                     <p key={index}> this is my key {key} and this is my value {this.state[key]}</p>
                 ))
             }*/}
            </div>
        );
    }
}

export default PostsList;