import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='Top'>
                <div className='footer-title'>
                    <h1>AVM18</h1>
                    <p>Chase Your Dreams</p>
                </div>
                <div className='icons'>
                    <a href=''><i class="fa-brands fa-facebook"></i></a>
                    <a href=''><i class="fa-brands fa-square-instagram"></i></a>
                    <a href=''><i class="fa-brands fa-square-x-twitter"></i></a>
                    <a href=''><i class="fa-brands fa-square-whatsapp"></i></a>
                </div>
            </div>

            <div className='bottom'>
                <div className='columns1'>
                    <h3>Project</h3>
                    <a href=''>Changelog</a>
                    <a href=''>status</a>
                    <a href=''>versions</a>
                    <a href=''>All versions</a>
                </div>
                <div className='columns2'>
                    <h3>Community</h3>
                    <a href=''>GitHub</a>
                    <a href=''>Issues</a>
                    <a href=''>project</a>
                    <a href=''>Twitter</a>
                </div>
                <div className='columns3'>
                    <h3>Help</h3>
                    <a href=''>Support</a>
                    <a href=''>Troubleshooting</a>
                    <a href=''>Contsct Us</a>
                    
                </div>
                <div className='columns4'>
                    <h3>Other</h3>
                    <a href=''>Terms of service</a>
                    <a href=''>Privacy policy</a>
                    <a href=''>Licence</a>
                </div>

            </div>
            <div className='create'><p><a>Copyright 1999-2023 by Refsnes Data.</a> All Rights Reserved.</p></div>
        </div>

    )
}

export default Footer