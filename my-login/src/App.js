import React from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Userpage from "./components/Users/Userpage";
import Policies from "./components/Policy/Policies";
import UserPolicy from "./components/Userpolicy/User Policy";
import ClaimSettlement from "./components/Claimsettle/Claim Settlement";

function App() {
    return (
        <Router>
            <div>
            <Nav />
                <Routes>
                    <Route path="/Userpage" element={<Userpage />}/>
                    
                    <Route path="/Policies" element={<Policies />}/>
                    <Route path="/UserPolicy" element={<UserPolicy />}/>
                    <Route path="/ClaimSettlement" element={<ClaimSettlement />}/>
                </Routes>
                
            </div>
        </Router>
    )
}
export default App;