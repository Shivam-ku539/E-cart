const PolicyList = (props) => {
  const handalDelete = (id) => {
    props.deleteUser(id);
  };
  const handalEdit = (obj) => {
    console.log(obj);
    props.editUser(obj);
  };
  return (
    <>
      {props.policylist.map((Policylist, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{Policylist.policyname} </td>
          <td>{Policylist.policyamount}</td>
          <td>{Policylist.policylimit}</td>
          <td>
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={() => handalEdit(Policylist)}
            >
              Edit
            </button>

            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={() => handalDelete(Policylist.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};
export default PolicyList;
