import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"


const Card = ({data , reference}) => {
  return (
    <motion.div drag dragConstraints = {reference} whileDrag={{scale:1.2}}
    dragTransition={{bounceDamping:10, bounceStiffness:100}} dragElastic= {.1} className=' flex-shrink-0  overflow-hidden relative py-10 px-8 w-60 h-72  bg-zinc-900 rounded-[45px] text-white '> 

<FaRegFileAlt /><p className=' leading-tight text-sm mt-5 font-semibold'>{data.desc}</p>
<div className='footer absolute bottom-0  w-full    left-0  '>
  <div className='flex items-center justify-between px-8 py-3 mb-3'>
    <h5>{data.filesize}</h5>
   <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center '>
    {data.close ? <IoMdCloseCircleOutline /> :    <MdOutlineFileDownload  size=".7em" color = '#000'/>

}
   </span>
  </div>
  {
    data.tag.isOpen && (<div className= {`tag w-full py-4  ${data.tag.tagColor === "blue" ? "bg-blue-600" :" bg-green-600" } flex items-center justify-center `}>
    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3> </div>)
  }
 
 
</div>
    
    </motion.div>

  )
}

export default Card