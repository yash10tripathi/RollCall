import React, { useState } from "react";
const Dropd = () => {
  const [isvisible, setisvisible] = useState(true);
  return (
    <div className="dropdown profile-action">
      <i
        className="fa fa-ellipsis-v"
        onClick={() => setisvisible(!isvisible)}
      ></i>
      <div
        className={`dropdown-menu dropdown-menu-right ${
          isvisible ? "" : "show"
        }`}
      >
        <a
          className="dropdown-item "
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#edit_student"
        >
          <i className="fa fa-pencil "></i> Edit
        </a>
        <a
          className="dropdown-item"
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#delete_student"
        >
          <i className="fa fa-trash-o"></i> Delete
        </a>
      </div>
    </div>
  );
};
export default Dropd;
