"use client";
import { Select, Table } from "react-component-library-monkey";

const columns = [
  { title: "Property", dataIndex: "Property", key: "Property" },
  { title: "Description", dataIndex: "Description", key: "Description" },
  { title: "Type", dataIndex: "Type", key: "Type" },
];

const dataSource = [
  {
    Property: "listHeignt",
    Type: "number",
    Description: "The height for option list",
  },
  {
    Property: "optionHeight",
    Type: "number",
    Description: "The height for option",
  },
  {
    Property: "options",
    Type: "{value:string; label:string;}[]",
    Description: "Select options",
  },
  {
    Property: "onChange",
    Type: "(value:string)=>void",
    Description: "Called when select an option or input value change",
  },
  {
    Property: "value",
    Type: "string",
    Description: "Current selected option",
  },
];

export default function SelectPage() {
  return (
    <div className="flex flex-col items-start select">
      <h2 className="text-[24px] font-bold mb-[24px]">Select</h2>
      <Select
        options={[
          { label: "망고", value: "mango" },
          { label: "바나나", value: "banana" },
        ]}
      />
      <h3 className="text-[20px] font-semibold my-[24px]">API</h3>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}
