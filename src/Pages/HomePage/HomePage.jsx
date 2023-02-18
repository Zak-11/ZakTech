import React from 'react';
import './HomePage.scss';
import Computer from'../../asset/hom2.png';


export const HomePage = () => {
  
return (
<>

<div className='baner'>




   
<div className='banerText'>
    <h1>Let’s <span>built</span> or improve your digital product </h1>

    <h2>THE CLEAR VISION</h2>
    <p>
    To us, world-class digital products take more than intelligent code or creative design. It requires true partnership between the ideators and the innovators. Our collaborations are built on a bedrock of transparency, communication, 
    expert project management, and attention to detail.
    </p>

    <button className='bootonBaner'>Contact Us</button>
</div>
     
 
<div className='bannerImage'>
   
   <img src={Computer} alt="Computer" />


    </div>
 



</div>




<div className='aboutOur'>
   <div>
<h1>About</h1>
<p>Our Company
Digital Solutions is a California - based development agency that partners with businesses to enhance their digital presence.
 Our expertise in creating high-quality digital products, such as websites and applications, 
 drives business growth and increases efficiency for our clients.
 Our in-house team of product builders works collaboratively to deliver meaningful 
 results and create long-term value for our clients.</p>
   </div>
 






</div>

</>

)


}