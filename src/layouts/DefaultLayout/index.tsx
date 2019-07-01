import React from 'react';
import {Link} from 'react-router-dom';

const DefaultLayout: React.FC = (props) => {
  return (
    <>
      <div>
        <Link to={'/'}>Spinner</Link>
        <Link to={'/list'}>List</Link>
      </div>
      <div>{props.children}</div>
    </>);
};

export default DefaultLayout;
