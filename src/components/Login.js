/**
 * Created by sirine on 24/03/16.
 */
import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import $ from 'jquery';

const style = {
  margin: 12,
};

var Login = React.createClass({
  handleTouchTap: function (e) {
    console.log('clicked login');
    e.preventDefault();
    $.ajax({
      url: 'http://localhost:3000/users/signin',
      type: 'POST',
      data: {username: this.props.username},

      success: function (data) {
        if (data === 'error') {
          console.log('auth failed !');
        }
        else {
          console.log('auth reussie !');
          console.log('terrlis beforet= ' + this.props.list);

          this.props.list = data;
          console.log('list= ' + this.props.list);
        }
      }.bind(
        this),
      error: function (xhr, status, err) {
        console.log('didnt connect');
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

  },
  handleChange: function (event) {
    this.props.username = event.target.value;
  },
  render: function () {
    return (
      <div className="large-3 medium-6 large-centered medium-centered columns">
        <h1>Login Page</h1>
        <div>
          <TextField
            hintText="Email"
            value={this.props.username} onChange={this.handleChange} />
          <RaisedButton label="Log In" primary={true} style={style} onTouchTap={this.handleTouchTap} />
        </div>
      </div>
    ); }
});
export default Login;
