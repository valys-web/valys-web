import React from 'react';

import PageHeader from 'react-bootstrap/lib/PageHeader';
import Carousel from 'components/Carousel';

import ProductList from 'components/ProductList';
import data from './data.json';

const Pizzas = () => {
  return (
    <div>
      <Carousel />
      <div id="postres" className="container">
        <PageHeader>
          {' '}<div className="menu-header">
            Postres<br />
          </div>
        </PageHeader>
        <ProductList products={data.pizzas} containsImages={true}  />
      </div>
    </div>
  );
};

export default Pizzas;
