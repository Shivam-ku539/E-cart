import axios from "axios";
import { useEffect, useState } from "react";
import Addform from "./Addform";
import Policytable from "./Policytable";

const UserPolicy = () => {
  const [userPolicy, setUserPolicy] = useState([]);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3002/UserPolicy");
    setUserPolicy(result.data);
  };
  useEffect(() => {
    loadUsers();
  }, []);

  const handalOperation = async (obj) => {
    await axios.post("http://localhost:3002/UserPolicy", obj);
    loadUsers();
  };
  const deletePolicy = async (id) => {
    await axios.delete("http://localhost:3002/UserPolicy/" + id);
    loadUsers();
  };
  const claimAmount = async (obj) => {
    console.log(obj);
    await axios.patch("http://localhost:3002/UserPolicy/" + obj.id, {
      claimamount: obj.claimamount,
      claimstatus: obj.claimstatus,
    });
    loadUsers();
  };
  const displayData = userPolicy.filter((result) => result.claimstatus === "");
  console.log(displayData);

  return (
    <div className="container">
      <Addform handalOperation={(obj) => handalOperation(obj)} />
      <table className="table" id="employeeList">
        <thead className="bg-primary">
          <th>ID</th>
          <th>UserName</th>
          <th>PolicyName</th>
          <th>Amout</th>
          <th>Limit</th>
          <th>Req Amout</th>
          <th>Claim</th>
          <th>option</th>
        </thead>
        <tbody>
          {
            <Policytable
              userpolicy={displayData}
              deleteBtn={(id) => deletePolicy(id)}
              claimAmount={(obj) => claimAmount(obj)}
            />
          }
        </tbody>
      </table>
    </div>
  );
};
export default UserPolicy;
