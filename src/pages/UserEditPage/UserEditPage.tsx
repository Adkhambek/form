import {
  FetchView,
  Breadcrumbs,
  One,
  FieldType,
  TypedField,
  usePreventLeave,
} from "react-declarative";

import fetchApi from "../../helpers/fetchApi";
import history from "../../helpers/history";

import IUser from "../../model/IUser";

interface IUserEditPageProps {
  id: string;
}

const fields: TypedField[] = [
  {
    type: FieldType.Line,
    title: "Profile",
  },
  {
    type: FieldType.Combo,
    name: "prefix",
    title: "Prefix",
    itemList() {
      return ["Mr.", "Mrs.", "Miss", "Ms.", "Dr."];
    },
  },
  {
    type: FieldType.Combo,
    name: "suffix",
    title: "Suffix",
    itemList() {
      return [
        "IV",
        "III",
        "II",
        "Sr.",
        "V",
        "PhD",
        "Sr.",
        "MD",
        "IV",
        "DDS",
        "DVM",
      ];
    },
  },
  {
    type: FieldType.Div,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
    },
    fields: [
      {
        type: FieldType.Text,
        name: "keyword",
        title: "Keyword",
        outlined: false,
        disabled: true,
      },
      {
        type: FieldType.Checkbox,
        fieldBottomMargin: "0",
        name: "subscribed",
        title: "Subscribed",
      },
    ],
  },
  {
    type: FieldType.Line,
    title: "General Info",
  },
  {
    type: FieldType.Text,
    name: "firstName",
    title: "Name",
  },
  {
    type: FieldType.Text,
    name: "lastName",
    title: "Surname",
  },
  {
    type: FieldType.Text,
    inputType: "number",
    name: "age",
    title: "Age",
  },
  {
    type: FieldType.Text,
    name: "email",
    title: "Email",
    disabled: true,
  },
  {
    type: FieldType.Text,
    name: "phonenumber",
    title: "Phone number",
  },
  {
    type: FieldType.Line,
    title: "Job",
  },
  {
    type: FieldType.Text,
    name: "jobTitle",
    title: "Job title",
  },
  {
    type: FieldType.Text,
    name: "jobArea",
    title: "Job area",
  },
  {
    type: FieldType.Line,
    title: "Home address",
  },
  {
    type: FieldType.Text,
    name: "country",
    title: "Country",
  },
  {
    type: FieldType.Text,
    name: "city",
    title: "City",
  },
  {
    type: FieldType.Text,
    name: "state",
    title: "State",
  },
  {
    type: FieldType.Text,
    name: "address",
    title: "Address",
  },
];

export const UserEditPage = ({ id }: IUserEditPageProps) => {
  const fetchState = () => [fetchApi<IUser>(`/users/${id}`)] as const;

  const Content = (props: any) => {
    const { data, oneProps, beginSave } = usePreventLeave({
      history,
      onSave: async () => {
        // alert(JSON.stringify(data, null, 2));
        await fetchApi<IUser>(`/users/${id}`, {
          method: "PATCH",
          body: JSON.stringify(data),
        });
        return true;
      },
    });

    return (
      <>
        <Breadcrumbs
          withSave
          title="Todo list"
          subtitle="Profile"
          onSave={beginSave}
          onBack={() => history.push("/users")}
          saveDisabled={!data}
        />
        <One<IUser> handler={() => props.user} fields={fields} {...oneProps} />
      </>
    );
  };

  return (
    <FetchView state={fetchState}>
      {(user) => <Content user={user} />}
    </FetchView>
  );
};

export default UserEditPage;
