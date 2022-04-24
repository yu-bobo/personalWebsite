import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./views/header";
import Fooder from "./views/footer";
import PersonalResume from "./views/personalResume"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/personalResume" element={<PersonalResume />} />
        </Routes>
        <Fooder />
      </Router>
    </div>
  );
}

export default App;
