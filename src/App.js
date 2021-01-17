import React from 'react';
import Layout from './movieComponents/Layout/Layout';
import Title from './movieComponents/Title/Title';
// import SearchBar from './Components/SearchBar/SearchBar';
import MovieList from './movieComponents/MovieList/MovieList';

const App = () => {
  return (
    <>
      <Layout>
        <Title />
        <MovieList />
      </Layout>
    </>
  )
}
export default App;