import { useEffect, useState } from "react";

export default function MyComPonent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED");
    };
  }, []);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900">
      <div
        className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md"
        style={{ height: `${height - 200}px` }}
      >
        <h1 className="mb-4 text-3xl font-semibold">Window Size</h1>
        <div className="flex flex-col items-center">
          <p className="mb-2 text-lg">Width: {width}px</p>
          <p className="mb-2 text-lg">Height: {height}px</p>
        </div>
      </div>
    </div>
  );
}
