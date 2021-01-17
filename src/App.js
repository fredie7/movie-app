import React from 'react';
import Layout from './Components/Layout/Layout';
import Title from './Components/Title/Title';
// import SearchBar from './Components/SearchBar/SearchBar';
import MovieList from './Components/MovieList/MovieList';

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