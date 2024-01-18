import React from 'react'

const Item = ({title, student, links, description, date}) => {
  return (
    <div className="flex flex-col mx-2 md:mx-aute">
          <div className="flex flex-wrap gap-2">
           <b>Title:</b>
           <p>
            {title}
           </p>
          </div>
          <div className="flex flex-wrap gap-2">
           <b>Trainee:</b>
           <p>
            {student}
           </p>
          </div>
          <div className="flex flex-wrap gap-2">
           <b>Description:</b>
           <p>
            {description}
           </p>
          </div>
          <div className="flex flex-col ">
            <b>Links:</b>
            <div className="flex flex-col gap-1">
              {
                links?.map(link=><a 
                  href={link} 
                  target="_blank"
                  className="break-all text-blue-600 underline" >{link}</a>)
              }
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
           <b>Date:</b>
           <p>
            {date}
           </p>
          </div>

        </div>
  )
}

export default Item