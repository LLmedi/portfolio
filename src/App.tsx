import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Showcase from './pages/Showcase';
import ProjectList from './pages/ProjectList';
import Project from './pages/Project';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      color: '#fdfdfd'
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#607d8b',
      light: '#8eacbb',
      dark: '#34515e'
    },
    secondary: {
      main: '#ca90a3',
      light: '#fec1d4',
      dark: '#986274'
    }
  }

});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/*All our Routes goes here!*/}
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Showcase/>} />
          <Route path="/projectlist" element={<ProjectList/>} />
          <Route path="/projectlist/:project" element={<ProjectList/>} />
          <Route path="/projects/:project/:name" element={<Project/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
