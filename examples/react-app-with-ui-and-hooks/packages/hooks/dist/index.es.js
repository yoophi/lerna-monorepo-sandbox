const { useState } = require("react");

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  return { value, onChange };
};

module.exports = { useInput };
