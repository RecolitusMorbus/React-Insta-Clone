import React from 'react';
import styled from 'styled-components';

const CommentForm = styled.form`
    border-top: 1px solid #e3e3e3;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
`;

const CommentInputField = styled.input`
    border: none;
    height: 95%;
    width: 94.6%;
    padding: 0 0 0 15px;
    &:focus {
        outline: none;
    }
`;

const CommentInput = props => {
    return (
        <CommentForm onSubmit={props.submitComment}>
            <CommentInputField
                type="text"
                value={props.comment}
                placeholder="Add comment... "
                onChange={props.changeComment}
            />
        </CommentForm>
    );
};

export default CommentInput;