"use client";
import { Button, Table } from "react-component-library-monkey";

const columns = [
  { title: "Property", dataIndex: "Property", key: "Property" },
  { title: "Description", dataIndex: "Description", key: "Description" },
  { title: "Type", dataIndex: "Type", key: "Type" },
];

const dataSource = [
  {
    Property: "block",
    Type: "boolean",
    Description: "Option to fit button width to its parent width",
  },
  {
    Property: "disabled",
    Type: "boolean",
    Description: "Disabled state of button",
  },
  {
    Property: "color",
    Type: "red | blue | yellow",
    Description: "color of button",
  },
];

export default function ButtonPage() {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-[24px] font-bold mb-[24px]">Button</h2>
      <Button $block={false}>123</Button>
      <h3 className="text-[20px] font-semibold my-[24px]">API</h3>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}
