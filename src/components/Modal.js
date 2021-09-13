import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import './Modal.css';

const modalRoot = document.getElementById('modal-root');

function Modal(props) {
  const [element, setElement] = useState(document.createElement('div'))
  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    }
  }, [element]);

  // Use a portal to render the children into the element
  return ReactDOM.createPortal(
    // Any valid React child: JSX, strings, arrays, etc.
    <div className="modal">
      {props.children}
    </div>,
    // A DOM element
    element,
  );
}

export default Modal;