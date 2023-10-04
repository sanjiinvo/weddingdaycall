import { useEffect, useState } from 'react';
import './app.scss';
import zhennev from './img/zhennev.png';
import helparrow from './img/helparrow.png'
import { Arrow90degDown } from "react-bootstrap-icons";
import enveloptop from './img/envelope-top.svg'
import envolope from './img/envelope.svg'
import ImagePreloader from './ImagePreloader';
function App() {
  const [clicked, setcliecked] = useState(false)
  const [helparr, sethelparr] = useState(false)
const HandleClick = () =>{
  setcliecked(true)
}
useEffect(()=>{
 setTimeout(()=>{
  console.log(1);
  showArrow()
 },5000)
},[])

const showArrow = () =>{
  sethelparr(!helparr)
}

  return (
    <div className="App">
      {/* <ImagePreloader imageUrls={['./img/envelope-top.svg', './img/envelope.svg']}> */}

      <div className={clicked? 'main-block main-block-opened':'main-block '}>
      <div className='first-title-main'>
        <div className='main-names'>
        <p className='A-name'>A</p>
        <p className='nd-name'>&</p>
        <p className='K-name'>K</p>
        </div>

      </div>
      <div className='text-box'>
      <span className='stix'>
      Ұлы тойдың келтіргендей орайын,<br/>
      Қуанышқа толды міне маңайым. <br/>
      Бір баламыз, екеу болды мінекей, <br/>
      Тойға келіп батаңды бер ағайын!
      </span>
      </div>

      </div>
      {/* <button className='button' onClick={HandleClick}>
        click
      </button> */}
<div class="section">
  <p className='call-to-wed-tex'>
  Құрметті қонақтар! 
Сіздерді балаларымыз Амирхан мен Камиланың үйлену тойына арналған ақ дастарханымыздың қадірлі қонағы болуға шақырамыз!

  </p>

  <div class="envelope">
    
  <div onClick={HandleClick} class={!clicked ? "envelope__top envelope__top_close" : 'envelope__top'}>
    <img src={enveloptop} alt="envtop" loading='eager'/>
    <img className={helparr? 'helparrow help-arrow-move' :'helparrow'} src={helparrow} alt='helparrow'/>
    </div>   
    
    <div  class={!clicked ? "paper paper_close" : 'paper'}>
      <div className='first-title'>
        <p className='A-name'>Aмирхан</p>
        <p className='nd-name'>&</p>
        <p className='K-name'> Камила</p>
      </div>
      <img className='first-title-img' src={zhennev} alt='zhenev'/>

    </div>
    
    <div onClick={HandleClick} class="envelope__body">
      <img src={envolope} alt="envlope" loading='eager'/>
      {/* http://up-skills.ru/test/envelope.svg */}
    </div>
    
  </div>
</div>

    </div>
  );
}

export default App;
