import React from "react";
import { useRef } from "react";

const AddForm = (props) => {
  
  const uname = useRef(null);
  const { editdata , operation} = props;
  console.log(operation);
  
  if (editdata.name != null) {
    uname.current.value=editdata.name;
    document.getElementById("submit").innerHTML = "Update";
  }
  const onsubmithandel = (e) => {
    e.preventDefault();
  
    let obj = { id: "" , name: "" } 
    obj.name = uname.current.value;
     if(document.getElementById("submit").innerHTML === "Update")
    {
      obj.id = editdata.id;
      document.getElementById("submit").innerHTML="ADD";
      editdata.name=null;
      console.log(uname.current.value);
    }
    props.handalOperation(obj);
    uname.current.value = "";
  };
  console.log(editdata.name);
  
  return (
    <div className="container">
      <div className="py-4">
        <form onSubmit={(e) => onsubmithandel(e)}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              ref = { uname }
              placeholder="Enter Your Name"
            />
            <button type="submit" id="submit" className="btn btn-secondary my-3">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddForm;