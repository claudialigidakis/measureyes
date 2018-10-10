import React from 'react';
import {Media, Form, Input} from 'reactstrap';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export default class Video extends React.Component {
  render() {
    return (<div>
      <Media object="object" src="https://static.makeuseof.com/wp-content/uploads/2017/11/puppy-photos-videos-670x335.jpg" alt="Generic placeholder image"/>
      <br/>
        <Form inline>
        <Input type="select">
          <option>Video One</option>
          <option>Video Two</option>
        </Input>
      </Form>
    </div>);
  }
}
