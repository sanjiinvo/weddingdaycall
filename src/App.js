import { useState } from 'react';
import './app.scss';
import zhennev from './img/zhennev.png'

function App() {
  const [clicked, setcliecked] = useState(false)
  const [mainopen, setmainopen] = useState(false)
const HandleClick = () =>{
  setcliecked(!clicked)
  console.log(clicked);
}
const OpenMain = () => {
setmainopen(!mainopen)
}
  return (
    <div className="App">
      <div className={clicked? 'main-block main-block-opened':'main-block '}>
      <div className='first-title-main'>
        <p className='A-name'>Aмирхан</p>
        <p className='nd-name'>&</p>
        <p className='K-name'>Kамила</p>
      </div>

      </div>
      <button className='button' onClick={HandleClick}>
        click
      </button>
<div class="section">
  <div class="envelope">
    
  <div onClick={HandleClick} class={!clicked ? "envelope__top envelope__top_close" : 'envelope__top'}>
    <img src="http://up-skills.ru/test/envelope-top.svg" alt=""/>
    </div>   
    
    <div  class={!clicked ? "paper paper_close" : 'paper'}>
      <div className='first-title'>
        <p className='A-name'>Aмирхан</p>
        <p className='nd-name'>&</p>
        <p className='K-name'>Kамила</p>
      </div>
      <img className='first-title-img' src={zhennev} alt='zhenev'/>

    </div>
    
    <div onClick={OpenMain} class="envelope__body">
      <img src="http://up-skills.ru/test/envelope.svg" alt=""/>
    </div>
    
  </div>
</div>
    </div>
  );
}

export default App;
