'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import jQuery from 'jquery';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import Link from 'react-router/lib/Link';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
const mountNode = document.getElementById('root');
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;
import Title from './components/Title';
import MesTerroirs from './components/MesTerroirs';
import InputBox2 from './components/InputBox2';
import Main from './components/Main';

var App = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function () {
    return {list: ['empty'], username: 'user'
    };
  },
  componentWillMount: function () {
    injectTapEventPlugin();
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  },
  render: function () {
   // var myvalueLink = this.linkState('value');
    console.log(this.props);
    return (
        <div>
          <poly-elem></poly-elem>
          <ul>
            <li><Link valueLink={this.linkState('username')} to="/Title"> Title</Link></li>
          </ul>
          {this.props.children}
        </div>
    );
  }
});
ReactDOM.render((
  <Router>
    <Route path="/" component={App} >
      <Route path="Main" component={Main}/>
      <Route path="Title" component={Title }/>
      <Route path="mesterroirs" component={MesTerroirs}/>
      <Route path="InputBox2" component={InputBox2}/>

    </Route>
  </Router>
), mountNode);

