import React, { Component } from "react";
import PropTypes from "prop-types";
import FormTextGroup from "../formgroup/abstract/FormTextGroup";
import Reset from "../common/button/Reset";
import Submit from "../common/button/Submit";
import isFloat from "validator/lib/isFloat";
import { Col, Form, Row } from "reactstrap";
import {change, Field, reduxForm, touch} from "redux-form";
import { Map as LeafletMap, Marker, Popup, TileLayer } from "react-leaflet";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCity, faGlobe, faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';
import { updateAddress } from "../../actions/addressActions";

library.add(faCity, faGlobe, faGlobeAfrica);

export const validate = (values) => {
  const errors = {};
  const {latitude, longitude} = values;
  const options = {
    min: "-90",
    max: "90"
  };

  if (latitude && !isFloat(latitude.toString(), options)) {
    errors.latitude = "latitude must be a Float between -90 and +90";
  }

  if (longitude && !isFloat(longitude.toString(), options)) {
    errors.longitude = "longitude must be a Float between -90 and +90";
  }
  
  return errors;
};

//TODO user should set latitude and longitude to null
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.initialValues && nextProps.initialValues.latitude && nextProps.initialValues.longitude) {
      this.setState({
        center: {
          lat: nextProps.initialValues.latitude,
          lng: nextProps.initialValues.longitude
        },
        marker: {
          lat: nextProps.initialValues.latitude,
          lng: nextProps.initialValues.longitude
        }
      });
    }
  }

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable });
  };

  updatePosition = () => {
    const { lat, lng } = this.refMarker.current.leafletElement.getLatLng();
    this.props.actions.change("profile-address", "latitude", lat);
    this.props.actions.change("profile-address", "longitude", lng);
    //This is to activate error message.
    this.props.actions.touch("profile-address","latitude");
    this.props.actions.touch("profile-address","longitude");
    this.setState({
      marker: { lat, lng }
    });
  };

  render() {
    const position = [this.state.center.lat, this.state.center.lng];
    const markerPosition = [this.state.marker.lat, this.state.marker.lng];
    const { handleSubmit, isPending, isLoading, pristine, reset, submitting } = this.props;
    const isSpinning = isPending || isLoading;

    const fieldProps = {
      disabled: isSpinning,
      isLoading: isSpinning
    };

    return (
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={6}>
            <Field
              type="text"
              name="longitude"
              isLoading={isSpinning}
              component={FormTextGroup}
              icon="globe"
              disabled
            />
            <Field type="text" name="latitude" isLoading={isSpinning} component={FormTextGroup} icon="globe" disabled />
            <Field type="text" name="city" {...fieldProps} component={FormTextGroup} icon="city" />
            <Field type="text" name="country" {...fieldProps} component={FormTextGroup} icon="globe-africa" />
            <div className="text-right">
              <Reset onClick={reset} disabled={pristine || submitting}/>
              <Submit isPending={isPending} name="profile" onClick={handleSubmit} />
            </div>
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
  isLoading: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    initialValues: state.addressReducer.address
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ change, touch, updateAddress }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "profile-address",
    enableReinitialize: true,
    validate
  })(AddressForm)
);
