'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import jQuery from 'jquery';
import Temperature from './components/Temperature';
import Title from './components/Title';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

const mountNode = document.getElementById('root');
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

const About = React.createClass({
  render() {
    return (
      <div>
        <h2>Users</h2>
      </div>
    );
  }
});

const Main = React.createClass({
  componentWillMount: function () {
    injectTapEventPlugin();
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  },
  getInitialState: function () {
    return {open: false, route: window.location.hash.substr(1)
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
    var Child;
    switch (this.state.route) { case '/about': Child = About; break; case '/': Child = Main; break; default: Child = Main; }
    return (

        <div>

          <div>
            <AppBar title="Mon Terroir" onLeftIconButtonTouchTap={ this.handleClick }></AppBar>
            <LeftNav
              docked={false}
              width={400}
              open={this.state.open}
              onRequestChange={open => this.setState({open})}
            >
              <AppBar title="Mon Terroir" onLeftIconButtonTouchTap={ this.handleClick }></AppBar>
              <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
              <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
            </LeftNav>
            <Title/>
            <ul>
              <li><a href="#/about">About</a></li>
            </ul>
            <Child/>
          </div>
        <div >
     <Temperature/>
        </div >
          {this.props.children}
        </div>
    );
  }
});
ReactDOM.render((
  <Main/>
), mountNode);

