import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailed from "../../features/user/UserDetailed/UserDetailedPage";
import settingsDashboard from "../../features/user/settings/SettingsDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import HomePage from "../../features/home/HomePage";
import TestComponent from "../../features/testArea/TestComponent";
import ModalManager from "../../features/modals/ModalManager";

class App extends Component {
  render() {
    return (
      <div>
        <ModalManager />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route path="/manage/:id" component={EventForm} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailed} />
                  <Route path="/settings" component={settingsDashboard} />
                  <Route path="/createEvent" component={EventForm} />
                  <Route path="/test" component={TestComponent} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}
export default App;
