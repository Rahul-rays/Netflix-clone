import React from 'react'
import Banner from "../../components/Banner/Banner.js"
import Nav from "../../components/Nav/Nav";
import Row from "../../components/Row/Row"
import "./HomeScreen.css"
import requests from '../../helpers/requests.js';

const Homescreen = () => {
  return (
    <div className="homescreen">
   <Nav />

   <Banner/>

   <Row
    title="NETFLIX ORIGINALS"
    fetchUrl={requests.fetchNetflixOriginals}
    isLarge
   />

<Row title="Trending Now" fetchUrl ={requests.fetchTrending} />
<Row title="Top Rated" fetchUrl ={requests.fetchTopRated}  />
<Row title="Action Movies" fetchUrl ={requests.fetchActionMovies} />
<Row title="Comedy Movies" fetchUrl ={requests.fetchComedyMovies} />
<Row title="Horror Movies" fetchUrl ={requests.fetchHorrorMovies}/>
<Row title="Romance Movies" fetchUrl ={requests.fetchRomanceMovies} />
<Row title="Documentaries" fetchUrl ={requests.fetchDocumentaries}  />
 
 <Row />
 <Row />
 <Row />
 <Row />
 <Row />
 <Row />
    </div>
  )
}

export default Homescreen