import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { list, reset } from "../../actions/reservation/list";

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
        <h1>Les réservations</h1>

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

        <p>
          <Link to="create" className="btn btn-outline-info ">
            <i className="fa fa-plus-circle fa-2x " aria-hidden="true"></i>
           {/* Nouvelle réservation */}
          </Link>
        </p>

        <table className="table table-responsive table-striped table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>Matériel</th>
              <th>Adhérent</th>
              <th>date de début de réservation</th>
              <th>date de fin de réservation</th>
              <th>Réservation validée</th>
              <th>Matériel disponible</th>
              <th>Créé le</th>
              {/* <th>updatedAt</th> */}
              <th colSpan={2} />
            </tr>
          </thead>
          <tbody>
              
            {this.props.retrieved &&
              this.props.retrieved["hydra:member"].map((item) => (
                <tr key={item["@id"]}>
                  <th scope="row">
                    <Link to={`show/${encodeURIComponent(item["@id"])}`}>
                      {item["id"]}
                    </Link>
                  </th>
                  <td className="text-info">{this.renderLinks("equipment", item["equipment"])}</td>
                  <td>{this.renderLinks("users", item["user"])}</td>
                  <td>{item["startDate"]}</td>
                  <td>{item["endDate"]}</td>
                  {item["isValidated"] === false ? <td><i className="fa fa-check text-warning" aria-hidden="true"></i></td> :
                  <td><i class="fa fa-check-circle text-success" aria-hidden="true"></i></td>} 
                 {item["isAvailable"] === false ? <td><i class="fa fa-times text-danger" aria-hidden="true"></i></td> :
                  <td><i class="fa fa-check-circle text-success" aria-hidden="true"></i></td>} 
                  {/* <td>{item["isAvailable"]}</td> */}
                  <td>{item["createdAt"]}</td>
                  {/* <td>{item["updatedAt"]}</td> */}
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
      <Link to={`../${type}/show/${encodeURIComponent(items)}`}>${items}</Link>
    );
  };
}

const mapStateToProps = (state) => {
   
  const { retrieved, loading, error, eventSource, deletedItem } =
    state.reservation.list;
  return { retrieved, loading, error, eventSource, deletedItem };
};

const mapDispatchToProps = (dispatch) => ({
  list: (page) => dispatch(list(page)),
  reset: (eventSource) => dispatch(reset(eventSource)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
