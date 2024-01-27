import React from 'react'

const Item = ({title, student, links, description, date}) => {
  return (
    <div className="flex flex-col p-2 bg-[#fffaf7] text-black rounded-md border-2 border-black md:mx-aute">
          <div className="text-2xl font-semiboldbold break-all mb-2">
           <h3>
            {title}.
           </h3>
          </div>
          <div className="flex flex-wrap gap-2">
           <b>Trainee:</b>
           <p>
            {student}.
           </p>
          </div>
          <div className="flex flex-wrap gap-2">
           <b>Description:</b>
           <p>
            {description}.
           </p>
          </div>
          <div className="flex flex-col ">
            <b>Links:</b>
            <div className="flex flex-col gap-1">
              {
                links?.map((link, index)=><div className="flex flex-nowrap gap-1">
                  <b>{index+1}:</b>
                  <a 
                    href={link} 
                    target="_blank"
                    className="break-all text-blue-600 " >click here to see the material</a>
                </div>)
              }
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
           <b>Date:</b>
           <p>
            {date}
           </p>
          </div>

        </div>
  )
}

export default Item