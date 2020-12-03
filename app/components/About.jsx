var React = require('react');

var About = React.createClass({
    render: function() {
        return(
            <div>
                <h1 className="text-center about-title">About the Za</h1>
                <p className="about text-center">We carry exotic soda's that are garunteed not going to be sold in stores near you!</p>

                <br/><br/><br/><br/>

                <p className="about-intro">Ceo - Sevy Wagner</p>
                <p className="about-message">
                    I've always loved soda, but all the soda's you can get everywhere sometimes feel like all the same thing, 
                    so I got into exotic sodas. After realizing that there was so many amazing flavors for soda that way too 
                    many people don't know about, so I came to a conclusion. I love to travel and host events so I thought I'd 
                    spread the amazing refreshing feeling from one ice cold sip of some zaza pop.
                </p>
            </div>
        );
    }
});

module.exports = About;