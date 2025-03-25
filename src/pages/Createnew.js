import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Createnew=()=>{
    const navigate = useNavigate()
    const [title,settitle]=useState('')
    const [content,setcontent]=useState('')
    const [author,setauthor]=useState('')
    const [error,seterror]=useState(null)
    const handlesubmit =async(e)=>{
        e.preventDefault()
        const  blog ={title,content,author}

         const response = await fetch(`https://mern-project-n3l6-8qn9zq9qf-rishi-tal-12s-projects.vercel.app/api/blogs`,{
            method: 'POST',
            body: JSON.stringify(blog),
            headers:{
                'Content-type':'application/json'
            }
         })
       const  json = await response.json()
       console.log("Response after submitting blog:", json);
      if(response.ok){
        settitle('')
        setcontent('')
        setauthor('')
        seterror(null)
        navigate('/blogss')
      }
    else {
        seterror(json.error)
        console.error("Fetch error:", error)
      }
   
    }
return (
    <form className='Createnew' onSubmit={handlesubmit}>
        <label>Enter Title</label>
        <input 
         type="text"
         onChange={(e)=>{
            settitle(e.target.value)
         }}
         value={title}
         />
            <label>Enter Content</label>
        <input 
         type="text"
         onChange={(e)=>{
            setcontent(e.target.value)
         }}
         value={content}
         />
            <label>Enter Author</label>
        <input 
         type="text"
         onChange={(e)=>{
            setauthor(e.target.value)
         }}
         value={author}
         />
         <button>Create New</button>
    </form>
)
}
export default Createnew