"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTopic() {
  const [title, setTitle]= useState('')
  const [description, setDescription]= useState('')

   const router = useRouter()
  const handelSubmit= async(e)=>{
   e.preventDefault();
  
   if(!title || !description){
    alert('Title and description are required.')
    return
   }
   try{
   const res = await fetch(`http://localhost:3001/api/topics`,{
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({title, description})
   })
   if(res.ok){
    router.push('/')
   }else{
    throw new Error("failed to connect a topic")
   }
   }catch(error){console.log(error);}
  }
  return (
    <form onClick={handelSubmit} className="flex flex-col gap-3">
        <input onChange={(e)=> setTitle(e.target.value)} value={title} className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Title" />

        <input onChange={(e)=> setDescription(e.target.value)} value={description}  className="border border-slate-500 px-8 py-2" type="text" placeholder="Topic Title" />

        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Add Topic</button>
    </form>
  )
}
