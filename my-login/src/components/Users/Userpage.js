import { useState, useEffect } from "react";
import AddForm from "./Addform";
import axios from "axios";
import User from "./User";

const UserList = () => {
  const [user, userList] = useState([]);
  const [edit, setEdit] = useState({});
  const [operation, setOperation] = useState("ADD");

  const loadUsers = async () => {
    try{
    const result = await axios.get("http://localhost:3001/users");
    userList(result.data);
    }
    catch(error){
      console.log("Error occures")
    }
    // console.log(result.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const operationBtn = async (obj) => {
    if (operation === "ADD") {
      await axios.post("http://localhost:3001/users", obj);
      loadUsers();
    }
    if (operation === "Update") {
      let id = obj.id;
      let username = obj.name;
      await axios.put("http://localhost:3001/users/" + id, { name: username });
      setOperation("ADD");

      loadUsers();
    }
  };
  const deleteUser = (id) => {
    console.log(id);
    axios.delete("http://localhost:3001/users/" + id);

    loadUsers();
  };

  const edituser = (obj) => {
    setOperation("Update");
    setEdit(obj);
  };

  return (
    <div>
      <AddForm
        operation={operation}
        editdata={edit}
        handalOperation={(obj) => operationBtn(obj)}
      />
      <table className="table">
        <thead className="bg-primary">
          <th>UID</th>
          <th>Name</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
            <User
              user={user}
              deleteUser={(id) => deleteUser(id)}
              editUser={(obj) => edituser(obj)}
            />
          }
        </tbody>
      </table>
    </div>
  );
};
export default UserList;
