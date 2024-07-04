import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CourseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="courseName" source="courseName" />
        <NumberInput step={1} label="credits" source="credits" />
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="teacher" source="teacher" />
      </SimpleForm>
    </Create>
  );
};
