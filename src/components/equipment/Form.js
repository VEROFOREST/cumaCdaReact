import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

class Form extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string,
  };

  renderField = (data) => {
    data.input.className = "form-control";

    const isInvalid = data.meta.touched && !!data.meta.error;
    if (isInvalid) {
      data.input.className += " is-invalid";
      data.input["aria-invalid"] = true;
    }

    if (this.props.error && data.meta.touched && !data.meta.error) {
      data.input.className += " is-valid";
    }

    return (
        <div className="container ml-5 mr-10">
      <div className={`form-group`}>
        <label
          htmlFor={`equipment_${data.input.name}`}
          className="form-control-label"
        >
          {/* {data.input.name} */}
        </label>
        <input
          {...data.input}
          type={data.type}
          step={data.step}
          required={data.required}
          placeholder={data.placeholder}
          id={`equipment_${data.input.name}`}
        />
        {isInvalid && <div className="invalid-feedback">{data.meta.error}</div>}
      </div>
      </div>
    );
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
           <label for="example-49293">Nom </label>
        <Field
          component={this.renderField}
          name="name"
          type="text"
          placeholder=""
        />
         <label for="example-49293">Image </label>
        <Field
          component={this.renderField}
          name="picture"
          type="text"
          placeholder=""
        />
         <label for="example-49293">Année du matériel </label>
        <Field
          component={this.renderField}
          name="equipmentYear"
          type="number"
          placeholder=""
          normalize={(v) => parseFloat(v)}
        />
         <label for="example-49293">Année d'achat</label>
        <Field
          component={this.renderField}
          name="purchaseYear"
          type="number"
          placeholder=""
          normalize={(v) => parseFloat(v)}
        />
         <label for="example-49293">Prix </label>
        <Field
          component={this.renderField}
          name="price"
          type="number"
          placeholder=""
          normalize={(v) => parseFloat(v)}
        />
         <label for="example-49293">Créé le  </label>
        <Field
          component={this.renderField}
          name="createdAt"
          type="dateTime"
          placeholder=""
        />
         <label for="example-49293">Mis à jour le  </label>
        <Field
          component={this.renderField}
          name="updatedAt"
          type="dateTime"
          placeholder=""
        />
         <label for="example-49293">Réservations</label>
        <Field
          component={this.renderField.type}
          name="reservations"
          type="text"
          placeholder=""
          normalize={(v) => (v === "" ? [] : v.split(","))}
        />
         <label for="example-49293">Parts sociales </label>
        <Field
          component={this.renderField}
          name="shares"
          type="text"
          placeholder=""
          normalize={(v) => (v === "" ? [] : v.split(","))}
        />
         <label for="example-49293">Type de location </label>
        <Field
          component={this.renderField}
          name="rentalType"
          type="text"
          placeholder=""
        />

        <div className="d-flex justify-content-end" style={{marginTop:50}}>
        <button type="submit" className="btn  btn-outline-success ">
            <span className="fa fa-paper-plane fa-2x text-Light" aria-hidden="true"/>
        </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "equipment",
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(Form);
