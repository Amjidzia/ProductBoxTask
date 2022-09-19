import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


const UpdateCustomer = ({ onUpdate }) => {
    const location = useLocation();
    const { data } = location.state ? location.state : '';
    const navigate = useNavigate()

    useEffect(() => {
        if (!data) {
            navigate('/')
        }
    }, [data]
    )
    console.log(data);
    const [customername, setCustomerName] = useState(data && data.Name)
    const [customertypeid, setCustomeTypeID] = useState(data && data.CustomerTypeId)
    const [description, setDescription] = useState(data && data.Description)
    const [address, setAddress] = useState(data && data.Address)
    const [city, setCity] = useState(data && data.City)
    const [state, setState] = useState(data && data.State)
    const [zip, setZip] = useState(data && data.Zip)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(customername === data.Name);
        if (customername === data.Name) {
            alert('Please update Customer before clicking update')
            return
        }

        if (description === data.Description) {
            alert('Please update description before clicking update')
            return
        }
        if (address === data.Address) {
            alert('Please update Address before clicking update')
            return
        }
        if (city === data.City) {
            alert('Please update City before clicking update')
            return
        }

        if (state === data.State) {
            alert('Please update State before clicking update')
            return
        }
        if (zip === data.Zip) {
            alert('Please update Zip before clicking update')
            return
        }

        onUpdate({
            Id: data.Id, Name: customername, CustomerTypeId: customertypeid, Description: description, Address: address, City: city,
            State: state, Zip: zip
        })

        setCustomerName('')
        setCustomeTypeID(0)
        setDescription('')
        setAddress('')
        setCity('')
        setState('')
        setZip('')
        navigate('/')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div>
            </div>
            <div className='form-control'>
                <label>Name</label>
                <input
                    type='text'
                    placeholder={data && data.Name}
                    onChange={(e) => setCustomerName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Customer Type</label>
                <input
                    type='number'
                    placeholder={data && data.CustomerTypeId}
                    onChange={(e) => setCustomeTypeID(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Description</label>
                <input
                    type='text'
                    placeholder={data && data.Description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Address</label>
                <input
                    type='text'
                    placeholder={data && data.Address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>City</label>
                <input
                    type='text'
                    placeholder={data && data.City}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>State</label>
                <input
                    type='text'
                    placeholder={data && data.State}
                    onChange={(e) => setState(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Zip</label>
                <input
                    type='text'
                    placeholder={data && data.Zip}
                    onChange={(e) => setZip(e.target.value)}
                />
            </div>


            <input type='submit' value='Update Customer' className='btn btn-block' />
        </form>
    )
}

export default UpdateCustomer
