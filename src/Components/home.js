import { useState } from 'react'
function Home() {
    const [name,setName]=useState('')
    const [ShowName,SetShowName]=useState('')
    const handleChange=(e)=>{
        setName(e.target.value)
    }
    const handleButton=()=>{
        SetShowName(`Welcome,${name}`)
    }
  return (
    <div>
        <input type='text' 
        placeholder='Enter your name' 
        value={name} 
        onChange={handleChange}
        />
        <button  className="bg-blue border-1 w-10" 
        onClick={handleButton}>submit</button>
        <p>{ShowName}</p>
      
    </div>
  )
}

export default Home