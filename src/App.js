import React from 'react';
// import { ThemeProvider } from "@material-ui/styles";
// import theme from "./theme";
import './App.css'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
      <Content />
      <Footer />
      </div>
  );
};
export default App;
