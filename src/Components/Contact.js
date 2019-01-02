import React, { Component } from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="https://formspree.io/realSenses0@gmail.com" method="POST" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name<span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="name" />
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email<span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="email" />
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="subject" />
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="message"></textarea>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Location and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {city}, {state} <br />
						   <span>{phone}</span>
					   </p>
				   </div>

              <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="realSenses"
                    options={{height: 400}}
                  />
		           </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
