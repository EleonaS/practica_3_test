//import { useState, useEffect, useLayoutEffect  } from 'react';
import './App.css';
////--------
/*function App() {
  const [number, setNumber] = useState(0);

  //для собеседования
  
  ///useEffect работает асинхронно
  ////рендерит сначала 0 и ждет данные предыдущие
  
  //useEffect(() => {
  // if (number === 0)
  //   {setNumber(Math.random)
  // }
  //}, [number])

  //работает синхронно  
  //не дожидается конца рендера по предыдущим данным

  useLayoutEffect(() => {
    if (number === 0)
      {setNumber(Math.random)
    }
    }, [number])

  console.log(number);
  return (
    <>
    <p >
      {number}
      </p>
      <button type="button" onClick={()=>{setNumber(0)}}>click</button>
      </>
  );
}

export default App;*/

import {Component} from 'react'
import { render } from '@testing-library/react';

class  App  extends  Component {
 
  state = {
    name: '',
    age: '',
  }

  handleInputChange = (e) => {
    this.setState({[e.target.name ]:e.target.value})
  }



  render(){
    return (
    <>
        <form >
          <label>name
            <input type='text' name='name' onChange={this.handleInputChange}/>
            
          </label>
          <label>age
            <input type='text' name='age'  onChange={this.handleInputChange}/>
            
          </label>
          <button type="button" onClick={() => { }}>click</button>
      
      </form>
      </>
  );
  }
}

export default App;