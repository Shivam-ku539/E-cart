import axios from "axios";
import { React, useState, useEffect } from "react";
import AddForm from "../Policy/Addform";
import PolicyList from "./Policylist";

const Policies = () => {
  const [policylist, setPolicylist] = useState([]);
  const [edit, setEdit] = useState({});
  const [operation, setOperation] = useState("ADD");

  const loadPolicy = async () => {
    let result = await axios.get("http://localhost:3001/policylist");
    setPolicylist(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    loadPolicy();
  }, []);

  const operationBtn = async (obj) => {
    if (operation === "ADD") {
      await axios.post("http://localhost:3001/policylist", obj);
      loadPolicy();
    }
    if (operation === "Update") {
      let id = obj.id;
      let name = obj.policyname;
      let amount = obj.policyamount;
      let limit = obj.policylimit;
      await axios.put("http://localhost:3001/policylist/" + id, {
        policyname: name,
        policyamount: amount,
        policylimit: limit,
      });

      setOperation("ADD");
      loadPolicy();
    }
  };

  const deleteUser = (id) => {
    console.log(id);
    axios.delete("http://localhost:3001/policylist/" + id);
    loadPolicy();
  };

  const edituser = (obj) => {
    setOperation("Update");
    setEdit(obj);
  };

  return (
    <>
      <AddForm
        operation={operation}
        editdata={edit}
        handalOperation={(obj) => operationBtn(obj)}
      />

      <table class="table">
        <thead>
          <tr>
            <th>PID</th>
            <th>Policy Name</th>
            <th>Amount</th>
            <th>Limit</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            <PolicyList
              policylist={policylist}
              deleteUser={(id) => deleteUser(id)}
              editUser={(obj) => edituser(obj)}
            />
          }
        </tbody>
      </table>
    </>
  );
};

export default Policies;
