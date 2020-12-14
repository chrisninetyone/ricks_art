import React from 'react';
import './Contact.css'
// import portrait from '../assets/rickgentilebu.jpg';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-left">
                <div className="form-wrapper">
                    <div className="form-caption">
                        <h3>Contact Rick</h3>
                        <a href="https://www.instagram.com/rickgent777/" class="fa fa-instagram" target="_blank"></a>
                    </div>
                    <div className="form-container">

                    </div>
                        <form action="mailto:chrisninetyone@gmail.com" method="post" enctype="text/plain">
                        <div class="form-group">
                            <label for="full-name">Full Name</label>
                            <input type="text" class="form-control" id="full-name" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="email-address">Email Address</label>
                            <input type="email" class="form-control" id="email-address" />
                        </div>
                        <div class="form-group">
                            <label for="message">Message:</label>
                            <textarea class="form-control" id="message" rows="5"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg email-submit">Send</button>
                        {/* <input type="submit" value="Send"></input> */}
                    </form>
                </div>
            </div>
            <div className="contact-right">
                <p className="contact-text">
                        Contact Rick for commissioned works, purchase inquiries, or just to chat about art.
                </p>
            </div>
        </div>
    )
}

export default Contact;