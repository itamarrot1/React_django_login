import React, { useState } from "react";
import Login from "./Login";
import MyUserName from "./Username";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Shop } from "./Shop";
import Register from "./Register";



function App() {


const [username, setusername] = useState('')

return (
    <div>
<MyUserName.Provider value={{username,setusername}}>
<BrowserRouter>
<Routes>
        <Route path= '/' element={<Welcome/>}> 
        <Route path="/" index element={<h1>welcome to our supermakret</h1>}/>
        <Route path='/register'  element={<Register/>}/>
        <Route path="/log-in" element={<Login/>}/>
        </Route>
                <Route path="/shop" element={<Shop/>}/>
       
</Routes>

</BrowserRouter>
</MyUserName.Provider>
</div>
  );
}

export default App;
