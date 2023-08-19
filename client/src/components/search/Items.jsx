import React from 'react'

const Items = (link) => {
  return (
    <div className="w-1/2 bg-slate-300 backdrop-blur-lg px-3 py-5 rounded-md">
      <div className="flex justify-between items-center mb-5">
        <li className="list-none w-2/3 text-left break-normal">{link}</li>
        <div className="flex gap-3">
          <button className="bg-blue-600 text-white px-2 py-2 font-medium rounded-md" >
            Test
          </button>
          <button className="bg-white text-blue-600 px-2 py-2 font-medium rounded-md" >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default Items