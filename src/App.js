import { useEffect, useState } from 'react';
import './app.scss';
import helparrow from './img/helparrow.png'
import enveloptop from './img/envelope-top.svg'
import envolope from './img/envelope-svg-cutted.svg'
import silvarch from './img/silverarch.png'
import menstyle from './img/menstyle.png'
import womenstyle from './img/womenstyle.png'
import vertical from './img/verticalline.png'
import ak from './img/AAAAAAAAAK.png'
import mus from './audio/mus.mp3'
import gis from './img/2gisl.png'
import hands from './img/hands.jpg'
function App() {
  const [clicked, setcliecked] = useState(false);
  const [helparr, sethelparr] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  function calculateTimeRemaining() {
    const deadline = new Date('2023-11-19 16:00');
    const currentTime = new Date();
    const timeDifference = deadline - currentTime;
    // console.log(currentTime);
    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

const HandleClick = () =>{
  setcliecked(true)
  const audio = new Audio(mus)
  audio.play()
}
useEffect(() => {
  const timerInterval = setInterval(() => {
    setTimeRemaining(calculateTimeRemaining());
    console.log(timeRemaining.days, timeRemaining.hours, timeRemaining.minutes, timeRemaining.seconds);
  }, 1000);

  return () => {
    clearInterval(timerInterval);
  };
}, []);
useEffect(()=>{
 setTimeout(()=>{
  console.log(1);
  showArrow()
 },3000)
},[])

const showArrow = () =>{
  sethelparr(!helparr)
}

  return (
    <div className="App">
      {/* <ImagePreloader imageUrls={['./img/envelope-top.svg', './img/envelope.svg']}> */}

      <div className={clicked? 'main-block main-block-opened':'main-block '}>
      <div className='bg-white'>
      <div className='first-title-main'>
        <div className='main-names'>
          <img className='ak' src={ak} alt='AK' />
        {/* <p lang='kk' className='A-name'>A</p>
        <img className='vert-line' src={vertical} alt=''/>
        <p lang='kk' className='K-name'>K</p> */}
        </div>

      </div>
      <div className='text-box'>
      <span className='stix'>
      Ұлы тойдың келтіргендей орайын,<br/>
      Қуанышқа толды міне маңайым. <br/>
      Бір баламыз, екеу болды мінекей, <br/>
      Тойға келіп батаңды бер ағайын!
      </span>
      <img className='silv-arch-middle' src={silvarch} alt='silver-arch'/>
      <p lang='kk' className='call-to-wed-tex'>
  Құрметті қонақтар!<br/>
Сіздерді балаларымыз<p lang='kk' className='call-names'>Амирхан мен Камиланың</p>  үйлену тойына арналған ақ дастарханымыздың қадірлі қонағы болуға шақырамыз!

  </p>
      </div>

      <div className='date-adress-block'>
          <div className='date-box'>
            <p lang='kk' className='date-title'>Той салтанаты:</p>
            <p lang='kk' className='date-desc'>2023 жылдың 19 қараша күні сағат: 16:00.</p>
          </div>
          <div className='kallendar'>
            <p lang='kk' className='kallendar-title'> қараша</p>
          <div className='kallendar-box'>
          <div className='dates'>
      <ul className='weekdays'> 
        <li>ДС</li>
        <li>СС</li>
        <li>СР</li>
        <li>БС</li>
        <li>ЖМ</li>
        <li>СБ</li>
        <li>ЖБ</li>
      </ul>
      <ul class="days">  
          <li style={{color:'lightgrey'}}>30</li>
          <li style={{color:'lightgrey'}}>31</li>

          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li className='dayactive'>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li style={{color:'lightgrey'}}>1</li>
          <li style={{color:'lightgrey'}}>2</li>
          <li style={{color:'lightgrey'}}>3</li>
    </ul>
      </div>
          </div>
          </div>
          <div className='timer-box'>
      <div className="timer">
              <div className="timer__items">
              <div className="timer__item timer__days">{timeRemaining.days}<br/><p lang='kk' className='date-named-word'>күн</p></div>
                <div className="timer__item timer__hours">{timeRemaining.hours}<br/><p lang='kk' className='date-named-word'>cағат</p></div>
                <div className="timer__item timer__minutes">{timeRemaining.minutes}<br/><p lang='kk' className='date-named-word'>минут</p></div>
                <div className="timer__item timer__seconds">{timeRemaining.seconds}<br/><p lang='kk' className='date-named-word'>секунд</p></div>
                {/* <div className="timer__item timer__days">{timeRemaining.days}<br/> күн</div>
                <div className="timer__item timer__hours">{timeRemaining.hours}<br/>  сағат</div>
                <div className="timer__item timer__minutes">{timeRemaining.minutes}<br/>  минут</div>
                <div className="timer__item timer__seconds">{timeRemaining.seconds}<br/>  секунд</div> */}
              </div>
      </div>
      </div>


      </div>
      <div className='location-box'>
          <div className='location-text'>
          <p lang='kk' style={{margin:0, color:'#f55b2e'}}>Мекен-жайымыз:</p>
          <p lang='kk' style={{margin:0}}>
          Астана қаласы, <br/>
          Караменде би Шакаулы көшесі, 2<br/>
          “Мирас” мейрамханасы
          </p>
                <a href='https://2gis.kz/astana/geo/70000001045920548'><img className='gis-icon' src={gis} alt='gis'/></a>
                <p lang='kk' className='toy-yeleri'>Той иелері:<br/> Даулет - Карлыгаш</p> 
          </div>
          </div>
      <div className='drees-code'>
          <p lang='kk' className='dress-code-title'>Дресс Код:</p>
          <div className='dress-code-styles'>
            <div className='style-descr'>
            <img src={menstyle} alt='men' className='men-style dress-style'/>
            <p lang='kk' className='style-text'>Ерлер қауымы:<br/>Классикалық <br/>костюм</p>
            </div>
            <div className='style-descr'>
            <img src={womenstyle} alt='women' className='women-style dress-style'/>
            <p lang='kk' className='style-text'>Әйелдер қауымы:<br/>Кешкі көйлек</p>

            </div>


          </div>

        </div>
      </div>
      </div>
      {/* <button className='button' onClick={HandleClick}>
        click
      </button> */}
<div class="section">


  <div class="envelope">
    
  <div onClick={HandleClick} class={!clicked ? "envelope__top envelope__top_close" : 'envelope__top'}>
    <img className='env-top-loop' src={enveloptop} alt="envtop" loading='eager'/>
    <img className={helparr? 'helparrow help-arrow-move' :'helparrow'} src={helparrow} alt='helparrow'/>
    </div>   
    
    <div  class={!clicked ? "paper paper_close" : 'paper'}>
      <div className='first-title'>
        <p lang='kk' className='A-name'>Aмирхан</p>
        <p lang='kk' className='nd-name'>&</p>
        <p lang='kk' className='K-name'> Камила</p>
      </div>
      <img className='first-title-img' src={hands} alt='zhenev'/>

    </div>
    
    <div onClick={HandleClick} class="envelope__body">
      <img className='conv-body' src={envolope} alt="envlope" loading='eager'/>
      {/* http://up-skills.ru/test/envelope.svg */}
    </div>
    
  </div>
</div>

    </div>
  );
}

export default App;
