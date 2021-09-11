import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import card from './Card/Card';
import Searchbar from './Homepage/Searchbar'
import StudentsBar from './Homepage/StudentsBar'


function App() {
  return (
    <div>
      <StudentsBar />
      <Searchbar />
    </div>
  );
}

export default App;
