import React from 'react';
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Filter extends React.Component {
  render () {
    return (
      <ListGroupItem>
        <ListGroupItemHeading>
          Filter
        </ListGroupItemHeading>
        <ListGroupItemText>
          Yaw Angle<br />
          Dwell Time<small className="sidebar-small">(seconds)</small><br />
          Break Time<small className="sidebar-small">(seconds)</small>
        </ListGroupItemText>
      </ListGroupItem>
    );
  }
}

export default Filter
