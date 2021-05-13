import React, { Component } from 'react';
import validator from 'validator';

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            city: '',
            message:'',
            error: ''
        }
    }
    handleNameChange = (e) => {
        const name = e.target.value
        this.setState(() => ({name}))
    }
    handleEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({email}))
    }
    handleCityChange = (e) => {
        const city = e.target.value;
        this.setState(() => ({city}))
    }
    handleMessageChange = (e) => {
        const message = e.target.value;
        this.setState(() => ({message}))
    }
    onSubmit = (e) => {
        e.preventDefault();
        const validEmail = validator.isEmail(this.state.email);

        if(!this.state.message){
            this.setState(() => ({error: 'Please fill message field'}))
        } else if(!validEmail) {
            this.setState(() => ({ error: 'Please enter a valid email!'}))
        }else {
            this.setState(() => ({error:''}));
            this.props.onSubmit({
                name: this.state.name,
                email: this.state.email,
                city: this.state.city,
                message: this.state.message
            })
        }
        
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <label>Name</label>
                    <input 
                        type="text"
                        autoFocus
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        placeholder="Enter first and last name"
                    />
                    <label>Email</label>
                    <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        placeholder="Enter email"
                    />
                    <label>City</label>
                    <input 
                        type="text"
                        value={this.state.city}
                        onChange={this.handleCityChange}
                        placeholder="Enter your city"
                    />
                    <textarea
                        value={this.state.message}
                        onChange={this.handleMessageChange}
                        placeholder="Comment or rate our service"
                    >
                    </textarea>

                    <button>Submit message</button>
                </form>
            </div>
        )
    }
}
export default ContactForm ;