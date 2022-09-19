import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Customers from './components/Customers'
import AddCustomer from './components/AddCustomer'
import About from './components/About'
import UpdateCustomer from './components/UpdateCustomer'

const App = () => {
  const [showAddCustomer, setShowAddCustomer] = useState(false)
  const [customers, setCustomers] = useState([])
  const getCustomers = async () => {
    const customersFromServer = await fetchCustomers()
    setCustomers(customersFromServer)
  }
  useEffect(() => {
    getCustomers()
  }, [])

  // Fetch Customer
  const fetchCustomers = async () => {
    const res = await fetch('http://localhost:5000/Api/Customer')
    const data = await res.json()

    return data
  }

  // Fetch Customer
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/customers/${id}`)
    const data = await res.json()

    return data
  }

  // Add Customer
  const addCustomer = async (customer) => {
    const res = await fetch('http://localhost:5000/Api/Customer', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(customer),
    })
    const data = await res.json()
    // setCustomers([...customers, data])
    if (data === "Added Successfully") {
      getCustomers();
    }
  }
  //Update Customer
  const updateCustomer = async (customer) => {
    console.log(customer);
    const res = await fetch('http://localhost:5000/Api/Customer', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(customer),
    })
    const data = await res.json()
    console.log(data);
    // setCustomers([...customers, data])
    if (data === "Updated Successfully") {
      getCustomers();
    }
  }

  // Delete Customer
  const deleteCustomer = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/Api/Customer/${id}`, {
        method: 'DELETE',
      })
      //We should control the response status to decide if we will change the state or not.
      //setCustomers(customers.filter((customer) => customer.id !== id))
      const data = await res.json()
      // setCustomers([...customers, data])
      if (data === "Deleted Successfully") {
        getCustomers();
      }
    }
    catch (error) {
      alert('Error Deleting This Customer');
    }
  }



  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddCustomer(!showAddCustomer)}
          showAdd={showAddCustomer}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddCustomer && <AddCustomer onAdd={addCustomer} />}
                {customers.length > 0 ? (
                  <Customers
                    customers={customers}
                    onDelete={deleteCustomer}
                  />
                ) : (
                  'No Customers added yet'
                )}
              </>
            }
          />
          <Route
            path='/customer/:id'
            element={
              <UpdateCustomer onUpdate={updateCustomer} />
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router >
  )
}

export default App
