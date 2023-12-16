import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';


function Main(){
  return(
    <div className="hubsem">
    <h3>Why Hubsem Private Solutions</h3>

    <p> At Hubsem Solutions, we are committed to helping businesses establish a strong online presence <br/>
            and achieve remarkable success in the digital world. As a leading web development company, <br/>
            we offer a comprehensive range of services designed to maximize your brand visibility, drive<br/>
             targeted traffic, and generate higher conversions.<br/><hr/>
           
             <br/>
<form>
             <button type="button" className="button" >Click Here to Change style of the paragraph.!</button> 
             </form> 
             </p>
<br/>
<form>
  <button type="submit" value="submit" formAction="#.html" className="button">Contact Us Now</button>
</form>
    </div>
    
  );
}

function Aboutus(){
  return(
    <div className="aboutus">
       <h3>About Us</h3><br/>
<p>    We deliver personalized solutions that align with your unique requirements, understanding your<br/>
             business to maximize online presence and drive results. </p><br/><br/><br/>

             <button type="button" class="button">Click here to get another paragraph here</button><br/>

            

<div className='Aboutus'>
   <div className='About'>
<ul className='about'>
<li><b>Results Driven Approach:</b><p>Achieve tangible results with us, data-driven <br/>
                        approach and dynamic website features too.</p></li>
                     <li><b>Dedicated Support:-</b><p> Count on Hubsem Solutions for dedicated support, <br/>
                        and transparent communication for your website maintenance or any testing for your website.</p></li>
                     <li><b>Experience and Expertise :- </b><p> Extensive expertise in website development as per your requirement. </p></li>
                 </ul>
                 
<div className='image'>
    <img src={logo} className="logo" alt="logo"/>
</div>
</div>
</div>
</div>
  );
}

function Original(){
  return( 
  <div>
  <Main/>
  <Aboutus/>
  </div>
  );  
}

ReactDOM.render(<Original/>,document.getElementById('root'));