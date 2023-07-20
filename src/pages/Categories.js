import React from 'react';
import { useSelector } from 'react-redux';

const Categories = () => {
  const categoriesStatus = useSelector((state) => state.category.status);

  const style = { marginLeft: '40px' };

  return <h1 style={style}>{categoriesStatus}</h1>;
};

export default Categories;
