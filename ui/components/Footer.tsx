import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Copy Traders</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            View All
          </button>
        </div>
      </div>
    </footer>
  );
}
