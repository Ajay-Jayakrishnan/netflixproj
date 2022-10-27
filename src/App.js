
import './App.css';
import Row from './components/Row';
import requests from './request'
import Banner from './components/Banner';
import Nav from './components/Nav';
function App() {
  return (
  
    <div className="App">
      <Nav/>
      <Banner/>
    <Row  title= "Netflix Originals" fetchurl ={requests.fetchNetflixOriginals} isLargeRow={true}/>
    <Row  title= "Trending Movies" fetchurl ={requests.fetchTrending}/>
    <Row  title= "Top Rated Movies" fetchurl ={requests.fetchTopRated}/>
    <Row  title= "Action Movies" fetchurl ={requests.fetchActionMovies}/>
    <Row  title= "Comedy Movies" fetchurl ={requests.fetchComedyMovies}/>
    <Row  title= "Horror Movies" fetchurl ={requests.fetchHorrorMovies}/>
    <Row  title= "Romance Movies" fetchurl ={requests.fetchRomanceMovies}/>
    <Row  title= "Netflix Documentaries" fetchurl ={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
