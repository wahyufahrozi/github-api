import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { actions } from "../Public/Redux/Actions/User";
import { connect } from "react-redux";

class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{ name: "" }}
          onSubmit={(values, { setSubmitting }) => {
            this.props.loadUserData(values.name);
            setSubmitting(false);
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Required")
          })}
        >
          {props => {
            const {
              values,
              isSubmitting,
              handleChange,
              handleSubmit,
              handleReset
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                  <b>GitHub Name</b>
                </label>
                <input
                  id="name"
                  placeholder="Enter your username"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                />

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            );
          }}
        </Formik>

        <div className="output">{JSON.stringify(this.props.user, null, 2)}</div>
      </div>
    );
  }
}

// making the most current state of 'user' available as props in the component
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

// creating a function called 'loadUserData'
// that dispatches a 'LOAD_USER_DATA' action to the store
// so that saga can trigger and start the API request
const mapDispatchToProps = dispatch => {
  return {
    loadUserData: name => dispatch(actions.loadUserData(name))
  };
};

// connect the Dashboard component and export it for use in <App />
export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
