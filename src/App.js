import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './style/App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import SubHero from './components/SubHero';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

library.add(fab, fas)


class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
          <Header />
          <Hero />
          <SubHero />
          <Profile />
          <Projects />
          <Experience />
          <Skills />
          <Footer />
      </div>
    )
  }
}
export default App;
