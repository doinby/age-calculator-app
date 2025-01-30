import React from "react";
import { useState } from "react";

export default function App() {
  const [dayInput, setDayInput] = useState(0);
  const [monthInput, setMonthInput] = useState(0);
  const [yearInput, setYearInput] = useState(0);

  return (
    <main className='flex flex-col items-center gap-12'>
      <section className='flex gap-6'>
        <div className='flex flex-col'>
          <p className='text-gray-500 uppercase font-bold text-sm'>Day</p>
          <input onChange={(e) => setDayInput(e.target.value)} className='w-full min-w-0 border-[0.25px] border-gray-500' />
        </div>
        <div className='flex flex-col'>
          <p className='text-gray-500 uppercase font-bold text-sm'>Month</p>
          <input onChange={(e) => setMonthInput(e.target.value)} className='w-full min-w-0 border-[0.25px] border-gray-500' />
        </div>
        <div className='flex flex-col'>
          <p className='text-gray-500 uppercase font-bold text-sm'>Year</p>
          <input onChange={(e) => setYearInput(e.target.value)} className='w-full min-w-0 border-[0.25px] border-gray-500' />
        </div>
      </section>
      <button className='border-[0.25px] border-gray-500'>👇</button>
      <section className='w-full px-12 flex flex-col items-start text-4xl font-bold'>
        <p>39 years</p>
        <p>3 months</p>
        <p>26 days</p>
      </section>
    </main>
  )
}