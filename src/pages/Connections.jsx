import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';
import UserCard from './UserCard';

const Connections = () => {

  const dispatch = useDispatch()

  const connections = useSelector((store) => store.connection);
  console.log(connections, "connections")



  const fetchConnections = async () => {

    try {

      const res = await axios.get(BASE_URL + '/user/connections', { withCredentials: true });
      console.log('Connections data:', res.data.data);
      dispatch(addConnections(res?.data?.data));

    } catch (error) {
      console.error(error?.data?.response);
    }


  }



  const acceptCeonnection = async (connectionId) => {
    try {

      const res = await axios.post(BASE_URL + `request/review/${status}/${connectionId}`, {
        status: status,
        connectionId: connectionId
      }, { withCredentials: true }

      );
      console.log(res.data, "accept connection response")

    } catch (error) {
      console.error(error?.data?.response);
    }
  }

  useEffect(() => {
    fetchConnections()

  }, [])

  if (!connections || connections.length === 0) {
    return <h1 className='text-3xl font-bold my-6'>No Connections Found...</h1>
  }

  return (
    <div className='flex flex-col items-center w-full connection-card'>
      <h1 className='text-3xl font-bold my-6'>Connections</h1>
      <div className="mb-4 flex flex-wrap items-center ">
        {connections &&
          connections.map((connection) => (

            <div key={connection._id} className='mx-4'>
              <UserCard user={connection} acceptCeonnection={acceptCeonnection} />
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default Connections