import React from "react";

function Form(props) {
  return (
    <div>
      <h3 className="title">Weather in your city</h3>
      <div className="formContainer">
        <form onSubmit={props.weatherMethod}>
          <input type="text/" name="city" placeholder="enter city" />
          <button>get city</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
