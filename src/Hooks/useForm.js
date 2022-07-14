import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // console.log(values);
  // console.dir(callback);
  // console.log(callback.name == 'editTaskSubmit');

  if(callback.name == 'editTaskSubmit') {
    console.log('values' , values);
  }

  useEffect(() => {
    if (callback['name'] == 'profileSubmit' && !isSubmitting) {
      // set the initial data here.
      getData();
    }
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  let userDetails = JSON.parse(localStorage.getItem('userDetails'));

  const email = `${'"' + userDetails?.email + '"'}`;

  function getData() {
    axios.get('https://todo-react-91a88-default-rtdb.firebaseio.com/users.json?orderBy="email"&equalTo=' + email)
      .then((res) => {
        let data = Object.entries(res.data);

        // User details
        let userDetails = data[0][1];
        setValues(values => ({
          ...values,
          name : userDetails['name'],
          image : userDetails['profile_picture']
        }));

      }).catch((error) => {
          
      })
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    if(event.target.name != 'startDate' && event.target.name != 'dueDate')  {
      event.persist();
    }

    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;