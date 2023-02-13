const User = (props) => {
  const handalDelete = (id) => {
    props.deleteUser(id);
  };
  const handalEdit = (obj) => {
    console.log(obj);
    props.editUser(obj);
  };
  return (
    <>
      {props.user.map((users, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{users.name}</td>
          <td>
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={() => handalEdit(users)}
            >
              Edit
            </button>
            <button
              className="btn btn-outline-primary mx-3"
              type="button"
              onClick={() => handalDelete(users.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};
export default User;
