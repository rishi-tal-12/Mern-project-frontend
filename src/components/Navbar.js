import {Link} from 'react-router-dom'

const Navbar =()=>{
    return(
    <div className='container'>
        <Link to='/'><h1>Blogify</h1>
        </Link>
        <Link to='/blogss'>View Blogs</Link>
        <Link to='/create'><h4>
            Create new
        </h4>
        </Link>
    </div>
    )
}
export default Navbar