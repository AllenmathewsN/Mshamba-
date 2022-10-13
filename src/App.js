import React from "react";
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import Content from "./components/content.jsx";
import Table from "./components/Table.jsx";
import { useState } from 'react';
import Home from "./components/Home.jsx";
import Contacts from "./components/contact.jsx";



function App() {
  const [resourceType, setResourceType] = useState(false);
  function toggleResourceType(){
    setResourceType(resourceType=>!resourceType)
  }
  return (
 <>
 <Nav toggleResourceType={toggleResourceType} />
 <About resourceType={resourceType}/>
 <Content />
 <Table />
 <Home />
 <Contacts />
 </>
);
}

export default App;
