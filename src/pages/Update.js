import {useState} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Update=()=>{
    const { id } = useParams()
    const navigate = useNavigate()
    const [title,settitle]=useState('')
    const [content,setcontent]=useState('')
    const [author,setauthor]=useState('')
    const [error,seterror]=useState(null)
    const handlesubmit =async(e)=>{
        e.preventDefault()
        if (title.trim() === '') {
            console.log("Title should be passed");
            return;
        }
        const  blog ={title,content,author}

        const response = await fetch(`https://mern-project-n3l6.vercel.app/api/blogs/${id}`,{
            method: 'PATCH',
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
    <form className='Update' onSubmit={handlesubmit}>
        <label>Enter New Title</label>
        <input 
         type="text"
         onChange={(e)=>{
            settitle(e.target.value)
         }}
         value={title}
         />
            <label>Enter New Content</label>
        <input 
         type="text"
         onChange={(e)=>{
            setcontent(e.target.value)
         }}
         value={content}
         />
            <label>Enter New Author</label>
        <input 
         type="text"
         onChange={(e)=>{
            setauthor(e.target.value)
         }}
         value={author}
         />
         <button class>Update</button>
    </form>
)
}
export default Update