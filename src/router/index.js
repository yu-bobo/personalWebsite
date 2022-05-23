import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "../views/header";
import Fooder from "../views/footer";
import PersonalResume from "../views/personalResume"
import Hometown from "../views/hometownIntroduce"
function allRouter() {
    return <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route path="/personalResume" element={<PersonalResume />} />
                <Route path="/hometownIntroduce" element={<Hometown />} />
            </Routes>
            <Fooder />
        </Router>
    </div>
}
export default allRouter


