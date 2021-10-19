import React from 'react';
import Home from './components/Home';
import { Router } from "@reach/router";
import './App.css';
import SinglePost from './components/SinglePost';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreatePost from './components/dashboard/posts/CreatePost';
import AppProvider from './components/context/AppProvider';
import Posts from './components/dashboard/posts/Posts';
import Pages from './components/dashboard/pages/Pages';
import Blogs from './components/Blogs';
import Page from './components/Page';

export class App extends React.Component {

  render() {
    return (
      <AppProvider>
        <Router>
          <Home path="/" />
          <Login path="/login" />
          <Blogs path="/blogs" />
          <Page path="/page/:id" />
          <Dashboard path="/dashboard" />
          <Posts path="/dashboard/posts" />
          <CreatePost path="/dashboard/create-post" />
          <SinglePost path="/post/:id" />
          <Pages path="/dashboard/pages" />
        </Router>
      </AppProvider>
    )
  }
}

export default App