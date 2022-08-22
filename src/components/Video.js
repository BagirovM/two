import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'


import spaceVideo from '../assets/Blue.mp4'
import Space from '../assets/space.jpg'
import Map from '..//assets/map.png'

import image1 from '..//assets/men1.jpg'
import image2 from '..//assets/men2.jpg'
import image3 from '..//assets/men3.jpg'
import image4 from '..//assets/men4.jpeg'



const Video = () => {
    return (
        

    <div className='back'>   
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Galaxy. Travel.</h1>
                <p>World's first civilian space travel.</p>
            <div>
                    <Link to='/training' className='btn'><strong>Training</strong></Link>
                    <Link to='/contact' className='btn btn-light'><strong>Launch</strong></Link>
                </div>
            </div>
        </div> 
        <h1 className='us'>About US</h1>
        <p className='info'>ALL INFORMATION ABOUT OUR COMPANY FROM THE BOTTOM</p>
        <div className='People-travel'>
            <img src={Space} className='spase-people' alt=''/>
        <h2 className='reasons'>Reasons why you should visit space with our company</h2> 
        <h4 className='whywe'>It will be much more fun, comfortable and cozy with us. You can trust us completely . We also insure your health. We also often have profitable packages for space. There are discounts for regular customers. For questions, you can contact (+994)50-210-88-92 or write to Whatsapp</h4>   
        <Link to='/contact'><button className='button btc contact co'>Contact</button></Link>
        </div> <hr className='hr'></hr>
        
             <div className='map-part'> 
             <div><h1 className='office'>Our Office</h1></div>
             <p className='office-bottom'>IN THE BOTTOM YOU CAN SEE HOW EASY YOU CAN FIND OUR OFFICE</p>
                <img src={Map} className='map-img'/>
           
            <h4 className='how-find'>Brief content as you can find our office.You can find our office in Baku not far from Ganglek Mall. As you passed by the Gyajilik mall, you need to go to the front for 60 meters, turn to the left there will be a large market named BRAVO after you have passed the market, you will see our office from the top written GLX TRVL</h4>
            <hr className='hr'></hr>
        <div className='who'>

            <div>
                <h1 className='trust-us'>People who traveled with us in outer space</h1>
              <img src={image1} className="Men-first"></img>
              <h4 className='o'><span className='hey'>Hi my name is John</span> The company GLX TRVLis simply gorgeous. I really liked the service very much, I just advise everyone. If there is an opportunity, I will come to them again. Helped to choose a tour into space.I did not regret that I turned to them</h4>
              <img src={image2} className="Men-first"></img>
              <h4 className='o'><span className='hey'>Hi my name is Mike</span> The company GLX TRVLis simply gorgeous. I really liked the service very much, I just advise everyone. If there is an opportunity, I will come to them again. Helped to choose a tour into space.I did not regret that I turned to them</h4>
              <img src={image3} className="Men-first"></img>
              <h4 className='o'><span className='hey'>Hi my name is Milla</span> The company GLX TRVLis simply gorgeous. I really liked the service very much, I just advise everyone. If there is an opportunity, I will come to them again. Helped to choose a tour into space.I did not regret that I turned to them</h4>
              <img src={image4} className="Men-first"></img>
              <h4 className='o'><span className='hey'>Hi my name is Sam</span> The company GLX TRVLis simply gorgeous. I really liked the service very much, I just advise everyone. If there is an opportunity, I will come to them again. Helped to choose a tour into space.I did not regret that I turned to them</h4>
             
            </div>
            
           
        </div>            
            </div>
    </div>
    
   
    )
}

export default Video