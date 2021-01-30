import jsonServerProvider from 'ra-data-json-server';
import React from 'react';
import { Admin, ListGuesser, Resource } from 'react-admin';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default App;
