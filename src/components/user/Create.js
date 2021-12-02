import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Form from "./Form";
import { create, reset } from "../../actions/user/create";

class Create extends Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    created: PropTypes.object,
    create: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  componentWillUnmount() {
    this.props.reset();
  }

  render() {
    if (this.props.created)
      return (
        <Redirect
          to={`edit/${encodeURIComponent(this.props.created["@id"])}`}
        />
      );

    return (
      <div className="container ml-10 mr-10">
        <h1 className="text-info" style={{marginTop:50}}>Nouvel adhérent</h1>

        {this.props.loading && (
          <div className="alert alert-info" role="status">
            Loading...
          </div>
        )}
        {this.props.error && (
          <div className="alert alert-danger" role="alert">
            <span className="fa fa-exclamation-triangle" aria-hidden="true" />{" "}
            {this.props.error}
          </div>
        )}

        <Form onSubmit={this.props.create} values={this.props.item} />
        <div className ="d-flex " style ={{marginTop:-50}}>
        <Link to="." className="btn btn-outline-info"><span className="fa fa-th-list fa-2x " aria-hidden="true"/> </Link>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { created, error, loading } = state.user.create;
  return { created, error, loading };
};

const mapDispatchToProps = (dispatch) => ({
  create: (values) => dispatch(create(values)),
  reset: () => dispatch(reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
