"use client";
import { Button } from "react-component-library-monkey";

export default function Components() {
  return (
    <div className="flex flex-col">
      <h2 className="text-[24px] font-bold mb-[24px]">Components Overview</h2>
      <div className="flex flex-wrap gap-[12px]">
        <div className="w-[calc(50%-6px)]">
          <Button></Button>
        </div>
        <div className="w-[calc(50%-6px)]">
          <Button></Button>
        </div>
        <div className="w-[calc(50%-6px)]">
          <Button></Button>
        </div>
      </div>
    </div>
  );
}
