import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-[12px]">
      <Image
        src="/monkey.jpeg"
        alt="monkey"
        width={500}
        height={500}
        priority
      />
      <div className="flex flex-col items-end">
        <h1 className="text-[32px] font-bold ">REACT-COMPONENT-Library</h1>
        <h3 className="text-[yellow] text-[18px] font-semibold">
          by Monkeybin
        </h3>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2">
        <Link
          href="/installation"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Installation{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[60ch] text-sm`}>
            Getting start with monkeybin
          </p>
        </Link>
        <Link
          href="/components"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Components{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[60ch] text-sm`}>
            Find information about monkeybin components <br />
            features and API.
          </p>
        </Link>
      </div>
    </main>
  );
}
