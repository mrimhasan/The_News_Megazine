
import "./NewsItem.css"
import News from '../../src/assets/News.jpg'

function NewsItem({title, description, src, url}) {
  return (
    <>
      <div className="card m-md-5 m-2 mt-5 d-inline-block" id="card" style={{width:"22.1rem"}}>
        <img src={src?src:News} className="card-img-top" alt="NewsIMG" style={{height:"230px"}}/>
        <div className="card-body">
            <h5 className="card-title">{title?title.slice(0,150):" Lorem"}</h5>
            <p className="card-text">{description?description.slice(0,250):"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt repudiandae cumque laboriosam quibusdam dolorum blanditiis, corporis voluptas placeat saepe quam soluta enim veniam nemo. Quisquam autem perspiciatis esse, sunt itaque aut!"}</p>
            <a href={url} className="btn btn-primary">Read More</a>
        </div>
        </div>
       
    </>
  )
}

export default NewsItem
