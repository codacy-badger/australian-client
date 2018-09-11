import React  from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import ProfileForm from "../../common/form/ProfileForm";
import {getProfile} from "../../../actions/profileActions";

class ProfileContainer extends React.Component {

  render() {
    const { isLoading } = this.props;

    if (isLoading) {
      return <div>Loading</div>
    }

    return (
      <ProfileForm {...this.props.user} />
    );
  }
}


// The propTypes.
ProfileContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  user: PropTypes.object,
};


// Redux connect begin here
function mapStateToProps(state) {
  return {
    isLoading: state.profileReducer.isProfileLoading,
    user: state.profileReducer.user
  };
}

function mapDispatchToProps(dispatch) {
  dispatch(getProfile());

  return {
    actions: bindActionCreators(getProfile, dispatch)
  };
}

//connect is returning a function, that explains the )(
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
