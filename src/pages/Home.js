import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
const Home =()=>{
 const  [blogs,setblogs]=useState([])
useEffect(()=>{

    const fetchblogs = async()=>{ 
   const response = await fetch(`https://mern-project-n3l6.vercel.app/api/blogs`)
   const json = await response.json()
   if(response.ok){
        setblogs(json)
   }
}
   fetchblogs()
},[])
    return(
        <div>
            <div className="allblogs">
            {blogs && blogs.map((blog)=>(
                <div key={blog._id} >
                   <Link to={`/blogss/${blog._id}`}>
                    <h4>{blog.title}</h4>
                </Link>
                <p>{blog.content}</p>
                <h4>{blog.author}</h4>
           </div> ))}
            </div>
      </div>
    )
}

export default Home