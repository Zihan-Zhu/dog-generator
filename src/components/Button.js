import { useState } from "react";
import Media from "./Media";

function Button() {
  const [picIsOpen, setPicIsOpen] = useState(false);

  function generate() {
    setPicIsOpen(true);
  }

  function refresh(){
    setPicIsOpen(false);
  }

  return (
    <div>
      <div>
        <button className="btn" onClick={generate}>
          Fetch it!
        </button>

        <button className="btn1" onClick={refresh}>
            Refresh
        </button>
      </div>

      {picIsOpen ? <Media /> : null}
    </div>

    
  );
}
export default Button;
