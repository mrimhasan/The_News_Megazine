import './Navbar.css'


 function Navbar({setCategory}){
  let Data;
     const searchItem = (e)=>{
      
       Data = e.target.value
        //return e.target.value
     }
    // setting  e.target.value in category
  const query = () =>{
    setCategory(Data)
  }   
    return(
        <> 
        <h1 className="text-center"  id ="heading">The news megazine</h1>
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-md-center text-center" id="navbarSupportedContent" style={{background:"aliceblue"}}>
      <ul className="navbar-nav  mb-2 mb-lg-0 h4 fw-bolder">
      <li className="nav-item me-md-5">
          <a className="nav-link" aria-current="page" href="#" onClick={()=>setCategory("general")}>Home</a>
        </li>
        <li className="nav-item me-md-5">
          <a className="nav-link" aria-current="page" href="#" onClick={()=>setCategory("technology")}>Technology</a>
        </li>
        <li className="nav-item me-md-5">
          <a className="nav-link" aria-current="page" href="#" onClick={()=>setCategory("health")}>Health</a>
        </li>
        <li className="nav-item me-md-5">
          <a className="nav-link" aria-current="page" href="#" onClick={()=>setCategory("business")}>Business</a>
        </li>
        <li className="nav-item me-md-5">
          <a className="nav-link" aria-current="page" href="#" onClick={()=>setCategory("sports")}>Sports</a>
        </li>
        <li className="nav-item me-md-5">
          <a className="nav-link" aria-current="page" href="#" onClick={()=>setCategory("entertainment")}>Entertainment</a>
        </li>
      </ul>
      <form className="d-flex ms-md-5" role="search">
        <input id="search" className="me-2" type="search" placeholder="News..." autoComplete='off' onChange={searchItem}/>
        <button className="btn SearchBtn" onClick={query}>Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar