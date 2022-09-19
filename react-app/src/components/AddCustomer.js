import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [customername, setCustomerName] = useState('')
  const [customertypeid, setCustomeTypeID] = useState(0)
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!customername) {
      alert('Please add a Customer')
      return
    }
    if (customertypeid === 0) {
      alert('Please select a customer type ')
      return
    }
    if (!description) {
      alert('Please add a description')
      return
    }
    if (!address) {
      alert('Please add an address')
      return
    }
    if (!city) {
      alert('Please add a city')
      return
    }

    if (!state) {
      alert('Please add a state')
      return
    }
    if (!zip) {
      alert('Please add a zip')
      return
    }

    onAdd({
      Name: customername, CustomerTypeId: customertypeid, Description: description, Address: address, City: city,
      State: state, Zip: zip
    })

    setCustomerName('')
    setCustomeTypeID(0)
    setDescription('')
    setAddress('')
    setCity('')
    setState('')
    setZip('')
    
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>

      <div className='form-control'>
        <label>Name</label>
        <input
          type='text'
          placeholder='Add Customer'
          value={customername}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Customer Type</label>
        <input
          type='number'
          placeholder='Customer Type'
          value={customertypeid}
          onChange={(e) => setCustomeTypeID(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Description</label>
        <input
          type='text'
          placeholder='Add Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Address</label>
        <input
          type='text'
          placeholder='Add Address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>City</label>
        <input
          type='text'
          placeholder='Add City'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>State</label>
        <input
          type='text'
          placeholder='Add State'
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Zip</label>
        <input
          type='text'
          placeholder='Add Zip'
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
      </div>


      <input type='submit' value='Add Customer' className='btn btn-block' />
    </form>
  )
}

export default AddTask
