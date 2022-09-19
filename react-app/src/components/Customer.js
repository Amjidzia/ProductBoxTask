import { FaTimes, FaEdit } from 'react-icons/fa'


import { useNavigate } from 'react-router-dom';
const Customer = ({ customer, onDelete }) => {
  const navigate = useNavigate();
  const gotoTask = (id) => {

    navigate(`/customer/${id}`, {
      state: { data: customer },
    });
  }
  return (
    <div >
      <table className='tblListing'>
        <tr>
          <td width={"150px"}>Customer Id</td>
          <td width={"125px"}>Name</td>
          <td width={"125px"}>Type Id</td>
          <td width={"125px"}>Description</td>
          <td width={"125px"}>Address</td>
          <td width={"125px"}>City</td>
          <td width={"125px"}>State</td>
          <td width={"125px"}>Zip</td>
          <td width={"160px"}>LastUpdated</td>
          <td width={"125px"}>Action</td>

        </tr>
        <tr>
          <td>
            {customer.Id}
          </td>
          <td>
            {customer.Name}
          </td>
          <td>
            {customer.CustomerTypeId}
          </td>
          <td>
            {customer.Description}
          </td>
          <td>
            {customer.Address}
          </td>
          <td>
            {customer.City}
          </td>
          <td>
            {customer.State}
          </td>
          <td>
            {customer.Zip}
          </td>
          <td>
            {customer.LastUpdated}
          </td>
          <td>
            <FaTimes
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => onDelete(customer.Id)}
            />
            <FaEdit
              style={{ color: 'green', cursor: 'pointer' }}
              onClick={() => gotoTask(customer.Id)}
            />
          </td>
        </tr>
      </table>
    </div >
  )
}

export default Customer



// onClick={gotoTask(customer.Id)}