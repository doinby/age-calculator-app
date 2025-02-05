import React from "react";

export default function DateInput({setDayInput, setMonthInput, setYearInput}) {
  return (
    <section className="">
      <p className="text-gray-500">Enter your birthday:</p>
      <div className="flex gap-6">
        <div className="flex flex-col">
          <p className="text-gray-500 uppercase font-bold text-sm">Day</p>
          <input
            onChange={(e) => setDayInput(e.target.value)}
            placeholder='01'
            className="w-full min-w-0 px-2 py-2.5 border-[0.25px] rounded border-gray-300 text-xl font-bold"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-gray-500 uppercase font-bold text-sm">Month</p>
          <input
            onChange={(e) => setMonthInput(e.target.value)}
            placeholder='10'
            className="w-full min-w-0 px-2 py-2.5 border-[0.25px] rounded border-gray-300 text-xl font-bold"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-gray-500 uppercase font-bold text-sm">Year</p>
          <input
            onChange={(e) => setYearInput(e.target.value)}
            placeholder='1984'
            className="w-full min-w-0 px-2 py-2.5 border-[0.25px] rounded border-gray-300 text-xl font-bold"
          />
        </div>
      </div>
    </section>
  );
}
