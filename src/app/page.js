import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-red-600 flex-1">Map</div>
      <div className="bg-green-600 flex-1">Start</div>
    </main>
  );
}
