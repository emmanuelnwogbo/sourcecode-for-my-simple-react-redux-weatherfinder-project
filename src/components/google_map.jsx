import React, { Component } from 'react';

const google = window.google;

class GoogleMap extends Component {
  //componentDidMount is one of the lifecycle methods that gets called automatically after the element has rendered on the screen
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
