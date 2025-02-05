import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../index.css';
import { FaMapMarkerAlt, FaBuilding, FaGlobe, FaPhone, FaMap } from 'react-icons/fa';

const WelcomeTwo = () => {
  const [data, setData] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='cont'>
      {data.map((user) => (
        <div key={user.id} className='welcome1Crd'>
          <div className='pp'>
          <div className='imggg'>{user.name.charAt(0)+user.name.split(' ')[1].charAt(0)}</div>
          <div></div>
            <div className='user-info'>
              <b>Name:</b> {user.name} <br />
              <b>Email:</b> {user.email}
            </div>
          </div>
          <div className='details'>
            <div className='address'><FaMapMarkerAlt /> <b>Address:</b> {user.address.street}, {user.address.city}</div>
            <div className='company'><FaBuilding /> <b>Company:</b> {user.company.name} - {user.company.catchPhrase}, {user.company.bs}</div>
            <div className='website'><FaGlobe /> <b>Website:</b> {user.website}</div>
            <div className='phone'><FaPhone /> <b>Phone:</b> {user.phone}</div>
            <div className='geo'><FaMap /> <b>Geo:</b> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</div>
          </div>
          <div className='buttonssssa'>
            <Link to='/welcome/one'>
              <button className='buttonssa'><b>More</b></button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WelcomeTwo;
