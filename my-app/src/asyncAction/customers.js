import { addManyCustomerAction } from "../store/customerReducer";

export const fetchCustomers = () => {
    const link = 'https://jsonplaceholder.typicode.com/users';
    return function(dispatch) {
        fetch(link)
            .then(response => response.json())
            .then(data => dispatch(addManyCustomerAction(data)))
    }
}
