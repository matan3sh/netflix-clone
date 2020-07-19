import React from 'react';
import './App.css';

import requests from './requests';
import Row from './components/Row';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  const {
    fetchNetflixOriginals,
    fetchTrending,
    fetchTopRated,
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchDocumentaries
  } = requests;
  return (
    <div className='app'>
      <Nav />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title='Trending Now' fetchUrl={fetchTrending} />
      <Row title='Top Rated' fetchUrl={fetchTopRated} />
      <Row title='Action Movies' fetchUrl={fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={fetchDocumentaries} />
    </div>
  );
}

export default App;
