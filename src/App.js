import React from "react";
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import Content from "./components/content.jsx";
import Table from "./components/Table.jsx";
import { useState } from 'react';



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
 </>
);
}

export default App;
