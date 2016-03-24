/**
 * Created by sirine on 23/03/16.
 */
'use strict';
import React from 'react';
import Card from 'material-ui/lib/card/card';

import CardHeader from 'material-ui/lib/card/card-header';

import $ from 'jquery';
var Title = React.createClass({
  displayName: 'CommentBox',
  getInitialState: function () {


    return { title: 'undefined', ref: false};
  },
  showmoreTemp: function () {

    $('.majorpoints').click(function () {

      $(this).find('.hiders').toggle();
    });
  },
  getTerroir: function () {
    console.log('getting info...');
    if (!this.state.ref) {
      console.log('connecting to server');
      $.ajax({
        url: 'http://localhost:3000/terroirs/getterroirinfo',
        dataType: 'json',
        success: function (data) {
          this.setState({title: data.terroirname});

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
    <CardHeader title= {this.state.title} avatar="src/images/ic_my_location_48px-128.png" />
      </Card>
        </div>
      );
  }
});
export default Title;
