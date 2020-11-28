import React, { Component } from 'react';
import './Contact.scss'

class Contact extends Component {
    render() {
        return (
    <div id='contact-div'>
        <div id='contact-form-card'className="card-body px-lg-5 pt-0">  
        <form class="text-center" action="#!" method = "POST" data-netlify = "true" >
        <h5 className="card-header  black-text text-center py-4">
            <strong>Contact us</strong>
        </h5>
            <div className="md-form mt-3">
                <input type="text" id="materialContactFormName" class="form-control"/>
                <label for="materialContactFormName">Name</label>
            </div>
            <div className="md-form">
                <input type="email" id="materialContactFormEmail" class="form-control"/>
                <label for="materialContactFormEmail">E-mail</label>
            </div>
            <div className="md-form">
                <textarea id="materialContactFormMessage" class="form-control md-textarea" rows="3"></textarea>
                <label for="materialContactFormMessage">Message</label>
            </div>            
            <button className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Send</button>
        </form>
        </div>
    </div>
        );
    }
}

export default Contact;