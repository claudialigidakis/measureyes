import React from 'react';
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Location extends React.Component {
  render () {
    return (
      <ListGroupItem>
        <ListGroupItemHeading>
          Location
          <small className="sidebar-small">(choose up to two locations)</small>
        </ListGroupItemHeading>
        <ListGroupItemText>
          <Form>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />
                Name
              </Label>
              <br />
              <Label check>
                <Input type="checkbox" />
                Name
              </Label>
              <br />
              <Label check>
                <Input type="checkbox" />
                Name
              </Label>
              <br />
              <Label check>
                <Input type="checkbox" />
                Name
              </Label>
              <br />
              <Label check>
                <Input type="checkbox" />
                Name
              </Label>
              <br />
              <Label check>
                <Input type="checkbox" />
                Name
              </Label>
            </FormGroup>
          </Form>
        </ListGroupItemText>
      </ListGroupItem>
    );
  }
}

export default Location
