import Customer from './Customer'

const Customers = ({ customers, onDelete }) => {
  return (
    <>
      {customers.map((customer, index) => (
        <Customer key={index} customer={customer} onDelete={onDelete} />
      ))}
    </>
  )
}

export default Customers
