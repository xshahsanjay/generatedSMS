import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StaffList } from "./staff/StaffList";
import { StaffCreate } from "./staff/StaffCreate";
import { StaffEdit } from "./staff/StaffEdit";
import { StaffShow } from "./staff/StaffShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { ApplicationList } from "./application/ApplicationList";
import { ApplicationCreate } from "./application/ApplicationCreate";
import { ApplicationEdit } from "./application/ApplicationEdit";
import { ApplicationShow } from "./application/ApplicationShow";
import { TimetableList } from "./timetable/TimetableList";
import { TimetableCreate } from "./timetable/TimetableCreate";
import { TimetableEdit } from "./timetable/TimetableEdit";
import { TimetableShow } from "./timetable/TimetableShow";
import { FeeList } from "./fee/FeeList";
import { FeeCreate } from "./fee/FeeCreate";
import { FeeEdit } from "./fee/FeeEdit";
import { FeeShow } from "./fee/FeeShow";
import { LibraryItemList } from "./libraryItem/LibraryItemList";
import { LibraryItemCreate } from "./libraryItem/LibraryItemCreate";
import { LibraryItemEdit } from "./libraryItem/LibraryItemEdit";
import { LibraryItemShow } from "./libraryItem/LibraryItemShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MultiVendorSchoolManagementSystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Staff"
          list={StaffList}
          edit={StaffEdit}
          create={StaffCreate}
          show={StaffShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="Application"
          list={ApplicationList}
          edit={ApplicationEdit}
          create={ApplicationCreate}
          show={ApplicationShow}
        />
        <Resource
          name="Timetable"
          list={TimetableList}
          edit={TimetableEdit}
          create={TimetableCreate}
          show={TimetableShow}
        />
        <Resource
          name="Fee"
          list={FeeList}
          edit={FeeEdit}
          create={FeeCreate}
          show={FeeShow}
        />
        <Resource
          name="LibraryItem"
          list={LibraryItemList}
          edit={LibraryItemEdit}
          create={LibraryItemCreate}
          show={LibraryItemShow}
        />
      </Admin>
    </div>
  );
};

export default App;
