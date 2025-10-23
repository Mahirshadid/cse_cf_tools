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
      <a href="/assessment-sheet.xlsx" download>Download</a>
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
      <a href="/lecture-plan.docx" download>Download</a>
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
      <a href="/gradesheet-mid.xlsx" download>Download</a>
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
      <a href="/" download>Download</a>
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
      <a href="/" download>Download</a>
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
      <a href="/" download>Download</a>
    </button>
  </li>
  
</ul>
  )
}

export default ListTemps