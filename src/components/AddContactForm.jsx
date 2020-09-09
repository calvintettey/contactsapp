import React, { Component } from 'react';

class AddContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            number:"",
            email: "",
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBook(this.state)
        this.setState({name:"", number: "", email:""})
        console.log("submitted");
    }

    render() {
        return (
            <>
                 <form onSubmit={this.handleSubmit}>
                     <div>
                         <label htmlFor="name">Name</label>
                         <input type="text" name="name" onChange={this.handleChange} />               
                        </div>
                     <div>
                         <label htmlFor="number">Number</label>
                         <input type="tel" name="number" onChange={this.handleChange} />               
                        </div>
                     <div>
                         <label htmlFor="email">Email</label>
                         <input type="email" name="Email" onChange={this.handleChange} />               
                     </div>
                     <button type="submit">Add To Contact</button>
                 </form>
            </>
        );
    }
}

export default AddBookForm;