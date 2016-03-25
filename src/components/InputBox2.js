/**
 * Created by sirine on 25/03/16.
 */
import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

// import queryString from 'query-string';
var InputBox2 = React.createClass({
  mixins: [LinkedStateMixin],

  render: function () {
    return (<input type="text" valueLink={this.state.value} placeholder='InputBox2'/>);
  }
});
export default InputBox2;
