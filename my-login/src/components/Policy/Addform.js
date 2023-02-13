import React from "react";
import { useRef } from "react";

const Addform = (props) => {
  const pname = useRef(null);
  const pamount = useRef(null);
  const plimit = useRef(null);
  const { editdata, operation } = props;
  console.log(operation);

  if (editdata.policyname != null) {
    pname.current.value = editdata.policyname;
    pamount.current.value = editdata.policyamount;
    plimit.current.value = editdata.policylimit;
    document.getElementById("submit").innerHTML = "Update"; //update button
  }
  const onsubmithandel = (e) => {
    e.preventDefault();
    let obj = { id: "", policyname: "", policyamount: "", policylimit: "" };
    obj.policyname = pname.current.value;
    obj.policyamount = pamount.current.value;
    obj.policylimit = plimit.current.value;
    if (document.getElementById("submit").innerHTML === "Update");
    {
      obj.id = editdata.id;
      document.getElementById("submit").innerHTML = "ADD";
      editdata.policyname = null;
      editdata.policyamount = null;
      editdata.policylimit = null;
    }
    props.handalOperation(obj);
    //document.getElementById("submit").innerHTML="ADD";
    pname.current.value = "";
    pamount.current.value = "";
    plimit.current.value = "";
  };

  return (
    <>
      <h1>Policy Details</h1>
      <br />

      <form onSubmit={(e) => onsubmithandel(e)}>
        <div class="mb-3">
          <label for="Policyname" class="form-label">
            Policy Name
          </label>
          <input
            Policyname="Policyname"
            type="text"
            ref={pname}
            placeholder="Enter name"
            class="form-control"
            id="policyname"
          />

          <label for="Policyamount" class="form-label">
            Policy Amount
          </label>
          <input
            Policyname="Policyamount"
            type="text"
            ref={pamount}
            placeholder="0"
            class="form-control"
            id="policyamount"
          />

          <label for="Policylimit" class="form-label">
            Policy Limit
          </label>
          <input
            Policyname="Policylimit"
            type="text"
            ref={plimit}
            placeholder="0"
            class="form-control"
            id="policylimit"
          />
        </div>
        <button class="btn btn-primary" id="submit">
          Add
        </button>
      </form>
    </>
  );
};
export default Addform;
