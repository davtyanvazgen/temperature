import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Form(props) {
  return (
    <div>
      <h3 className="title">Weather in your city</h3>
      <div className="formContainer">
        <form onSubmit={props.weatherMethod}>
          <TextField
            className="textfield"
            variant="outlined"
            type="text"
            name="city"
            placeholder="enter city"
          />
          <button className="input">Find</button>
          {/* <Button
            onClick={props.weatherMethod}
            variant="contained"
            color="primary"
          >
            Find
          </Button> */}
        </form>
      </div>
    </div>
  );
}

export default Form;
