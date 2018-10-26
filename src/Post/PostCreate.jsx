import React from 'react';

import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  LongTextInput,
} from 'react-admin';

const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Create>
);

export default PostCreate;
