import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Form from "./Form";
import { retrieve, update, reset } from "../../actions/user/update";
import { del } from "../../actions/user/delete";

class Update extends Component {
  static propTypes = {
    retrieved: PropTypes.object,
    retrieveLoading: PropTypes.bool.isRequired,
    retrieveError: PropTypes.string,
    updateLoading: PropTypes.bool.isRequired,
    updateError: PropTypes.string,
    deleteLoading: PropTypes.bool.isRequired,
    deleteError: PropTypes.string,
    updated: PropTypes.object,
    deleted: PropTypes.object,
    eventSource: PropTypes.instanceOf(EventSource),
    retrieve: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.retrieve(decodeURIComponent(this.props.match.params.id));
  }

  componentWillUnmount() {
    this.props.reset(this.props.eventSource);
  }

  del = () => {
    if (window.confirm("Are you sure you want to delete this item?"))
      this.props.del(this.props.retrieved);
  };

  render() {
    if (this.props.deleted) return <Redirect to=".." />;

    const item = this.props.updated ? this.props.updated : this.props.retrieved;

    return (
      <div className="container ml-5 mr-10">
        <h1>Edit {item && item["@id"]}</h1>

        {this.props.created && (
          <div className="alert alert-success" role="status">
            {this.props.created["@id"]} created.
          </div>
        )}
        {this.props.updated && (
          <div className="alert alert-success" role="status">
            {this.props.updated["@id"]} updated.
          </div>
        )}
        {(this.props.retrieveLoading ||
          this.props.updateLoading ||
          this.props.deleteLoading) && (
          <div className="alert alert-info" role="status">
            Loading...
          </div>
        )}
        {this.props.retrieveError && (
          <div className="alert alert-danger" role="alert">
            <span className="fa fa-exclamation-triangle" aria-hidden="true" />{" "}
            {this.props.retrieveError}
          </div>
        )}
        {this.props.updateError && (
          <div className="alert alert-danger" role="alert">
            <span className="fa fa-exclamation-triangle" aria-hidden="true" />{" "}
            {this.props.updateError}
          </div>
        )}
        {this.props.deleteError && (
          <div className="alert alert-danger" role="alert">
            <span className="fa fa-exclamation-triangle" aria-hidden="true" />{" "}
            {this.props.deleteError}
          </div>
        )}

        {item && (
          <Form
            onSubmit={(values) => this.props.update(item, values)}
            initialValues={item}
          />
        )}
        <div className ="d-flex justify-content-around" style ={{marginTop:-50}}>

        <Link to=".." className="btn btn-outline-info">
            <span className="fa fa-th-list fa-2x text-Light" aria-hidden="true"/>
        
        </Link>
        
        <button onClick={this.del} className="btn btn-outline-danger">
            <span className="fa fa-trash fa-2x text-Light" aria-hidden="true"/>
        
        </button>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  retrieved: state.user.update.retrieved,
  retrieveError: state.user.update.retrieveError,
  retrieveLoading: state.user.update.retrieveLoading,
  updateError: state.user.update.updateError,
  updateLoading: state.user.update.updateLoading,
  deleteError: state.user.del.error,
  deleteLoading: state.user.del.loading,
  eventSource: state.user.update.eventSource,
  created: state.user.create.created,
  deleted: state.user.del.deleted,
  updated: state.user.update.updated,
});

const mapDispatchToProps = (dispatch) => ({
  retrieve: (id) => dispatch(retrieve(id)),
  update: (item, values) => dispatch(update(item, values)),
  del: (item) => dispatch(del(item)),
  reset: (eventSource) => dispatch(reset(eventSource)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
