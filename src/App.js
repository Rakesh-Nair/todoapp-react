import { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent/>
      <FourthComponent/>
    </div>
  );
}

function FirstComponent(){
  return (
    <div className='firstComponent'>My First Component</div>
  );
}

function SecondComponent(){
  return (
    <div className='secondComponent'>My Second Component</div>
  );
}

class ThirdComponent extends Component{
  render(){
    return <div className='thirdComponent'>My Third Component</div>
  }
}

class FourthComponent extends Component{
  render(){
    return <div className='fourthComponent'>My Fourth Component</div>
  }
}

export default App;
