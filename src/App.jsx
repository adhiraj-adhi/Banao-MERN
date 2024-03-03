import React, { createContext, useState } from 'react'
import HeaderSection from './containers/HeaderSection'
import HeroSection from './containers/HeroSection'
import MainSection from './containers/MainSection'
import Form from './containers/Form';

// export const IsLoggedInContext = createContext(false); 
export const IsLoggedInContext = createContext();
export const ViewFormContext = createContext();

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  // handling the viewing of form:
  const [viewForm, setViewForm] = useState(false);
  const toogleViewForm = () => {
    setViewForm(prevState => !prevState);
  }

  return (
    <div>
      <IsLoggedInContext.Provider value={{ isLoggedIn, toggleLogin }}>
        <ViewFormContext.Provider value={{ viewForm, toogleViewForm }}>
          <HeaderSection />
          <Form />
        </ViewFormContext.Provider>
        <HeroSection />
        <MainSection />
      </IsLoggedInContext.Provider>
    </div>
  )
}

export default App