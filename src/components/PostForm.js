import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { newPost } from '../actions/postActions';

class PostForm extends Component {
    state = {
        title: '',
        body: ''
    };

    handleChange = ({ target: input }) => {
        const { name, value } = input;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const post = { ...this.state };

        this.props.newPost(post);
    };

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='title'>Title</label><br />
                        <input
                            type='text'
                            name='title'
                            id='title'
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor='body'>Body</label><br />
                        <textarea
                            name='body'
                            id='body'
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    };
};

PostForm.propTypes = {
    newPost: PropTypes.func.isRequired,
};

export default connect(null, { newPost })(PostForm);
