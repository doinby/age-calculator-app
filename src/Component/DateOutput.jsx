import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import arrowIcon from '../assets/images/icon-arrow.svg';

export default function DateOutput({ dayInput, monthInput, yearInput }) {
  const url =
    'https://timeapi.io/api/time/current/zone?timeZone=Europe%2FAmsterdam';

  let dayOutput = 0;
  let monthOutput = 0;
  let yearOutput = 0;

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetch(url, { method: 'GET' }).then((res) => res.json()),
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  if (data.year && yearInput) {
    yearOutput = data.year - yearInput;
  }
  
  if (data.month && monthInput) {
    if (data.month < monthInput) {
      monthOutput = data.month - monthInput + 12;
    } else monthOutput = data.month - monthInput;
  }
  
  if (data.day && dayInput) {
    if (data.day < dayInput) {
      dayOutput = data.day - dayInput + 30;
    } else dayOutput = data.day - dayInput;
  }

  return (
    <>
      <button className='p-4 rounded-full bg-indigo-500'>
        <img src={arrowIcon} alt='Submit' className='w-6'/>
      </button>
      <section className='w-full px-12 flex flex-col items-start text-4xl font-bold'>
        <p className='italic'>
          <span className='text-indigo-500'>{yearOutput}</span> years
        </p>
        <p className='italic'>
          <span className='text-indigo-500'>{monthOutput}</span> months
        </p>
        <p className='italic'>
          <span className='text-indigo-500'>{dayOutput}</span> days
        </p>
      </section>
    </>
  );
}
