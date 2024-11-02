import React,  {useState} from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import {IoIosArrowUp} from 'react-icons/io'
import './App.css'

function App() {

  const [selected,setSelected]=useState(null)

  const toggle =(i) =>{
    if(selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }
  return (
    <div className='bg'>
    <div className='wrapper'>
      <div className='accordion'>
        {data.map((item, i)=>(
          <div className='item'>
            <div className='title' onClick={() =>toggle(i)}>
                <h2>{item.select}</h2>
                <span>{selected === i ? <IoIosArrowDown/> : <IoIosArrowUp/> }</span>

            </div>
            <div className={selected === i? 'content.show' : 'content' }>{item.option}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  )
}

const data=[
  {
  select: 'Option One',
  option :
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     
  } ,  
  {
  select: 'Option Two',
  option :
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     
  } ,  
  {
  select: 'Option Three',
  option :
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     
  } ,  
  {
  select: 'Option Four',
  option :
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     
  }  
]

export default App


