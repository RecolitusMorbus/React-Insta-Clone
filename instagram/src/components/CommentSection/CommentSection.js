import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import styled from 'styled-components';

const StyledSection = styled.div`
    border: 1px solid green;
`;

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }

    commentDidMount() {
        const id = this.props.postId;
        if (localStorage.getItem(id)) {
            this.setState({
                comments: JSON.parse(localStorage.getItem(this.props.postId))
            });
        }

        else {
            this.setComments();
        }
    }

    commentWillUnmount() {
        this.setComments();
    }

    setComments = () => (
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.comments)
        )
    )

    commentHandler = e => {
        this.setState({comment: e.target.value});
    }

    handleCommentSubmit = e => {
        e.preventDefault();
        const newComment = { text: this.state.comment, username: 'nolanallen' };
        const comments = { text: this.state.comments.slice() };
        comments.push(newComment);
        this.setState({ comments, comment: '' });
        setTimeout(() => {
            this.setComments();
        }, 500);
    };

    render() {
        return (
            <StyledSection>
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
                <CommentInput />
            </StyledSection>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        })
    )
}

export default CommentSection;