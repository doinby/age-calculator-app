import React from "react";

export default function DateOutput({dayInput, monthInput, yearInput}) {
  let dayOutput = 0;
  let monthOutput = 0;
  let yearOutput = 0;

  return (
    <>
      <button className="border-[0.25px] border-gray-500">👇</button>
      <section className="w-full px-12 flex flex-col items-start text-4xl font-bold">
        <p className='italic'><span>{yearInput}</span>years</p>
        <p className='italic'><span>{monthInput}</span>months</p>
        <p className='italic'><span>{dayInput}</span>days</p>
      </section>
    </>
  );
}
