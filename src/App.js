import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Navbar/Dialogs/Dialogs';
import News from './components/Navbar/News/News'
import Music from './components/Navbar/Music/Music'
import Settings from './components/Navbar/Settings/Settings'
import {Route} from "react-router-dom";

const App = props => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                        updateNewPostText={props.updateNewPostText}
                                                        addPost={props.addPost} />} />
          <Route path='/dialogs' render={() => <Dialogs dialogPage={props.state.dialogPage} 
                                                        sendNewMessage={props.sendNewMessage}
                                                        addMessage={props.addMessage} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  );
}

export default App;
