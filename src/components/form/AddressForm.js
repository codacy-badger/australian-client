import React, { Component } from "react";
import PropTypes from "prop-types";
import Submit from "../common/button/Submit";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Map as LeafletMap, Marker, Popup, TileLayer } from "react-leaflet";
import { connect } from "react-redux";
import { profileAddressUpdate } from "../../actions/profileActions";
import { translate } from "react-i18next";

class AddressForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      center: {
        lat: 45,
        lng: -1
      },
      marker: {
        lat: 45,
        lng: -1
      },
      zoom: 13,
      draggable: true
    };

    this.refMarker = React.createRef();

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable });
  };

  updatePosition = () => {
    const { lat, lng } = this.refMarker.current.leafletElement.getLatLng();
    this.setState({
      marker: { lat, lng }
    });
  };

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { lat, lng } = this.marker;
    const data = { lat, lng };

    profileAddressUpdate(data);
  }

  render() {
    const { isPending, isSuccess, t } = this.props;
    const position = [this.state.center.lat, this.state.center.lng];
    const markerPosition = [this.state.marker.lat, this.state.marker.lng];

    return (
      <Form onSubmit={this.onSubmit}>
        <h2>{t("title.profile-address")}</h2>
        <Row>
          <Col sm={6}>
            <FormGroup row>
              <Label for="longitude" sm={3}>
                {t("form.general.longitude")}
              </Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="longitude"
                  id="longitude"
                  value={this.state.marker.lng}
                  required
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="latitude" sm={3}>
                {t("form.general.latitude")}
              </Label>
              <Col sm={9}>
                <Input
                  type="text"
                  name="latitude"
                  id="latitude"
                  value={this.state.marker.lat}
                  required
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <Submit isPending={isPending} isError={isSuccess} name="profile" onClick={this.onSubmit} />
          </Col>
          <Col sm={6}>
            <div id="mapid" className="border border-secondary img-thumbnail">
              <LeafletMap center={position} zoom={this.state.zoom}>
                <TileLayer
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                <Marker
                  draggable={this.state.draggable}
                  onDragend={this.updatePosition}
                  position={markerPosition}
                  ref={this.refMarker}
                >
                  <Popup minWidth={90}>
                    <span onClick={this.toggleDraggable}>{this.state.draggable ? "DRAG MARKER" : "MARKER FIXED"}</span>
                  </Popup>
                </Marker>
              </LeafletMap>
            </div>
          </Col>
        </Row>
      </Form>
    );
  }
}

// The propTypes.
AddressForm.propTypes = {
  t: PropTypes.func.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    isPending: false,
    isError: false,
    isSuccess: false
  };
}

function mapDispatchToProps(dispatch) {
  return {
    profileAddressUpdate: (data) => dispatch(profileAddressUpdate(data))
  };
}

export default translate("translations")(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddressForm)
);
