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
      <div className={`form-group`}>
        <label
          htmlFor={`user_${data.input.name}`}
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
          id={`user_${data.input.name}`}
        />
        {isInvalid && <div className="invalid-feedback">{data.meta.error}</div>}
      </div>
    );
  };

  render() {
    return (
    <div className="container mr-10 ml-10" style={{marginTop:50}}>
      <form onSubmit={this.props.handleSubmit}>
        <div className="d-flex flex-fill justify-content-center">
        <label for="example-49293">Email</label>
        <Field
          component={this.renderField}
          name="email"
          type="text"
          placeholder=""
        />
        <label for="example-49293">Rôle</label>
        <Field
          component={this.renderField}
          name="roles"
          type="text"
          placeholder=""
          />
         <label for="example-49293">Mot de passe</label>
        <Field
          component={this.renderField}
          name="password"
          type="text"
          placeholder="mot de passe"
          />
          </div>
          <div className="d-flex flex-fill justify-content-center">
         <label for="example-49293">Nom</label>
        <Field
          component={this.renderField}
          name="lastName"
          type="text"
          placeholder=""
        />
         <label for="example-49293">Prénom</label>
        <Field
          component={this.renderField}
          name="firstName"
          type="text"
          placeholder=""
        />
        </div>
         <div className="d-flex flex-fill justify-content-center">
         <label for="example-49293">Adresse</label>
        <Field
          component={this.renderField}
          name="address"
          type="text"
          placeholder=""
        />
         <label for="example-49293">CP</label>

        <Field
          component={this.renderField}
          name="cp"
          type="text"
          placeholder=""
        />
         <label for="example-49293">Ville</label>
        <Field
          component={this.renderField}
          name="city"
          type="text"
          placeholder=""
        />
         <label for="example-49293">Portable</label>
        <Field
          component={this.renderField}
          name="phone"
          type="text"
          placeholder=""
        />
        </div>
        <div className="d-flex flex-fill justify-content-center">
         <label for="example-49293">Créé le</label>

        <Field
          component={this.renderField}
          name="createdAt"
          type="dateTime"
          placeholder=""
        />
         <label for="example-49293">Mis à jour le </label>

        <Field
          component={this.renderField}
          name="updatedAt"
          type="dateTime"
          placeholder=""
        />
        </div>
        <div className="d-flex flex-fill justify-content-around">
         <label for="example-49293">Mes réservations</label>
        <Field
          component={this.renderField}
          name="reservations"
          type="text"
          placeholder=""
          normalize={(v) => (v === "" ? [] : v.split(","))}
        />
         <label for="example-49293">Mes parts sociales</label>

        <Field
          component={this.renderField}
          name="shares"
          type="text"
          placeholder=""
          normalize={(v) => (v === "" ? [] : v.split(","))}
        />
        </div>
        <div className="d-flex justify-content-end" style={{marginTop:50}}>
        <button type="submit" className="btn  btn-outline-success ">
            <span className="fa fa-paper-plane fa-2x text-Light" aria-hidden="true"/>
        </button>
        </div>
      </form>
  </div>
    );
  }
}

export default reduxForm({
  form: "user",
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
})(Form);
