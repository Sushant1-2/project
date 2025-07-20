import React from 'react'

const OrangeButton = ({title,... props}) => {
  return (
    <div  {...props} className="bg-rose-500 text-white font-semibold py-2 px-3 w-fit rounded-xl hover:bg-red-900 shadow-sm shadow-red-500/50 crusor-pointer">
     {title}
    </div>
  )
}

export default OrangeButton
