const Approvedpolicies = (props) => {
  return (
    <>
      <h4>Approved Policies</h4>
      <table class="table">
        <tr>
          <th>PID</th>
          <th>User Name</th>
          <th>Policy Name</th>
        </tr>

        {props.approved.map((approved, index) => (
          <tr key={index}>
            <th>{index + 1}</th>
            <td>{approved.username}</td>
            <td>{approved.policyname} </td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default Approvedpolicies;
