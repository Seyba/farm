import React from 'react';
import { connect } from 'react-redux';

const RenderContact = props => {
    const userPosts = props.posts;

    return (
        <div>
            <h2>What customers say about us.</h2>
            {userPosts.length < 1 && <p>No reviews yet!</p>}
            {userPosts.map((msg) => <div key={msg.id}>{msg.message}</div>)}
        </div>
    )
}
const mapStateToProps = state => ({
    posts: state.contacts
})
export default connect(mapStateToProps)(RenderContact);