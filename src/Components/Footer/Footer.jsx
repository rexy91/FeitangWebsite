import React, { Component } from 'react';
import './Footer.scss'

class Footer extends Component {
    render() {
        return (
            <div>
<footer class="page-footer font-small unique-color-dark pt-4">
    <div id='footer-div'>
        <div>
            <ul class="list-unstyled list-inline text-center py-1">
            <li class="list-inline-item">
                <h5 class="mb-1">Office Address:</h5>
            </li>
            </ul>
            <p class='py-1 mr-5'>1825 Atlantic Avenue Brooklyn NY 11233</p>
       </div>
       <div>
            <ul class="list-unstyled list-inline text-center py-1">
            <li class="list-inline-item">
                <h5 class="mb-1">Phone Number:</h5>
            </li>
            </ul>
            <p class='py-1 mx-4'>(917)-497-1792</p>
       </div>
    </div>
  <div class="footer-copyright text-center py-3">
    <a href="https://mdbootstrap.com/"> FeiTang Group Inc.</a>
  </div>

</footer>
            </div>
        );
    }
}

export default Footer;