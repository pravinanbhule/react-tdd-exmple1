import logo from './logo.svg';
import 'core-js/stable'
import "@babel/polyfill";
import './App.css';
import Header from './components/header';
import Headline from './components/headline';
import './css/app.scss'
const userDetails = [{
  name:'pravin',
  email:'abc@abc.com',
  age:40,
  onlinestatus: true 
}]
function App() {
  return (
    <>
      <Header/>
      <Headline header={'Header Text'} desc='Description' userDetails= {userDetails} />
    </>
  );
}

export default App;
