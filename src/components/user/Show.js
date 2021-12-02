import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { retrieve, reset } from "../../actions/user/show";
import { del } from "../../actions/user/delete";

class Show extends Component {
  static propTypes = {
    retrieved: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    eventSource: PropTypes.instanceOf(EventSource),
    retrieve: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    deleteError: PropTypes.string,
    deleteLoading: PropTypes.bool.isRequired,
    deleted: PropTypes.object,
    del: PropTypes.func.isRequired,
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

    const item = this.props.retrieved;

    return (
      <div className="container ml-5 mr-10">
        <h1>Show {item && item["@id"]}</h1>

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
        {this.props.deleteError && (
          <div className="alert alert-danger" role="alert">
            <span className="fa fa-exclamation-triangle" aria-hidden="true" />{" "}
            {this.props.deleteError}
          </div>
        )}

        {item && (
          <table className="table table-responsive table-striped table-hover">
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">email</th>
                <td>{item["email"]}</td>
              </tr>
              <tr>
                <th scope="row">Rôle</th>
                <td>{item["roles"]}</td>
              </tr>
              <tr>
                <th scope="row">Mot de passe</th>
                <td>{item["password"]}</td>
              </tr>
              <tr>
                <th scope="row">Prénom</th>
                <td>{item["firstName"]}</td>
              </tr>
              <tr>
                <th scope="row">Nom</th>
                <td>{item["lastName"]}</td>
              </tr>
              <tr>
                <th scope="row">adresse</th>
                <td>{item["address"]}</td>
              </tr>
              <tr>
                <th scope="row">cp</th>
                <td>{item["cp"]}</td>
              </tr>
              <tr>
                <th scope="row">Ville</th>
                <td>{item["city"]}</td>
              </tr>
              <tr>
                <th scope="row">portable</th>
                <td>{item["phone"]}</td>
              </tr>
              <tr>
                <th scope="row">créé le </th>
                <td>{item["createdAt"]}</td>
              </tr>
              <tr>
                <th scope="row">mis à jour le</th>
                <td>{item["updatedAt"]}</td>
              </tr>
              <tr>
                <th scope="row">Réservations</th>
                <td>
                  {this.renderLinks("reservations", item["reservations"])}
                </td>
              </tr>
              <tr>
                <th scope="row">Parts sociales</th>
                <td>{this.renderLinks("shares", item["shares"])}</td>
              </tr>
              {/* <tr>
                <th scope="row">userIdentifier</th>
                <td>{item["userIdentifier"]}</td>
              </tr>
              <tr>
                <th scope="row">username</th>
                <td>{item["username"]}</td>
              </tr>
              <tr>
                <th scope="row">salt</th>
                <td>{item["salt"]}</td>
              </tr> */}
            </tbody>
          </table>
        )}
        <div  className="d-flex justify-content-around"> 
        <Link to=".." className="btn btn-outline-info"><span className="fa fa-th-list fa-2x text-Light" aria-hidden="true"/>
            
        </Link>
        {item && (
          <Link to={`/users/edit/${encodeURIComponent(item["@id"])}`}>
            <button className="btn btn-outline-warning"><span className="fa fa-pencil fa-2x text-Light" aria-hidden="true"/></button>
          </Link>
        )}
        <button onClick={this.del} className="btn btn-outline-danger"><span className="fa fa-trash fa-2x text-Light" aria-hidden="true"/>
         
        </button>
        </div>
      </div>
    );
  }

  renderLinks = (type, items) => {
    if (Array.isArray(items)) {
      return items.map((item, i) => (
        <div key={i}>{this.renderLinks(type, item)}</div>
      ));
    }

    return (
      <Link to={`../../${type}/show/${encodeURIComponent(items)}`}>
        {items}
      </Link>
    );
  };
}

const mapStateToProps = (state) => ({
  retrieved: state.user.show.retrieved,
  error: state.user.show.error,
  loading: state.user.show.loading,
  eventSource: state.user.show.eventSource,
  deleteError: state.user.del.error,
  deleteLoading: state.user.del.loading,
  deleted: state.user.del.deleted,
});

const mapDispatchToProps = (dispatch) => ({
  retrieve: (id) => dispatch(retrieve(id)),
  del: (item) => dispatch(del(item)),
  reset: (eventSource) => dispatch(reset(eventSource)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
