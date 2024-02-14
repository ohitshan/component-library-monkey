"use client";
import { Button, Input, Select, Table } from "react-component-library-monkey";
import styled from "styled-components";

export default function Components() {
  return (
    <div className="flex flex-col">
      <h2 className="text-[24px] font-bold mb-[24px]">Components Overview</h2>
      <div className="flex flex-wrap gap-[12px]">
        <Card className="w-[calc(50%-6px)]">
          <CardTitle>Button</CardTitle>
          <CardContent>
            <FlexDiv>
              <Button size={24}>24</Button>
              <Button size={32}>32</Button>
            </FlexDiv>
            <Button block={false}>Button</Button>
            <Button color="red">Block</Button>
            <Button color="yellow">Block</Button>
          </CardContent>
        </Card>
        <Card className="w-[calc(50%-6px)]">
          <CardTitle>Table</CardTitle>
          <CardContent>
            <Table
              columns={[
                { dataIndex: "name", key: "name", title: "name" },
                { dataIndex: "color", key: "color", title: "color" },
              ]}
              dataSource={[
                { name: "mango", color: "green" },
                { name: "mango", color: "yellow" },
              ]}
            />
          </CardContent>
        </Card>
        <Card className="w-[calc(50%-6px)]">
          <CardTitle>Input</CardTitle>
          <CardContent>
            <Input />
            <Input
              prefix={
                <div
                  style={{
                    color: "black",
                    paddingRight: "8px",
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  prefix
                </div>
              }
            />
            <Input
              addonAfter={
                <div
                  style={{
                    background: "gray",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "0px 4px 4px 0px",
                    padding: "4px",
                    fontSize: "8px",
                  }}
                >
                  addonAfter
                </div>
              }
            />
          </CardContent>
        </Card>
        <Card className="w-[calc(50%-6px)]">
          <CardTitle>Select</CardTitle>
          <CardContent>
            <Select
              options={[
                { label: "mango", value: "mango" },
                { label: "banana", value: "banana" },
              ]}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 8px;
`;
const CardTitle = styled.div`
  border-bottom: 1px solid gray;
  padding: 6px 12px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 12px;
  padding: 12px;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
