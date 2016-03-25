/**
 * Created by sirine on 25/03/16.
 */
import React from 'react';
import Temperature from './Temperature';
import Title from './Title';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Link from 'react-router/lib/Link';


var Main = React.createClass({

  getInitialState: function () {
    return {open: false, route: window.location.hash.substr(1), username: 'User', value: 'My value'
    };
  },

  handleClick: function () {
    this.setState({open: !this.state.open});
    console.log('hi !');
  },

  handleClose: function () {
    this.setState({open: false});
  },
  render: function () {
    <div>
      <AppBar title="Mon Terroir"
              iconElementRight={<IconButton > <i className="material-icons" label="Sirina" >face</i></IconButton>}
              onLeftIconButtonTouchTap={ this.handleClick }></AppBar>
      <LeftNav
        docked={false}
        width={400}
        open={this.state.open}
        onRequestChange={open => this.setState({open})}

      >
        <AppBar title="Mon Terroir" onLeftIconButtonTouchTap={ this.handleClick }></AppBar>
        <MenuItem onTouchTap={this.handleClose}><Link to="/login">Login</Link></MenuItem>
        <MenuItem onTouchTap={this.handleClose}><Link to="/mesterroirs">mesterroirs</Link></MenuItem>

        {this.props.children}
      </LeftNav>
      <Title/>
      <h2> {this.state.value}</h2>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to={{pathname: '/InputBox2', query: { valueLink: 'hi'}}}>input box</Link></li>
      </ul>
    <div>
    <Temperature/>
    </div >
    {this.props.children}
    </div>;
  }
});
export default Main;
