const { useState } = require("react");

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  // const value = 1;
  const onChange = (event) => {
    setValue(event.target.value);
    // console.log(event.target.value);
  };
  // console.log({ value, onChange });
  return { value, onChange };
};

module.exports = { useInput };
