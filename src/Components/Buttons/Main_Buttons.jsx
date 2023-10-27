import React,{useState} from 'react'
import Button from "./Button";
import {Api,Apilast4} from "./ButtonApi";
import { BsCartPlus } from 'react-icons/bs';

const Buttons = () => {

    
const [item,setitems]=useState(Api);
const [item2,setitem]=useState(Apilast4);

const color4="bg-primaryColor"

    return (
    <>
    <main>
    <h1 className='font-semibold text-2xl my-5'>Buttons</h1> 
      <div className='flex  gap-9'>
        {/*  Approach 1 By Api Define Property and pass other file as props  */}
        {
          item.map((value)=>{
            const {color,text,toptext ,borderwidth, bgbtn,boderClr,bordersolid,toptext2,textColor,toptext3}=value
            
            return(
              <>
              <div className='flex flex-col space-y-7'>
                <div className=''>
              <p >{toptext}</p>
            <Button color={color} text={text}></Button>
            </div>
           
            <div className='flex '>
              <div>
              <p>{` ${toptext2} `}</p>
            <Button color={bgbtn} boderClr={boderClr} borderwidth={borderwidth} bordersolid={bordersolid} text={text} textColor={textColor}></Button>
            </div>
            </div>


            <div className='flex '>
              <div>
              <p>{` ${toptext3} `}</p>
            <Button color={bgbtn} border={boderClr} text={text} textColor={textColor}></Button>
            </div>
            </div>

           

            </div>

</>

            )
          })
        }

</div>

{/* 2nd Second Approach  by define static property pass by props  */}

<div className='flex flex-col '>

  {/*  Liny 4 component part code */}
             <div> 
              <p className='my-4'>{`<Button disableShadow/>`}</p>
            <Button color={color4} text={"Default"}></Button>
            </div>

{/*  Liny 5 component part code  */}
            <div  className='flex gap-20'>
              <div> 
              <p className='my-4 font-semibold'>{`<Button disabled/>`}</p>
            <Button color={"bg-disablecolor"} text={"Default"} textColor={"text-distext"} disabled={true}></Button>
            </div>
            
            <div> 
              <p className='my-4'>{`<Button variant="text" disabled/>`}</p>
              
            <Button  text={"Default"} textColor={"text-distext"} disabled={true}></Button>
            </div>
            </div>

{/*  Liny 6 component part code  */}

            <div  className='flex gap-20'>
              <div> 
              <p className='my-4 font-semibold'>{`<Button starticon="local_grocery_store"/>`}</p>
            <Button color={color4} text={"Default"}  icon={<BsCartPlus/>}></Button>
            </div>
            
            <div> 
              <p className='my-4 font-semibold'>{`<Button endicon="local_grocery_store`}</p>
            <Button color={color4}  text={"Default"}   icon2={<BsCartPlus/>}></Button>
            </div>
            </div>

{/* Liny 7 component part code */}

            <div  className='flex gap-20'>
              <div> 
              <p className='my-4 font-semibold'>{`<Button size="sm"/>`}</p>
            <Button color={color4} text={"Default"}  size={"p-1 h-8 w-15"}></Button>
            </div>
            
            <div> 
              <p className='my-4 font-semibold'>{`<Button size="md"/>`}</p>
            <Button color={color4}  text={"Default"}   size={"p-1 h-13 "} ></Button>
            </div>

            <div> 
              <p className='my-4 font-semibold'>{`<Button size="lg"/>`}</p>
            <Button color={color4}  text={"Default"}   size={"p-1 h-14 "} ></Button>
            </div>

            </div>  

            </div>

{/*  approach 2 complete  */}




{/*  again 1 approach start */}
   <div className='flex gap-9 mt-5'>    

{
  item2.map((value)=>{
   
    const {color,text,toptext,color1,text2 }=value        
   
    return(
      <>
     
     <div className='flex flex-col space-y-9'>
                <div className='flex flex-col'>
              <p>{toptext}</p>
            <Button color={color} text={text} toptext={toptext}></Button>
            </div>
           
            <div className='flex flex-col items-start'>
            
            <Button color={color1} text={text} toptext={text2}></Button>
            </div>           

            </div>

      </>
    )
  })
}

</div> 


<div className='flex flex-col mt-4 gap-3'>
  <a href='https://material.io/resources/icons/?style=round' className='text-slate-400' target='_blank'>Icons :  https://material.io/resources/icons/?style=round</a>

<p className='text-slate-700'> created by <span className='font-bold'>Nazir-</span>devChallenges.io</p>
</div>

    </main>

    </>
  )
}

export default Buttons