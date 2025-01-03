import { useEffect, useState } from "react";

export default function MyComponent() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zero if necessary
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${meridiem}`;
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen text-2xl bg-gray-300">
      <div className="p-4 bg-white rounded-md shadow-md">{formatTime()}</div>
    </div>
  );
}
