const Claimedpolicies=(props)=>{

    const approvedpolicy = (id) => {
        let obj = {id : id,status : 'approved'};
        props.approvedpolicy(obj);
        
    }

    const rejectedpolicy=(id)=>{
        let obj={id:id,status:'rejected'};
        props.rejectedpolicy(obj);
    }

    
    return (
        <>
         <h4>Claimed Policies</h4>
        <table class="table">
  
    <tr>
      <th>PID</th>
      <th>User Name</th>
      <th>Policy Name</th>
      <th>Amount</th>
      <th>Limit</th>
      <th>Req.Amount</th>
      <th>Options</th>
    </tr>
  
  
  {props.claimed.map((claimed,index)=>(
            <tr key={index} >
                <th>{index+1}</th>
                <td>{claimed.username}</td>
                <td>{claimed.policyname } </td>
                <td>{claimed.policyamount}</td>
                <td>{claimed.policylimit}</td>
                <td>{claimed.claimamount}</td>
                <td>
                    <button className="btn btn-outline-primary" type="button" onClick={() => approvedpolicy(claimed.id)} >Approve</button>

                    <button className="btn btn-outline-primary" type="button" onClick={() => rejectedpolicy(claimed.id)} >Reject</button>
                </td>

              </tr>
        ))}       
   
  
</table>
        </>
    )
}
export default Claimedpolicies;