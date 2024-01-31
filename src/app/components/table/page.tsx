"use client";
import { Button, Table } from "react-component-library-monkey";

const columns = [
  { title: "Property", dataIndex: "Property", key: "Property" },
  { title: "Description", dataIndex: "Description", key: "Description" },
  { title: "Type", dataIndex: "Type", key: "Type" },
];

const dataSource = [
  {
    Property: "dataSource",
    Type: "object[]",
    Description:
      "Option to fit button width to its parent widthData record array to be displayed",
  },
  {
    Property: "columns",
    Type: "{ title: React.ReactNode;\n dataIndex: string;\n key: string; }[]",
    Description: "Columns of table",
  },
];

export default function TablePage() {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-[24px] font-bold mb-[24px]">Table</h2>
      <Table
        columns={[
          { title: "Name", dataIndex: "Name", key: "Name" },
          { title: "Age", dataIndex: "Age", key: "Age" },
        ]}
        dataSource={[
          { Name: "louis", Age: "20" },
          { Name: "mango", Age: "30" },
        ]}
      />
      <h3 className="text-[20px] font-semibold my-[24px]">API</h3>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
}
