"use client";
import { useEffect, useState } from "react";

export default function Installation() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  }, [isCopied]);

  const handleClickCopy = async () => {
    const text = document.querySelector("code")?.textContent;
    if (!isCopied && text) {
      try {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
      } catch {}
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center  p-24 gap-[24px]">
      <h2 className="text-[24px] font-bold">Installation</h2>
      <p className="text-center text-[13px]">
        <span className="text-yellow-400 text-[14px]">
          react-component-library-monkey
        </span>{" "}
        use styled-components <br />
        to use it please install styled-components
      </p>
      <div className="flex gap-[24px] border-[1px] rounded-[6px] border-[#2E2E2E] p-[20px] text-[13px]">
        <pre>
          <code className="code">
            <span>yarn </span>
            <span className="text-[#005D00]">
              add react-component-library-monkey
            </span>
          </code>
        </pre>
        <span className="hover:cursor-pointer" onClick={handleClickCopy}>
          {isCopied ? "copied" : "copy"}
        </span>
      </div>
      <div className="flex flex-col gap-[24px]">
        <h4 className="text-center">peer components</h4>
        <div className="flex gap-[24px] border-[1px] rounded-[6px] border-[#2E2E2E] p-[20px] text-[13px]">
          <pre>
            <code className="code flex flex-col">
              <span>
                <span className="text-[#3DB7CC]">"peerDependencies"</span>:{" "}
                <span>{"{"}</span>
              </span>
              <span>
                {" "}
                <span className="text-[#3DB7CC]">"react"</span>:{" "}
                <span className="text-[#F29661]">"^18.2.0"</span>,
              </span>
              <span>
                {" "}
                <span className="text-[#3DB7CC]">"react-dom"</span>:{" "}
                <span className="text-[#F29661]">"^18.2.0"</span>,
              </span>
              <span>
                {" "}
                <span className="text-[#3DB7CC]">
                  "styled-components"
                </span>: <span className="text-[#F29661]">"^6.1.8"</span>,
              </span>
              <span>{`},`}</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
