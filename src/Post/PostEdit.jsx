import React from 'react';

import {
  Edit,
  SimpleForm,
  DisabledInput,
  SelectInput,
  ReferenceInput,
  TextInput,
  LongTextInput,
} from 'react-admin';

const PostTitle = ({ record }) => `Post: ${record ? record.title : ''}`;

const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />

      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Edit>
);

export default PostEdit;
