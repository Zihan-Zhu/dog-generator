import { useState } from "react";

function Button() {
  const [picIsOpen, setPicIsOpen] = useState(false);

  function generate() {
    setPicIsOpen(true);
  }

  return (
    <button className="btn" onClick={generate}>
      Fetch it!
    </button>
  );
}
export default Button;
