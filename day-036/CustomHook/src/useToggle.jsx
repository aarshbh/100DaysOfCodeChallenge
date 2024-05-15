// useToggle.jsx
import { useState } from 'react';

const useToggle = (initialVal = false) => {
  const [state, setState] = useState(initialVal);

  const toggle = () => {
    setState((prev) => !prev);
  };

  return [state, toggle];
};

export { useToggle }; // Named export
