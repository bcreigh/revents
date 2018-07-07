import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import Script from "react-load-script";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { incrementCounter, decrementCounter } from "./testActions";
import { openModal } from "../modals/modalActions";

export class TestComponent extends Component {
  state = { address: "", scriptLoaded: false };

  static defaultProps = { center: { lat: 59.95, lng: 30.33 }, zoom: 11 };

  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };
  onChange = address => this.setState({ address });

  render() {
    const inputProps = { value: this.state.address, onChange: this.onChange };
    const { incrementCounter, decrementCounter, data, openModal } = this.props;
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCsr7ge-h7EifrODR1brhtfs7rKJJLAmS0&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <h1>Test Component</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} color="green" content="inc" />
        <Button onClick={decrementCounter} color="red" content="dec" />
        <Button
          onClick={() => openModal("TestModal", { data: 43 })}
          color="teal"
          content="open modal"
        />
        <br />
        <br />
        <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded && (
            <PlacesAutocomplete inputProps={inputProps} />
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter,
  openModal
};

export default connect(
  mapStateToProps,
  actions
)(TestComponent);
