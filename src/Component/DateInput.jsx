import React from "react";

export default function DateInput({setDayInput, setMonthInput, setYearInput}) {
  return (
    <section className="flex flex-col">
      <p className="text-gray-500">Enter your birthday:</p>
      <div className="flex gap-6">
        <div className="flex flex-col">
          <p className="text-gray-500 uppercase font-bold text-sm">Day</p>
          <input
            onChange={(e) => setDayInput(e.target.value)}
            className="w-full min-w-0 border-[0.25px] border-gray-500"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-gray-500 uppercase font-bold text-sm">Month</p>
          <input
            onChange={(e) => setMonthInput(e.target.value)}
            className="w-full min-w-0 border-[0.25px] border-gray-500"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-gray-500 uppercase font-bold text-sm">Year</p>
          <input
            onChange={(e) => setYearInput(e.target.value)}
            className="w-full min-w-0 border-[0.25px] border-gray-500"
          />
        </div>
      </div>
    </section>
  );
}
