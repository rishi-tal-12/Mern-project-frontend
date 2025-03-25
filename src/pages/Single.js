import{useEffect ,useState} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Single =()=>{
    const { id } = useParams()
    const navigate = useNavigate()
    const [blog,setblog]=useState({})
useEffect(()=>{
    const fetchsingle =async()=>{
        const response = await fetch(`https://mern-project-n3l6.vercel.app/api/blogs/${id}`)
        const json = await response.json()
        if(response.ok){
            setblog(json)
        }
    }
    fetchsingle()
}, [])
const deleteblog=async()=>{
        const response = await fetch(`https://mern-project-n3l6.vercel.app/api/blogs/${id}`,{
            method:'DELETE'
        }
        )
        if(response.ok){
            navigate("/blogss")
        }  
}
return(
    <div className='singleblog'>
       <h1>{blog.title}</h1>
       <h2>{blog.content}</h2>
       <h3>{blog.author}</h3>
       <Link to ={`/blogss/${id}/update`}>
       <button className='updatebutton'>Update</button>
       </Link>
       <button onClick={deleteblog} className='deletebutton'>Delete
       </button>
    </div>
)
}
export default Single