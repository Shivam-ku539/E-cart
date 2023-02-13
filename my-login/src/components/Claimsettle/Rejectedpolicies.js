const Rejectedpolicies = (props) => {
  return (
    <>
      <h4>Rejected Policies</h4>
      <table class="table">
        <tr>
          <th>PID</th>
          <th>User Name</th>
          <th>Policy Name</th>
        </tr>
        {props.rejected.map((rejected, index) => (
          <tr key={index}>
            <th>{index + 1}</th>
            <td>{rejected.username}</td>
            <td>{rejected.policyname} </td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default Rejectedpolicies;
