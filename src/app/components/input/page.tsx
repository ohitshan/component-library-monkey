"use client";
import { Button, Input, Table } from "react-component-library-monkey";

const columns = [
  { title: "Property", dataIndex: "Property", key: "Property" },
  { title: "Description", dataIndex: "Description", key: "Description" },
  { title: "Type", dataIndex: "Type", key: "Type" },
];

const dataSource = [
  {
    Property: "prefix",
    Type: "ReactNode",
    Description: "The prefix for the Input",
  },
  {
    Property: "suffix",
    Type: "ReactNode",
    Description: "The suffix for the Input",
  },
  {
    Property: "addonBefore",
    Type: "ReactNode",
    Description:
      "The label text displayed after (on the left side of) the input field. (span)",
  },
  {
    Property: "addonAfter",
    Type: "ReactNode",
    Description:
      "The label text displayed after (on the right side of) the input field. (span)",
  },
  {
    Property: "error",
    Type: "boolean",
    Description: "error status",
  },
];

export default function InputPage() {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-[24px] font-bold mb-[24px]">Input</h2>
      <Input />
      <h3 className="text-[20px] font-semibold my-[24px]">API</h3>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}
