import { useState } from "react";

const Policytable = (props) => {
  const [getAmount, setCliamAmount] = useState([]);

  const claimAmount = (id) => {
    var amount = document.getElementById("claimamount").value;
    console.log(amount);
    let obj = { id: id, claimamount: amount, claimstatus: "claim" };
    props.claimAmount(obj);
  };
  const onInputChange = (e) => {
    setCliamAmount({ ...getAmount, [e.target.name]: e.target.value });
    console.log(getAmount);
  };

  const handalDelete = (id) => {
    props.deleteBtn(id);
  };

  return props.userpolicy.map((userpolicy, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{userpolicy.username}</td>
      <td>{userpolicy.policyname}</td>
      <td>{userpolicy.policyamount}</td>
      <td>{userpolicy.policylimit}</td>
      <td>
        <input
          type="text"
          id="claimamount"
          name="claimamount"
          onChange={(e) => onInputChange(e)}
        />
      </td>
      <td>
        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={() => claimAmount(userpolicy.id)}
        >
          Claim
        </button>
      </td>
      <td>
        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={() => handalDelete(userpolicy.id)}
        ></button>
        Delete
      </td>
    </tr>
  ));
};
export default Policytable;
