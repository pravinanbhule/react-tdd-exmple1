import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Headline from './components/headline';
import './css/app.scss'
function App() {
  return (
    <div className="App">
      <Header/>
      <Headline header='Header Text' desc='Description'/>
    </div>
  );
}

export default App;
