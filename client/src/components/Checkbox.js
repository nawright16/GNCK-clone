import React from "react";

const Checkbox = ({ completed, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={completed}
      onChange={onChange}
    />
  );
};

export default Checkbox;