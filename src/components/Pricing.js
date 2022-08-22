import React from 'react'
import { Link } from 'react-router-dom'
import './PricingStyles.css'


import image from '../assets/space.jpg'

function Pricing() {
  return (
    <div className='pricing'>
        <h1 className='ticket'>Ticket Price</h1>
        <div className='card-container'>
            <div className='card'>
                <h3>-Basic-</h3>
                <span className='bar'></span>
                <p className='btc'>1 BTC</p>
                <p>3 Days</p>
                <p>Views</p>
                <p>Featured</p>
                <p className='p'>Private Quarters</p>
                <Link to='/contact' className='btc book'>Book</Link>
            </div>
            <div className='card'>
                <h3>-Suite-</h3>
                <span className='bar'></span>
                <p className='btc'>2 BTC</p>
                <p>3 Days</p>
                <p>Views</p>
                <p>Featured</p>
                <p className='p'>Private Quarters</p>
                <Link to='/contact' className='btc bok'>Book</Link>
            </div>
            <div className='card'>
                <h3>-VIP-</h3>
                <span className='bar'></span>
                <p className='btc'>3 BTC</p>
                <p>3 Days</p>
                <p>Views</p>
                <p>Featured</p>
                <p className='p'>Private Quarters</p>
                <Link to='/contact' className='btc bok'>Book</Link>
            </div>
             </div>
        <div className='di'>
             <h2 className='discount'>DISCOUNTS FOR A COMPANY OF 4 PEOPLE!!!</h2>
             <h4 className='people'><span className='con'>Discount</span> for the end of August, have time to buy! don't miss the chance! 4 tickets for just 0.5 btc the tour package includes a 7-day tour with beautiful views with food 3 times a day we also guarantee that this trip will remain in print forever DO NOT MISS THIS CHANCE SUCH DISCOUNT PACKAGES ARE VERY RARE.If you want to buy tickets, click on <span className='con'>Contact!</span> </h4>
             <img src={image} className='company' alt=''/>
             <Link to='/contact'><button className='button btc contact'>Contact</button></Link>
</div><hr className='hr'></hr>
    </div>
  )
}

export default Pricing