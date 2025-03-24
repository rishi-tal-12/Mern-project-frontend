import{Link} from 'react-router-dom'
const Landingpage=()=>{
return( <div className="containerlanding">
<h1 className="titlelanding">Blogify</h1>
<p className='textlanding'>Start sharing your thoughts and ideas today</p>
<Link to='/blogss'>
<button className='buttonlanding'>Start Blogging</button>
</Link>
</div>
)
}
export default Landingpage