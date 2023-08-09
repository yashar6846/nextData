"use client"
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn({id}) {
  const router = useRouter()
  const removeTopics = async (req, res, next) => {
    const confirmed = confirm("Are you sure you want to remove");

    if(confirmed) {
     const res = await fetch(`http://localhost:3001/api/topics?id=${id}`,{
        method: "DELETE",
      });

      if(res.ok){
        router.refresh()
      }
      
    }
  }
  return (
    <button onClick={removeTopics} className="text-red-400">
        <HiOutlineTrash size={24} />
        </button>
  )
}
