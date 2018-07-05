import React from "react";
import { Segment, Icon } from "semantic-ui-react";
import GoogleMapReact from "google-map-react";

const Marker = () => <Icon name="marker" size="big" color="red" />;

const EventDetailedMap = ({ lat, lng }) => {
  const center = [lat, lng];
  const zoom = 14;
  return (
    <Segment
      attached="bottom"
      style={{ height: "300px", width: "100%", padding: 0 }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCsr7ge-h7EifrODR1brhtfs7rKJJLAmS0"
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={lat} lng={lng} />
      </GoogleMapReact>
    </Segment>
  );
};

export default EventDetailedMap;
