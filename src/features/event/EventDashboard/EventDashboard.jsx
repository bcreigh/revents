import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";

import { deleteEvent } from "../eventActions";

class EventDashboard extends Component {
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList
              deleteEvent={this.handleDeleteEvent}
              events={this.props.events}
            />
          </Grid.Column>
          <Grid.Column width={6} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = dispatch => {
  return {
    deleteEvent: eventId => dispatch(deleteEvent(eventId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDashboard);
