import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBarContainer';
import PostsContainer from './PostsContainer';

class PostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            filteredPosts: []
        };
    }

    componentDidMount() {
        this.setState({
            posts: dummyData
        })
    }

    searchPostsHandler = e => {
        const posts = this.state.posts.filter(p => {
            if (p.username.includes(e.target.vaule)) {
                return p;
            }
        });
        this.setState({
            filteredPosts: posts
        });
    }

    render() {
        return (
            <div className="App">
                <SearchBar
                    searchTerm={this.state.searchTerm}
                    searchPosts={this.state.searchPostsHandler}
                />
                <PostsContainer
                    posts={
                        this.state.filteredPosts.length > 0
                            ? this.state.filteredPosts
                            : this.state.posts
                    }
                />
            </div>
        );
    }
}

export default PostPage;