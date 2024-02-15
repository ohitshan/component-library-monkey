"use client";
import { useState } from "react";
import { Checkbox, Table } from "react-component-library-monkey";

const columns = [
  { title: "Property", dataIndex: "Property", key: "Property" },
  { title: "Description", dataIndex: "Description", key: "Description" },
  { title: "Type", dataIndex: "Type", key: "Type" },
];

const dataSource = [
  {
    Property: "checked",
    Type: "boolean",
    Description: "whether the checkbox is selected",
  },
  {
    Property: "onChange",
    Type: "(checked: boolean) => void",
    Description:
      "The callback function that is triggered when the state changes",
  },
  {
    Property: "unCheckedIcon",
    Type: "React.ReactNode",
    Description: "Custom icon when checked is false",
  },
  {
    Property: "checkedIcon",
    Type: "React.ReactNode",
    Description: "Custom icon when checked is true",
  },
  {
    Property: "label",
    Type: "React.ReactNode",
    Description: "label of checkbox",
  },
  {
    Property: "gap",
    Type: "number",
    Description: "gap between icon and label",
  },
];

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-[24px] font-bold mb-[24px]">Checkbox</h2>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e)}
        label={"checkbox"}
      />
      <h3 className="text-[20px] font-semibold my-[24px]">API</h3>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}
