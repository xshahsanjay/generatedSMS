import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="courseName" source="courseName" />
        <NumberInput step={1} label="credits" source="credits" />
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="teacher" source="teacher" />
      </SimpleForm>
    </Edit>
  );
};
