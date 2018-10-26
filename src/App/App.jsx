import React from 'react';

import jsonServerProvider from 'ra-data-json-server';

import { Admin, Resource } from 'react-admin';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import Dashboard from '../Dashobard/Dashboard';
import AuthProvider from '../Login/AuthProvider';
import UserList from '../User/Users';
import PostList from '../Post/Posts';
import PostEdit from '../Post/PostEdit';
import PostCreate from '../Post/PostCreate';


import './App.css';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} authProvider={AuthProvider} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
