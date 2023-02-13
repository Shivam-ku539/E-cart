import axios from "axios";
import { useEffect, useState } from "react";

const Addform = (props) => {
  const [user, setUser] = useState([]);
  const [policy, setPolicy] = useState([]);
  //const [data , setData ] = useState([]);
  const loadUsers = async () => {
    const userresult = await axios.get("http://localhost:3001/users");
    setUser(userresult.data);
    const policyresult = await axios.get("http://localhost:3001/policylist");
    setPolicy(policyresult.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);
  const onInputChange = (e) => {
    const filterdata = policy.filter((policy) => (policy.id = e.target.value));
    console.log(e.target.value);
    const p1 = (document.getElementById("policyamount").value =
      filterdata[0].policyamount);
    console.log(p1);
    document.getElementById("policylimit").value = filterdata[0].policylimit;
  };
  const onsubmithandel = (e) => {
    e.preventDefault();
    var name = document.getElementById("user");
    var uname = name.options[name.selectedIndex].text;
    var policyname = document.getElementById("policy");
    console.log(policyname);
    var pname = policyname.options[policyname.selectedIndex].text;
    console.log(pname);
    var amt = document.getElementById("policyamount").value;
    var amtlimit = document.getElementById("policylimit").value;
    var obj = {
      username: uname,
      policyname: pname,
      policyamount: amt,
      policylimit: amtlimit,
      status: "",
      claimamount: "",
      claimstatus: "",
    };
    props.handalOperation(obj);
  };

  return (
    <div className="container">
      <div className="py-4">
        <form onSubmit={(e) => onsubmithandel(e)}>
          <div className="mb-3">
            <legend>User Policy</legend>
            <select
              className="form-select"
              aria-label="Default select example"
              id="user"
            >
              <option selected value="">
                select
              </option>
              {user.map((value) => (
                <option value={value.id} key={value.id}>
                  {value.name}
                </option>
              ))}
            </select>
            <br />
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => onInputChange(e)}
              id="policy"
            >
              <option selected>select</option>
              {policy.map((value) => (
                <option value={value.id} key={value.id}>
                  {value.policyname}
                </option>
              ))}
            </select>
            <label className="form-label">Policy Amout</label>
            <input
              type="text"
              name="policyamount"
              id="policyamount"
              className="form-control"
              disabled
              placeholder="Enter Policy Amout"
            />
            <label className="form-label">Policy Limit</label>
            <input
              type="text"
              name="policylimit"
              id="policylimit"
              className="form-control"
              disabled
              placeholder="Enter Policy Limit"
            />
            <button type="submit" id="users" className="btn btn-warning btn-lg">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Addform;
