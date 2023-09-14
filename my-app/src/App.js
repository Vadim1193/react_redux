import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCustomerAction, clear, removeCustomerAction } from './store/customerReducer';
import { addedCashAction, getCashAction } from './store/cashReduser'; 
import { fetchCustomers } from './asyncAction/customers';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customer.customers);

  const addCash = (cash) => dispatch(addedCashAction(cash));
  const getCash = (cash) => dispatch(getCashAction(cash));

  const addCustomer = (name) => {
    if(name) {
      const customer = {
        name,
        id: Date.now(),
      }
    dispatch(addCustomerAction(customer));
    }
  }

  const removeClient = () => dispatch(clear());
  const removeCustomer = (customer) => dispatch(removeCustomerAction(customer.id));
  
  return (
    <div className="my-bank">
      <div className="cash-count">Bank: {cash}</div>
      <div className="buttons">
        <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
        <button onClick={() => addCustomer(prompt())}>Add client</button>
        <button onClick={() => removeClient()}>Remove client</button>
        <button onClick={() => dispatch(fetchCustomers())}>Get client data</button>
      </div>
      <div>
        {customers.length > 0 ?
        <div>
          {customers.map((customer, id) => (
            <div 
              onClick={() => removeCustomer(customer)} 
              key={id} 
              className='customer-card'
              >
              {customer.name}
            </div>
          ))}
        </div>
        :
        <div>
          <h2>No clients!</h2>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
