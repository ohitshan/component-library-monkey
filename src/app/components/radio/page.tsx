"use client";
import { Radio, Table } from "react-component-library-monkey";

const columns = [
  { title: "Property", dataIndex: "Property", key: "Property" },
  { title: "Description", dataIndex: "Description", key: "Description" },
  { title: "Type", dataIndex: "Type", key: "Type" },
];

const dataSource = [
  {
    Property: "options",
    Type: "{value:string; label:React.ReactNode; disabled?:boolean;}[]",
    Description: "Radio options",
  },
  {
    Property: "value",
    Type: "string",
    Description: "Selected value",
  },
  {
    Property: "radioType",
    Type: '"center" | "border"',
    Description: "Type of radio",
  },
  {
    Property: "radioColor",
    Type: "string",
    Description: "Color of radio",
  },
  {
    Property: "gap",
    Type: "number",
    Description: "gap between radio and label",
  },
];

export default function RadioPage() {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-[24px] font-bold mb-[24px]">Radio</h2>
      <Radio
        options={[
          { label: "mango", value: "mango" },
          { label: "banana", value: "banana" },
          { label: "apple", value: "apple", disabled: true },
        ]}
      />
      <h3 className="text-[20px] font-semibold my-[24px]">API</h3>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}
