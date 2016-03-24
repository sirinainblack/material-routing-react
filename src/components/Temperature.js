/**
 * Created by sirine on 23/03/16.
 */
/**
 * Created by sirine on 23/03/16.
 */
'use strict';
import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import $ from 'jquery';
var Temperature = React.createClass({
  displayName: 'CommentBox',
  getInitialState: function () {


    return { temperature: '0', ref: false};
  },

  getTerroir: function () {
    console.log('getting info...');
    if (!this.state.ref) {
      console.log('connecting to server');
      $.ajax({
        url: 'http://localhost:3000/terroirs/getterroirinfo',
        dataType: 'json',
        success: function (data) {
          this.setState({temperature: data.terroirname});

          this.setState({ref: true});

        }.bind(this),
        error: function (xhr, status, err) {
          console.log('didnt connect');
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    }
  },
  render: function () {
    this.getTerroir();
    return (
      <div>
        <Card>
          <CardTitle title= "Temperature" subtitle={this.state.temperature} />
          <CardText>
            some more data
              some more data
              some more data
          </CardText>

        </Card>
      </div>
    );
  }
});
export default Temperature;
