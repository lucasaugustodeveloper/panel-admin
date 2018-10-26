import React from 'react';

import './index.scss';

import {
  List,
  Responsive,
  SimpleList,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Filter,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const PostFilter = props => (
  <Filter {...props}>
    <TextInput label="search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

const PostList = props => (
  <List {...props} filters={<PostFilter />}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.title}
          secondaryText={record => `${record.views} views`}
          tertiaryText={record =>
            new Date(record.published_at).toLocaleDateString()
          }
        />
      }
      medium={
        <Datagrid rowClick="edit">
          <ReferenceField source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <TextField source="body" />
          <EditButton />
        </Datagrid>
      }
    />
  </List>
);


export default PostList;
