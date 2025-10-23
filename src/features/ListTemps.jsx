import React from 'react'
import excellogo from '../assets/excelogo.png'
import wordlogo from '../assets/wordlogo.png'

const ListTemps = () => {
  return (
    <ul className="list w-10/12 bg-base-200 rounded-box shadow-md">
  
  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Templates of the Course Files</li>
  
  <li className="list-row">
    <div className="lg:text-4xl md:text-3xl text-2xl font-thin opacity-30 tabular-nums">01</div>
    <div><img className="size-10 rounded-box" src={excellogo}/></div>
    <div className="list-col-grow">
      <div>Assessment Sheet</div>
      <div className="text-xs uppercase font-semibold opacity-60">Excel</div>
    </div>
    <button className="btn btn-ghost">
      <a href="/assessment-sheet.xlsx" download><svg
    viewBox="0 0 1024 1024"
    className="w-5 h-5"
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z"
      fill="#3688FF"
    />
    <path
      d="M512 938.7c-10.9 0-21.8-4.2-30.2-12.5l-128-128c-16.7-16.7-16.7-43.7 0-60.3 16.6-16.7 43.7-16.7 60.3 0l97.8 97.8 97.8-97.8c16.6-16.7 43.7-16.7 60.3 0 16.7 16.7 16.7 43.7 0 60.3l-128 128c-8.2 8.3-19.1 12.5-30 12.5z"
      fill="#5F6379"
    />
    <path
      d="M512 938.7c-23.6 0-42.7-19.1-42.7-42.7V597.3c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7V896c0 23.6-19.1 42.7-42.7 42.7z"
      fill="#5F6379"
    />
  </svg></a>
    </button>
  </li>
  
  <li className="list-row">
    <div className="lg:text-4xl md:text-3xl text-2xl font-thin opacity-30 tabular-nums">02</div>
    <div><img className="size-10 rounded-box" src={wordlogo}/></div>
    <div className="list-col-grow">
      <div>Lecture Plan</div>
      <div className="text-xs uppercase font-semibold opacity-60">DOCX</div>
    </div>
    <button className="btn btn-ghost">
      <a href="/lecture-plan.docx" download><svg
    viewBox="0 0 1024 1024"
    className="w-5 h-5"
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z"
      fill="#3688FF"
    />
    <path
      d="M512 938.7c-10.9 0-21.8-4.2-30.2-12.5l-128-128c-16.7-16.7-16.7-43.7 0-60.3 16.6-16.7 43.7-16.7 60.3 0l97.8 97.8 97.8-97.8c16.6-16.7 43.7-16.7 60.3 0 16.7 16.7 16.7 43.7 0 60.3l-128 128c-8.2 8.3-19.1 12.5-30 12.5z"
      fill="#5F6379"
    />
    <path
      d="M512 938.7c-23.6 0-42.7-19.1-42.7-42.7V597.3c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7V896c0 23.6-19.1 42.7-42.7 42.7z"
      fill="#5F6379"
    />
  </svg></a>
    </button>
  </li>
  
  <li className="list-row">
    <div className="lg:text-4xl md:text-3xl text-2xl font-thin opacity-30 tabular-nums">03</div>
    <div><img className="size-10 rounded-box" src={excellogo}/></div>
    <div className="list-col-grow">
      <div>Gradesheet (Mid-Term)</div>
      <div className="text-xs uppercase font-semibold opacity-60">Excel</div>
    </div>
    <button className="btn btn-ghost">
      <a href="/gradesheet-mid.xlsx" download><svg
    viewBox="0 0 1024 1024"
    className="w-5 h-5"
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z"
      fill="#3688FF"
    />
    <path
      d="M512 938.7c-10.9 0-21.8-4.2-30.2-12.5l-128-128c-16.7-16.7-16.7-43.7 0-60.3 16.6-16.7 43.7-16.7 60.3 0l97.8 97.8 97.8-97.8c16.6-16.7 43.7-16.7 60.3 0 16.7 16.7 16.7 43.7 0 60.3l-128 128c-8.2 8.3-19.1 12.5-30 12.5z"
      fill="#5F6379"
    />
    <path
      d="M512 938.7c-23.6 0-42.7-19.1-42.7-42.7V597.3c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7V896c0 23.6-19.1 42.7-42.7 42.7z"
      fill="#5F6379"
    />
  </svg></a>
    </button>
  </li>

  <li className="list-row">
    <div className="lg:text-4xl md:text-3xl text-2xl font-thin opacity-30 tabular-nums">04</div>
    <div><img className="size-10 rounded-box" src={excellogo}/></div>
    <div className="list-col-grow">
      <div>Gradesheet (Final-Term)</div>
      <div className="text-xs uppercase font-semibold opacity-60">Excel (Underconstruction)</div>
    </div>
    <button className="btn btn-ghost">
      <a href="" download><svg
    viewBox="0 0 1024 1024"
    className="w-5 h-5"
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z"
      fill="#3688FF"
    />
    <path
      d="M512 938.7c-10.9 0-21.8-4.2-30.2-12.5l-128-128c-16.7-16.7-16.7-43.7 0-60.3 16.6-16.7 43.7-16.7 60.3 0l97.8 97.8 97.8-97.8c16.6-16.7 43.7-16.7 60.3 0 16.7 16.7 16.7 43.7 0 60.3l-128 128c-8.2 8.3-19.1 12.5-30 12.5z"
      fill="#5F6379"
    />
    <path
      d="M512 938.7c-23.6 0-42.7-19.1-42.7-42.7V597.3c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7V896c0 23.6-19.1 42.7-42.7 42.7z"
      fill="#5F6379"
    />
  </svg></a>
    </button>
  </li>

  <li className="list-row">
    <div className="lg:text-4xl md:text-3xl text-2xl font-thin opacity-30 tabular-nums">05</div>
    <div><img className="size-10 rounded-box" src={excellogo}/></div>
    <div className="list-col-grow">
      <div>Three Representative Report</div>
      <div className="text-xs uppercase font-semibold opacity-60">DOCX (Underconstruction)</div>
    </div>
    <button className="btn btn-ghost">
      <a href="" download><svg
    viewBox="0 0 1024 1024"
    className="w-5 h-5"
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z"
      fill="#3688FF"
    />
    <path
      d="M512 938.7c-10.9 0-21.8-4.2-30.2-12.5l-128-128c-16.7-16.7-16.7-43.7 0-60.3 16.6-16.7 43.7-16.7 60.3 0l97.8 97.8 97.8-97.8c16.6-16.7 43.7-16.7 60.3 0 16.7 16.7 16.7 43.7 0 60.3l-128 128c-8.2 8.3-19.1 12.5-30 12.5z"
      fill="#5F6379"
    />
    <path
      d="M512 938.7c-23.6 0-42.7-19.1-42.7-42.7V597.3c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7V896c0 23.6-19.1 42.7-42.7 42.7z"
      fill="#5F6379"
    />
  </svg></a>
    </button>
  </li>

  <li className="list-row">
    <div className="lg:text-4xl md:text-3xl text-2xl font-thin opacity-30 tabular-nums">06</div>
    <div><img className="size-10 rounded-box" src={excellogo}/></div>
    <div className="list-col-grow">
      <div>CQI</div>
      <div className="text-xs uppercase font-semibold opacity-60">DOCX (Underconstruction)</div>
    </div>
    <button className="btn btn-ghost">
      <a href="" download><svg
    viewBox="0 0 1024 1024"
    className="w-5 h-5"
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z"
      fill="#3688FF"
    />
    <path
      d="M512 938.7c-10.9 0-21.8-4.2-30.2-12.5l-128-128c-16.7-16.7-16.7-43.7 0-60.3 16.6-16.7 43.7-16.7 60.3 0l97.8 97.8 97.8-97.8c16.6-16.7 43.7-16.7 60.3 0 16.7 16.7 16.7 43.7 0 60.3l-128 128c-8.2 8.3-19.1 12.5-30 12.5z"
      fill="#5F6379"
    />
    <path
      d="M512 938.7c-23.6 0-42.7-19.1-42.7-42.7V597.3c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7V896c0 23.6-19.1 42.7-42.7 42.7z"
      fill="#5F6379"
    />
  </svg></a>
    </button>
  </li>
  
</ul>
  )
}

export default ListTemps