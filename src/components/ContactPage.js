import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { addContact} from '../actions/contacts';
import { Link } from 'react-router-dom';

const ContactPage = props => {
  return(
    <div>
      <h1>Contact Us</h1>
      <ContactForm 
        onSubmit={(contact) => {
          props.dispatch(addContact(contact));
          props.history.push('/');
        }}
      />
      <Link to="/contact/reviews">Posts</Link>
    </div>
  )
};

export default connect()(ContactPage);
