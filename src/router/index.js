import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Header from "../views/header";
import Footer from "../views/footer";
import Waves from "@/components/theWaves";
import PersonalResume from "../views/personalResume";
import Hometown from "../views/hometownIntroduce";
import EduExperience from "@/views/eduExperience";

function allRouter() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<PersonalResume/>}/>
                    <Route path="/personalResume" element={<PersonalResume/>}/>
                    <Route path="/eduExperience" element={<EduExperience/>}/>
                    <Route path="/hometownIntroduce" element={<Hometown/>}/>
                </Routes>
                <Footer/>
                <Waves/>
            </Router>
        </div>
    );
}

export default allRouter;
