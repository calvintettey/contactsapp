import React, { Component } from 'react';
import { connect  } from "react-redux";
import { editUser } from "../store/allusersActions";

export class AddContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.contact.name,
            number: props.contact.number,
            email: props.contact.email,
        }
        this.id = props.match.params.id
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editUser(this.state);
        this.setState({name:"", number: "", email:""});
        this.props.history.push{'/'};
        console.log("submitted");
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input 
                        type="text" name="name" onChange={this.handleChange} />               
                    </div>
                    <div>
                        <label htmlFor="number">Number</label>
                        <input type="tel" name="number" onChange={this.handleChange} />               
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="Email" onChange={this.handleChange} />               
                    </div>
                    <div>
                    <button type="submit">Edit User</button>
                    </div>
                </form>
            </>
        );
    }
}

let mapStateToProps = (state, ownProps) => {{
    contact: state.users.find(contact => contact.id === ownProps.match.params.id)
}};

let mapDispatchToProps = {
    editUser: editUser
};


export default connect(mapStateToProps, mapDispatchToProps) (EditForm);