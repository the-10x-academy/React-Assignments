import Appcomponetgrp from "./component/Appcomponetgrp";

import Yellow from "./component/yellow";
import Blue from "./component/blue";
import Red from "./component/red";
import './index.css';
function App() {
  return (
    <>
    <div className="App">
      <Appcomponetgrp>
       <Yellow/>
       <Yellow/>
        
      </Appcomponetgrp>
      <Appcomponetgrp>
        <Red/>
      </Appcomponetgrp>
      <Appcomponetgrp>
        <Blue/>
        <Blue/>
        <Blue/>

      </Appcomponetgrp>

    </div>
    
    </>
  );
}

export default App;
