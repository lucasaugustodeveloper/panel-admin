import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
} from 'react-admin';
import MyUrlField from '../MyUrlField/MyUrlField';

const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);

export default UserList;
