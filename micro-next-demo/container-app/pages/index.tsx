import dynamic from "next/dynamic";

const MicroFrontend1 = dynamic(() => import("micro-app-1/exposed") as any, {
  ssr: false,
});

const MicroFrontend2 = dynamic(() => import("micro-app-2/HelloWorld") as any, {
  ssr: false,
});

function HomePage() {
  return (
    <div>
      <h1>Hello from Container App</h1>
      <div>
        <MicroFrontend1 />
        <MicroFrontend2 />
      </div>
    </div>
  );
}

export default HomePage;
