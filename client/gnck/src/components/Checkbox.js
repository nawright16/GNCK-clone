import React from "react";
import { MDBSwitch } from 'mdb-react-ui-kit';
import "./Checkbox.css";

const Checkbox = ({ completed, onChange }) => {
  return (

    <MDBSwitch 
      id='toggle' 
      label=''
      checked={completed}
      onChange={onChange}
    />
  );
};

export default Checkbox;

