import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/nav/Navbar';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user }));
  return <Header user={user} />;
};

export default HeaderContainer;
