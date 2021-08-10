import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { newPost } from '../actions/postActions';
import TextArea from './TextArea';
import Button from './Button';
import Input from './Input';

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
                    <Input
                        name='title'
                        label='Title'
                        onChange={this.handleChange}
                    />
                    <br />
                    <TextArea
                        name='body'
                        label='Body'
                        onChange={this.handleChange}
                    />
                    <br />
                    <Button text='Submit' />
                </form>
            </div>
        );
    };
};

PostForm.propTypes = {
    newPost: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    newPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
