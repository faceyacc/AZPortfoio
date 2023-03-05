import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import emailjs from "emailjs-com";

const Contact = () => {
  // const [viewport, setViewport] = useState({
  //   latitude: 47.6062,
  //   longitude: -122.3321,
  //   zoom: 8,
  // });

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iq1m0ho",
        "contact_form",
        e.target,
        "R1PEo1p9oXka6IBcz"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    e.target.reset();
  }

  return (
    <>
      <div className="tokyo_tm_contact">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Contact + Commission</span>
              <h3>Get in Touch</h3>
              <h8>Interested in commission? Let's get in touch!</h8>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <div className="fields">
          <form className="contact_form" onSubmit={sendEmail}>
            <div className="first">
              <ul>
                <li>
                  <input type="text" name="name" placeholder="Name" />
                </li>
                {/* END FIRST NAME */}

                <li>
                  <input type="email" name="user_email" placeholder="Best Email to reach you" />
                </li>
                {/* END EMAIL */}

                <li>
                  <input type="text" name="name" placeholder="Subject" />
                </li>

                <li>
                  <textarea name="message" placeholder="Shoot us an email and we will get back to you as soon as possible :)"></textarea>
                </li>
                {/* END SUBJECT MESSAGE */}
              </ul>
            </div>
            <div className="tokyo_tm_button">
              <button type="submit" className="ib-button">
                Send Message
              </button>
            </div>
            {/* END SUBMIT BUTTON */}
          </form>
          {/* END FORM */}
        </div>
        {/* END FIELDS */}
      </div>
      {/* END COTACT */}
    </>
  );
};

export default Contact;
