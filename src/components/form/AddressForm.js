import React, { Component } from "react";
import PropTypes from "prop-types";
import FormTextGroup from "../formgroup/abstract/FormTextGroup";
import Reset from "../common/button/Reset";
import Submit from "../common/button/Submit";
import isFloat from "validator/lib/isFloat";
import { Col, Form, Row } from "reactstrap";
import { change, Field, reduxForm, propTypes, touch, formValueSelector } from "redux-form";
import { Map as LeafletMap, Marker, TileLayer } from "react-leaflet";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCity, faGlobe, faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";
import { updateAddress } from "../../actions/addressActions";
import FormCheckBoxGroup from "../formgroup/abstract/FormCheckBoxGroup";

library.add(faCity, faGlobe, faGlobeAfrica);

export const validate = (values) => {
  const errors = {};
  const { latitude, longitude, setPosition } = values;

  console.dir(values);

  if (setPosition && latitude && !isFloat(latitude.toString(), { min: "-90", max: "90" })) {
    errors.latitude = "latitude must be a Float between -90 and +90";
  }

  if (setPosition && longitude && !isFloat(longitude.toString(), { min: "-180", max: "180" })) {
    errors.longitude = "longitude must be a Float between -180 and +180";
  }

  return errors;
};

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
      //FIXME Update zoom to avoid "zoom" when moving marker.
      zoom: 13,
      draggable: true
    };

    this.refMarker = React.createRef();
    this.updatePosition = this.updatePosition.bind(this);
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

  updatePosition = () => {
    const { lat, lng } = this.refMarker.current.leafletElement.getLatLng();
    this.props.actions.change("profile-address", "latitude", lat);
    this.props.actions.change("profile-address", "longitude", lng);
    //This is to activate error message.
    this.props.actions.touch("profile-address", "latitude");
    this.props.actions.touch("profile-address", "longitude");
    this.setState({
      center: { lat, lng },
      marker: { lat, lng }
    });
  };

  render() {
    const position = [this.state.center.lat, this.state.center.lng];
    const markerPosition = [this.state.marker.lat, this.state.marker.lng];
    const { actions, handleSubmit, isLoading, isPositioning, pristine, reset, submitting } = this.props;
    const isSpinning = submitting || isLoading;

    const fieldProps = {
      disabled: isSpinning,
      isLoading: isSpinning
    };

    return (
      <Form onSubmit={handleSubmit(actions.updateAddress)}>
        <Row>
          <Col sm={6}>
            <Field type="text" name="city" {...fieldProps} component={FormTextGroup} icon="city" />
            <Field type="text" name="country" {...fieldProps} component={FormTextGroup} icon="globe-africa" />
            <Field type="checkbox" name="setPosition" {...fieldProps} component={FormCheckBoxGroup} />
            {isPositioning && (
              <Field
                type="text"
                name="latitude"
                isLoading={isSpinning}
                component={FormTextGroup}
                icon="globe"
                disabled
              />
            )}
            {isPositioning && (
              <Field
                type="text"
                name="longitude"
                isLoading={isSpinning}
                component={FormTextGroup}
                icon="globe"
                disabled
              />
            )}
            <div className="text-right">
              <Reset onClick={reset} disabled={pristine || submitting} />
              <Submit
                disabled={pristine || isLoading}
                isPending={submitting}
                name="profile"
                onClick={handleSubmit(actions.updateAddress)}
              />
            </div>
          </Col>
          <Col sm={6}>
            <div id="mapid" className="border border-secondary img-thumbnail">
              <LeafletMap center={position} zoom={this.state.zoom}>
                <TileLayer
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />
                {isPositioning && (
                  <Marker draggable onDragend={this.updatePosition} position={markerPosition} ref={this.refMarker} />
                )}
              </LeafletMap>
            </div>
          </Col>
        </Row>
      </Form>
    );
  }
}

// The propTypes.
AddressForm.defaultProps = {
  isPositioning: false
};

AddressForm.propTypes = {
  actions: PropTypes.object.isRequired,
  isPositioning: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
  ...propTypes
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    isPositioning: selector(state, "setPosition"),
    isLoading: state.addressReducer.isAddressLoading,
    initialValues: state.addressReducer.address
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ change, touch, updateAddress }, dispatch)
  };
}

// Decorate with connect to read form values
const selector = formValueSelector("profile-address");

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    // When activated, submitting is always false.
    // enableReinitialize: true,
    form: "profile-address",
    validate
  })(AddressForm)
);
