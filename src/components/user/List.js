import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { list, reset } from "../../actions/user/list";


class List extends Component {
  static propTypes = {
    retrieved: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    eventSource: PropTypes.instanceOf(EventSource),
    deletedItem: PropTypes.object,
    list: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.list(
      this.props.match.params.page &&
        decodeURIComponent(this.props.match.params.page)
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.page !== prevProps.match.params.page)
      this.props.list(
        this.props.match.params.page &&
          decodeURIComponent(this.props.match.params.page)
      );
  }

  componentWillUnmount() {
    this.props.reset(this.props.eventSource);
  }

  render() {
    return (
      <div className="container ml-5 mr-10">
        <h1>Liste des Adhérents</h1>

        {this.props.loading && (
          <div className="alert alert-info">Loading...</div>
        )}
        {this.props.deletedItem && (
          <div className="alert alert-success">
            {this.props.deletedItem["@id"]} deleted.
          </div>
        )}
        {this.props.error && (
          <div className="alert alert-danger">{this.props.error}</div>
        )}

        

        <table className="table table-responsive table-striped table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>Email</th>
              {/* <th>roles</th> */}
              {/* <th>Mot de passe</th> */}
              <th>Nom</th>
              <th>Prénom</th>
              <th>Adresse</th>
              <th>CP</th>
              <th>Ville</th>
              <th>Portable</th>
              {/* <th>createdAt</th>
              <th>updatedAt</th> */}
              <th>Réservations</th>
              <th>Parts Sociales</th>
              {/* <th>userIdentifier</th>
              <th>username</th>
              <th>salt</th> */}
              <th colSpan={2} />
            </tr>
          </thead>
        
          <tbody>
            {this.props.retrieved &&
              this.props.retrieved["hydra:member"].map((item) => (
                <tr key={item["@id"]}>
                  <th scope="row">
                    <Link to={`show/${encodeURIComponent(item["@id"])}`}>
                      {item["@id"]}
                    </Link>
                  </th>
                  <td>{item["email"]}</td>
                  {/* <td>{item["roles"]}</td> */}
                  {/* <td>{item["password"]}</td> */}
                  <td>{item["firstName"]}</td>
                  <td>{item["lastName"]}</td>
                  <td>{item["address"]}</td>
                  <td>{item["cp"]}</td>
                  <td>{item["city"]}</td>
                  <td>{item["phone"]}</td>
                  {/* <td>{item["createdAt"]}</td>
                  <td>{item["updatedAt"]}</td> */}
                  <td>
                    {this.renderLinks("reservations", item["reservations"])}
                  </td>
                  <td>{this.renderLinks("shares", item["shares"])}</td>
                  {/* <td>{item["userIdentifier"]}</td>
                  <td>{item["username"]}</td>
                  <td>{item["salt"]}</td> */}
                  <td>
                    <Link to={`show/${encodeURIComponent(item["@id"])}`}>
                      <span className="fa fa-search text-info" aria-hidden="true" />
                      <span className="sr-only">Voir</span>
                    </Link>
                  </td>
                  <td>
                    <Link to={`edit/${encodeURIComponent(item["@id"])}`}>
                      <span className="fa fa-pencil text-info" aria-hidden="true" />
                      <span className="sr-only">Modifier</span>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
             
          <Link to="create" className="btn  btn-outline-info">
             <span className="fa fa-plus-circle fa-2x " aria-hidden="true" />
            Nouvel Adhérent
          </Link>
      
        {this.pagination()}
      </div>
    );
  }

  pagination() {
    const view = this.props.retrieved && this.props.retrieved["hydra:view"];
    if (!view || !view["hydra:first"]) return;

    const {
      "hydra:first": first,
      "hydra:previous": previous,
      "hydra:next": next,
      "hydra:last": last,
    } = view;

    return (
        
      <nav aria-label="Page navigation">
        <Link
          to="."
          className={`btn btn-primary${previous ? "" : " disabled"}`}
        >
          <span aria-hidden="true">&lArr;</span> First
        </Link>
        <Link
          to={
            !previous || previous === first ? "." : encodeURIComponent(previous)
          }
          className={`btn btn-primary${previous ? "" : " disabled"}`}
        >
          <span aria-hidden="true">&larr;</span> Previous
        </Link>
        <Link
          to={next ? encodeURIComponent(next) : "#"}
          className={`btn btn-primary${next ? "" : " disabled"}`}
        >
          Next <span aria-hidden="true">&rarr;</span>
        </Link>
        <Link
          to={last ? encodeURIComponent(last) : "#"}
          className={`btn btn-primary${next ? "" : " disabled"}`}
        >
          Last <span aria-hidden="true">&rArr;</span>
        </Link>
      </nav>
    );
  }

  renderLinks = (type, items) => {
    if (Array.isArray(items)) {
      return items.map((item, i) => (
        <div key={i}>{this.renderLinks(type, item)}</div>
      ));
    }

    return (
      <Link to={`../${type}/show/${encodeURIComponent(items)}`}>{items}</Link>
    );
  };
}

const mapStateToProps = (state) => {
  const { retrieved, loading, error, eventSource, deletedItem } =
    state.user.list;
  return { retrieved, loading, error, eventSource, deletedItem };
};

const mapDispatchToProps = (dispatch) => ({
  list: (page) => dispatch(list(page)),
  reset: (eventSource) => dispatch(reset(eventSource)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
