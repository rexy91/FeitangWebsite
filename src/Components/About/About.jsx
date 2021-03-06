import React, { Component } from 'react';
import './About.scss'

class About extends Component {
    render() {
        return (
            <div id='about-page'>
                <div id='about-paragraph-div'>
                    <h2>ABOUT US</h2>
                    <p>Since FeiTang Group Inc. Established, our in-depth knowledge of local and international markets, abundant capital and strong financing ability, advanced technology, and commitment to our clients have earned us the trust of customers and partners.</p>
                    <br/>
                    <p>To keep competitive in the market, we also focued on improiving the way we do business, by listening to the needs of customers and exploring in different fields. Our mission to make a difference for our loyal customers.</p>
                    
                </div>
                
                <div id='commitment-title-div'>
                <h2>OUR COMMITMENTS</h2>
                </div>
                <div id='commitments-div'>
                    <div className='single-commitment'>
                         <img className='commitments-image'src="https://www.flaticon.com/svg/static/icons/svg/1161/1161490.svg" alt=""/>
                         <br/>
                         Provide the best value and quality products for our customers.
                    </div>
                    <div className='single-commitment'>
                         <img className='commitments-image'src="https://www.flaticon.com/svg/static/icons/svg/3126/3126649.svg" alt=""/>
                         <br/>
                         Ensure every customer is satisfied through superior service and innovation.
                    </div>
                    <div className='single-commitment'>
                         <img className='commitments-image'src="https://www.flaticon.com/svg/static/icons/svg/1063/1063376.svg" alt=""/>
                         <br/>
                         Utilize our core business values of honesty, commitment, <br/>and integrity to drive all of our decisions.
                    </div>
                    <div className='single-commitment'>
                         <img className='commitments-image'src="https://www.flaticon.com/svg/static/icons/svg/1342/1342065.svg" alt=""/>
                         <br/>
                         Continue to grow and innovate to maintain customer loyalty.
                    </div>
                </div>
            </div>
        );
    }
}

export default About;