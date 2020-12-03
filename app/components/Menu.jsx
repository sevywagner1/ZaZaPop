var React = require('react');
var TopBar = require('TopBar');

//<img src="" height="600" width="300"/>

var Menu = React.createClass({
    render: function() {
        return(
            <div>


                <h1 className="text-center menu-title">Exotic Menu</h1>
                <p className="tect-center menu-paragraph">Imported in from all over the world we have the zaza. From foreign fanta's to rare faygo's there's definitely something for you.</p>
                <hr/>

                <p className="big-pine menu-item">Big pineapple</p>
                <p className="menu-description">If you live in Texas, chances are, you have seen a big red or big blue or rarely a big peach. But have you heard of Big Pineapple?</p>

                <p className="bluerazz-faygo menu-item">Blueberry Raspberry Faygo</p>
                <p className="menu-description">Faygo, known for its popularity in Michigan and the repeating references in the rap culture, Faygo has a lot of good flavors, but for a limited time they released BlueRazz.</p>

                <p className="peach-fanta menu-item">White Peach Fanta</p>
                <p className="menu-description">Only found in Japan, white fanta is one of our foreign sodas that were imported.</p>

                <p className="frostie menu-item">Frostie: Blue Cream</p>
                <p className="menu-description">Frostie blue cream isn't as rare as our other sodas but it's a classic, with the recipe originating in 1939.</p>
            
                <p className="pepsi menu-item">Pepsi Fire</p>
                <p className="menu-description">Pepsi fire was a soda released alongside pepsi ice in 2004, but was continued in 2005. It was brought back in 2017 very briefly, before being discontinued again, how we get it is our little secret.</p>
            
                <p className="menu-item fanta-madness">Fanta Madness Grape</p>
                <p className="menu-description">A rare exotic soda originating in Romania in 2002. Fun fact, fanta was actually made in germany.</p>
            
                <p className="menu-item gold-faygo">Gold Faygo</p>
                <p className="menu-description">Gold faygo, not quite as rare as the Blueberry, is an amazing combo of flavors from ginger-ale and cream soda.</p>
            
                <p className="menu-item fanta-exotic">Fanta Exotic</p>
                <p className="menu-description">Delicious blend of orange, passionfruit, and peach into one soda.</p>
            </div>
        );
    }
});

module.exports = Menu;