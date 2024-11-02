import React from 'react';


function Footer(){
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return(<footer class="footer">©Copyright {currentYear}</footer>);
}

export default Footer;