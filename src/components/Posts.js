import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/postActions';
import Post from './Post';

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const { posts } = this.props;

        return (
            <div>
                <h1>Posts</h1>
                {posts && posts.map(post => {
                    return <Post key={post.id} {...post} />
                })}
            </div>
        );
    };
};

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item,
});

const mapDispatchToProps = {
    fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
