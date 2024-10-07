import {useEffect, useState} from 'react'
import NewsItem from '../newsitems/NewsItem'

 const NewsBoard = ({category}) => {
  const [Articles, setArticle] = useState([])
  useEffect(()=>{
    
    let url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
       fetch(url).then(response=>response.json()).then(Jsondata=>setArticle(Jsondata.articles))
        //console.log(Articles) 
   
  },[category])
  
 return (
        <>
        <h3 className="text-center mt-4"  style={{textTransform:"uppercase"}}>Breaking <span style={{color:"#e60000",borderBottom:"2px solid #e60000"}}>News</span></h3>
        {
            Articles.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            })
        }
        </>
)
 }
export default NewsBoard;