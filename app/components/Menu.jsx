var React = require('react');
var TopBar = require('TopBar');

var Menu = React.createClass({
    render: function() {
        return(
            <div>
                <marquee className="menu">
                    <img src="https://images.heb.com/is/image/HEBGrocery/001422726"/>
                    <img src="https://southernlaredo.com/wp-content/uploads/2015/06/BigManzana_English_20oz_vintage.jpg"/>
                    <img src="https://assets3.thrillist.com/v1/image/1896535/1000x666.6666666666666/flatten;crop;jpeg_quality=70"/>
                    <img src="https://i.pinimg.com/originals/e6/f7/2d/e6f72d818aab1e6608d9121a8280fbe9.jpg"/>
                    <img src="https://i1.wp.com/nassaucandy.blog/wp-content/uploads/2019/07/951971.jpg?ssl=1"/>
                    <img src="https://www.totallytarget.com/wp-content/uploads/2017/07/pepsi-fire-deal.jpg"/>
                </marquee>

                <h1 className="text-center menu-title">Exotic Menu</h1>
                <p className="tect-center menu-paragraph">Imported in from all over the world we have the zaza. From foreign fanta's to rare faygo's there's definitely something for you.</p>
            </div>
        );
    }
});

module.exports = Menu;