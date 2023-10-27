import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';

const Sidebar = () => {
  //  button 
  const [istext, setIstext] = useState(false);
  //  input 
  const [inputtext, setinputtext] = useState(false);

  const navigate = useNavigate();
  const handlebutton = () => 
  {
    navigate('/button')
    setIstext(!istext)
    // for inout false
    setinputtext(false)
  } 
  const handleinput = () => {
    navigate('/')
    setinputtext(!inputtext)
    //  for btn false
    setIstext(false)
  }

  return (
    <div className='bg-leftbackcolor w-72 h-[100vh]'>
    
    <div className='px-16 flex flex-col gap-10 my-8 '>
      <div>
       <span className='text-red-500  font-bold'>Dev</span><span className='font-bold '>challenges.io</span> 
       </div>
       
<button>Colors</button>
<button>Typography</button>
<button>Spaces</button>
<button onClick={handlebutton} style={{fontWeight:istext? "bold" :"normal"}}>Buttons</button>
<button onClick={handleinput} style={{fontWeight:inputtext? "bold" :"normal"}}>Inputs</button>
<button>Grid</button>

    </div>
    
    </div>
  )
}

export default Sidebar