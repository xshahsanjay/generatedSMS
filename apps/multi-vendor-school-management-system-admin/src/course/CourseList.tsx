import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CourseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Courses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="courseName" source="courseName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="credits" source="credits" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="schedule" source="schedule" />
        <TextField label="teacher" source="teacher" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
