import React,{useState} from 'react'
import Input from "./Input";
import { Api } from './InputApi';
import { BsTelephone } from 'react-icons/bs';
import { BiSolidLock } from 'react-icons/bi';


const Main_input = () => {

 const [property,setproperty]=useState(Api)   
console.log(property)

const color4="bg-primaryColor"

    return (
    <>
    <main>
    <h1 className='font-semibold text-2xl my-5'>Inputs</h1> 
      <div className='flex  gap-9'>
        {/*  Approach 1 By Api Define Property and pass other file as props  */}

        {
          property.map((value)=>{
            
            const {toptext,textcolor,toptext1, borderw,borders,bordercolor,bordercolor2}=value;
            return(
              <>
              <div className='flex flex-col space-y-7'>
                <div className=''>
              <span className={`${textcolor}`}>{toptext}</span>
              <p className='mt-5'>Label</p>
            <Input bordercolor={bordercolor} borders={borders} borderw={borderw}></Input>
            </div>
           
    
            <div className='flex '>
              <div>
              <span className={`${textcolor}`}>{toptext}</span>
              <p className={` text-red-500 mt-5`}>{` Tetx 3 `}</p>
            <Input bordercolor={bordercolor2} borders={borders} borderw={borderw}></Input>
            </div>
            </div>

           

            </div>

</>


            )
          })
        }

</div>

{/*  Line component  3 part code  */}

<div className='flex flex-col gap-3 mt-[3rem] '>
<p className='text-sm'>{`<Input disabled/>`}</p>
  <span>Label</span>
<Input disabled={true} ></Input>
</div>

{/* Line component  4 part code */}

<div className='flex mt-5 gap-[3rem] mb-5'>
  <div className='flex flex-col gap-2'>
  <span className='text-sm'>{`<Input helperText=”Some interesting text” />`}</span>
  <span>Label</span>
    <Input bordercolor={"border-[#828282]"} borders={"border-solid"} borderw={"border-[1px]"} ></Input>
  <p className='text-[#828282]'>some interesting text</p>
  </div>
<div className='flex flex-col gap-2'>
<span className='text-sm'>{`<Input helperText=”Some interesting text” />`}</span>
<span className='text-[#D32F2F]'>Label</span>
<Input  bordercolor={"border-[#D32F2F]"} borders={"border-solid"} borderw={"border-[1px]"}></Input>
<p className='text-[#D32F2F]'>some interesting test</p>
</div>

</div>

{/* Line component  5 part code */}

<div className='flex mt-5 gap-[5rem] mt-[2rem]'>
  <div className="flex flex-col gap-3">
  <p >{`<Input starticon/>`}</p>
  <span>Label</span>
<Input phoneicon={<BsTelephone/>} bordercolor={"border-[#828282]"} borders={"border-solid"} borderw={"border-[1px]"} ></Input>
</div>

<div className="flex flex-col gap-3">
<p >{`<Input endicon/>`}</p>
  <span>Label</span>
<Input  phoneicon2={<BiSolidLock/>}  bordercolor={"border-[#828282]"} borders={"border-solid"} borderw={"border-[1px]"}></Input>
</div>
</div>

{/* Line component  6 part code  */}

<div className='flex flex-col mt-5 '>
<p >{`<Input value="text"/>`}</p>
  <span>Label</span>
<Input bordercolor={"border-[#828282]"} borders={"border-solid"} borderw={"border-[1px]"} ></Input>
</div>

{/*  Line component  7 part code  */}

<div className='flex mt-5 gap-[5rem]'>

<div className='flex flex-col gap-3'>
<p >{`<Input size="sm"/>`}</p>
  <span>Label</span>
<input placeholder="Placeholder" className="border-[#828282] border-solid border-[1px] rounded-lg h-10 w-[15rem] p-2"></input>
</div>

<div className="flex flex-col gap-3">
<p >{`<Input size="md"/>`}</p>
  <span>Label</span> 
<Input    bordercolor={"border-[#828282]"} borders={"border-solid"} borderw={"border-[1px]"}></Input>
</div>
</div>


{/*  Line component  8 part code  */}
<div className='flex flex-col mt-5 gap-3'>
<p >{`<Input fullwidth/>`}</p>
  <span>Label</span>
<input value="Text" className="border-[#828282] border-solid border-[1px] rounded-lg h-14 w-[50rem] p-2"></input>
</div>

{/*  Line component  9 part code  */}
<div className='flex flex-col mt-5 gap-3'>
  <p >{`<Input multiline row="4"/>`}</p>
  <span>Label</span>
<textarea placeholder="Placeholder" rows="4" className="border-[#828282] border-solid border-[1px] p-0 rounded-lg  w-[15rem] "></textarea>
</div>

<p className='mt-2'>Created  by <span className='font-bold'>Nazir-</span>dev-challenges.io</p>
    </main>

    </>
  )
}

export default Main_input