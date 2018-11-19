import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false
        }
    }
    

    submitForm  = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true
        });
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        //console.log(this.state);
        
    }

    getDataTyped = () => {
        var DataTyped = "";
        DataTyped = this.state.name + " " +  this.state.email + " " +  this.state.phone + " " +  this.state.msg + " " + this.state.subject;
        return DataTyped
    }

    render() {

        if (this.state.isRedirect){
            console.log(this.getDataTyped());
            return <Redirect to="/" />;
        } 
        return (
            <section id="contact">
                <div className="container">
                    <hr className="star-dark mb-5" />
                    <div className="row">
                    <div className="col-lg-8 mx-auto">
                        {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                        {/* The form should work on most web servers, but if the form is not working you may need to configure your web server differently. */}
                        <form name="sentMessage" id="contactForm" noValidate="novalidate">
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Name</label>
                            <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." 
                                name="name"
                                onChange={(event) => this.isChange(event)}
                            />
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Email Address</label>
                            <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." 
                                name="email"
                                onChange={(event) => this.isChange(event)}
                            />
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Phone Number</label>
                            <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." 
                                name="phone"
                                onChange={(event) => this.isChange(event)}
                            />
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Message</label>
                            <textarea className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} 
                                name="msg"
                                onChange={(event) => this.isChange(event)}
                            />
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Select the subject</label>
                            <select className="form-control" name="subject" id="subject"
                                onChange={(event) => this.isChange(event)}
                            >
                                <option value="life">Life</option>
                                <option value="programming">Programming</option>
                                <option value="interview">Interview</option>
                                <option value="photograph">Photograph</option>
                            </select>
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <br />
                        <div id="success" />
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton"
                                onClick= {(event) => this.submitForm(event)}
                            >Send</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </section>

        );
    }
}

export default Contact;