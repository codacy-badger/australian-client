import React, { Component } from "react";
import PropTypes from "prop-types";
import InputGroupIcon from "../common/input/InputGroupIcon";
import Submit from "../common/button/Submit";
import { Col, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
import { Map as LeafletMap, Marker, Popup, TileLayer } from "react-leaflet";
import { connect } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { updateAddress } from "../../actions/addressActions";
import { translate } from "react-i18next";
import { bindActionCreators } from "redux";
import { Field } from "redux-form";
import FormNumberGroup from "../formgroup/abstract/FormNumberGroup";

library.add(faGlobe);

//TODO add loading props
class AddressForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      center: {
        lat: props.initialValues.latitude,
        lng: props.initialValues.longitude
      },
      marker: {
        lat: props.initialValues.latitude,
        lng: props.initialValues.longitude
      },
      zoom: 13,
      draggable: true
    };

    this.refMarker = React.createRef();
  }

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable });
  };

  updatePosition = () => {
    const { lat, lng } = this.refMarker.current.leafletElement.getLatLng();
    //TODO Do no update state but use change action creator from redux-form
    this.setState({
      marker: { lat, lng }
    });
  };

  render() {
    const position = [this.state.center.lat, this.state.center.lng];
    const markerPosition = [this.state.marker.lat, this.state.marker.lng];
    const { handleSubmit, isPending, isLoading, pristine, reset, t } = this.props;

    const fieldProps = {
      disabled: isPending || isLoading,
      isLoading: isPending || isLoading
    };

    return (
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={6}>
            <Field type="number" name="longitude" {...fieldProps} component={FormNumberGroup} icon="globe" />
            <Field type="number" name="latitude" {...fieldProps} component={FormNumberGroup} icon="globe" />
            <Submit isPending={isPending} name="profile" onClick={this.onSubmit} />
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
    initialValues: state.addressReducer.address
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ updateAddress }, dispatch)
  };
}

export default translate("translations")(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddressForm)
);
