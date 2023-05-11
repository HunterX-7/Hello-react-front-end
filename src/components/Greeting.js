import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greetingSlice';

const Greeting = () => {
  const message = useSelector((state) => state.greet.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Random Greeting Generator: </h1>
      <h2 style={{ textAlign: 'center' }}>
        {message}
        {' '}
      </h2>
    </>
  );
};

export default Greeting;
