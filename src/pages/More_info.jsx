import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaMapMarkerAlt, FaBuilding, FaGlobe, FaPhone, FaMap } from 'react-icons/fa';
import Loader from '../assets/loading'; // Import the Loader component
import '../index.css';

const More_info = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;

    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        if (isMounted) {
          setError("Oops! Something went wrong. Please try again.");
        }
      }
      
      // Keep the loader visible for at least 7 seconds
      setTimeout(() => {
        if (isMounted) {
          setLoading(false);
        }
      }, 2000);
    };

    fetchUser();

    return () => {
      isMounted = false; // Cleanup function to prevent memory leaks
    };
  }, [id]);

  if (loading) {
    return <Loader />; // Show animated loader for at least 7 seconds
  }

  if (error) {
    return <p className="error-message">{error}</p>; // Show error message if request fails
  }

  return (
    <div className='cont'>
      <div className='welcome1Crd' key={data.id}>
        <div className='pp'>
          <div className='imggg'>{data.name?.charAt(0) + (data.name.split(' ')[1]?.charAt(0) || '')}</div>
          <div className='user-info'>
            <b>Name:</b> {data.name} <br />
            <b>Email:</b> {data.email}
          </div>
        </div>
        <div className='address'>
          <FaMapMarkerAlt /> <b>Address:</b> {data.address?.street}, {data.address?.city}
        </div>
        <div className='company'>
          <FaBuilding /> <b>Company:</b> {data.company?.name} - {data.company?.catchPhrase}, {data.company?.bs}
        </div>
        <div className='website'>
          <FaGlobe /> <b>Website:</b> {data.website}
        </div>
        <div className='phone'>
          <FaPhone /> <b>Phone:</b> {data.phone}
        </div>
        <div className='geo'>
          <FaMap /> <b>Geo:</b> Lat: {data.address?.geo?.lat}, Lng: {data.address?.geo?.lng}
        </div>
      </div>
    </div>
  );
};

export default More_info;
