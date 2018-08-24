import React from 'react';

import List from './List';
import Form from './Form';

const Articles = () => (
  <div className="row mt-4">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="col-d-4 offset-md-1">
      <h2>Add a new article</h2>
      <Form />
    </div>
  </div>
);

export default Articles;