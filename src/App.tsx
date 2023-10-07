
import './App.css';
import React,{useState,useEffect} from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { LuRefreshCw } from 'react-icons/lu';
import { BsArrowRight } from 'react-icons/bs';
import axios from 'axios';
import { useSpring, animated } from '@react-spring/web'



function App() {

  type list={
    content:string,
    author:string,
    tags:Array<string>
  }

  const [quotes,setquotes]=useState<list>() ;
  const [authors,setauthors]=useState<list[]>();
  const [load,setload]=useState(true);
  const [single_author,setsingle]=useState();

  //  single author generate function

  const SingleQuote=async()=>{
   
    try{
        
      const quot=await axios.get("https://api.quotable.io/quotes/random");
        setquotes(quot.data[0])
      
      setsingle(quot.data[0].author)
    }
    catch(err)
    {
      console.log(err);
    }
  }


  //  All Author Data 
  const Allauthor=async()=>{

    try{

  const response =await axios.get("https://api.quotable.io/quotes?author=albert-einstein&limit=3")    
  setauthors(response.data.results)
    }
    catch(err)
    {
      console.log(err)
    }
  }

  //  Change Toggle State 
  const ToggleState=()=>{
    
    setload(false)
  }


useEffect(() => {
  SingleQuote();
  Allauthor()    
}, [load])



const [springs,api] = useSpring(()=>Number({
  from: { rotate: 0 },
  
}))

const handleClick = () => {
  api.start({
    from: {
      rotate: 0,
    },
    to: {
      rotate: 360,
    },
    loop:true,
  })
  // SingleQuote();

}

  return (
    <div className="App">
      
      <div className='top-bar'>
        <button onClick={()=>setload(true)}>Random<animated.div onClick={handleClick} style={{
        color: "#FF5733",
        fontSize: "1rem",
        borderRadius: "8",
        ...springs
      }}><LuRefreshCw  /></animated.div> </button>
        </div>
        {load ?  <>

        {
quotes?
 <>       

<section className='single-quote'>
          <p className='first'> {quotes.content}</p>
        <div className='second' onClick={ToggleState} >
        <div className='quote'>
          <p> {quotes.author }</p>
        <span> {quotes.tags[0]}</span>
        </div> 
        <div><BsArrowRight/></div>
        
        </div>
       
        
</section>
{api.stop()}
</>
: <ClipLoader
       
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

}
        </>:<>
        
        <h5>{single_author}</h5>
        { authors!==undefined&&
 authors.map((value)=>{
  return(
    <>
   <section className='single-quote'>
          <p className='first'>Quote {value.content}</p>
     
</section>
    
    </>
  )
})
        }
        </>}
        

     <footer>Developed By <span>Nazir</span> -devChallenges.io</footer>  

    </div>
  );
}

export default App;
