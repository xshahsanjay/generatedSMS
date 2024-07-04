import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CourseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="courseName" source="courseName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="credits" source="credits" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="schedule" source="schedule" />
        <TextField label="teacher" source="teacher" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
