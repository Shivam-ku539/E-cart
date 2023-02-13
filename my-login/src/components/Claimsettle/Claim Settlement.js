import React, { useEffect, useState } from "react";
import axios from "axios";
import Approvedpolicies from "./Approvedpolicies";
import Claimedpolicies from "./Claimedpolicies";
import Rejectedpolicies from "./Rejectedpolicies";

const ClaimSettlement = () => {
  const [claimed, setClaimed] = useState([]);
  const loadPolicies = async () => {
    let result = await axios.get("http://localhost:3002/UserPolicy");
    console.log(result.data);
    setClaimed(result.data);
  };
  useEffect(() => {
    loadPolicies();
  }, []);
  //console.log(claimed);
  const displayData = claimed.filter(
    (result) => result.claimstatus === "claim"
  );
  console.log(displayData);

  const [approved, setApproved] = useState([]);

  const approvedpolicy = async (obj) => {
    console.log(obj);
    let result1 = await axios.patch(
      "http://localhost:3002/UserPolicy/" + obj.id,
      { status: obj.status }
    );
    console.log(result1.data);
    setApproved(result1.data);
    // setClaimed(result1.data);
    loadPolicies();
  };
  useEffect(() => {
    loadPolicies();
  }, []);
  // console.log(approved)
  const displayData1 = claimed.filter(
    (result1) => result1.status === "approved"
  );
  console.log(displayData1);

  const [rejected, setRejected] = useState([]);

  const rejectedpolicy = async (obj) => {
    let result3 = await axios.patch(
      "http://localhost:3002/UserPolicy/" + obj.id,
      { status: obj.status }
    );
    console.log(result3);
    setRejected(result3.data);
    // setClaimed(result3.data);
    loadPolicies();
  };
  useEffect(() => {
    loadPolicies();
  }, []);

  const displayData3 = claimed.filter(
    (result3) => result3.status === "rejected"
  );
  console.log(displayData3);

  return (
    <>
      <Claimedpolicies
        claimed={displayData}
        approvedpolicy={(obj) => approvedpolicy(obj)}
        rejectedpolicy={(obj) => rejectedpolicy(obj)}
      />
      <hr />
      <br />

      <Approvedpolicies approved={displayData1} />
      <hr />
      <br />

      <Rejectedpolicies rejected={displayData3} />
      <hr />
      <br />
    </>
  );
};
export default ClaimSettlement;
