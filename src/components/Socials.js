import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaGooglePlus, FaSnapchat, FaYoutube } from 'react-icons/fa';
const Socials = () => {
  return (
    <div className='socials'>
    <ul>
  <li>
    <a class="facebook" href="https://www.youtube.com/watch?v=zlY2d8lURKE">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <FaYoutube/>
    </a>
  </li>
  <li>
    <a class="twitter" href="https://twitter.com/earthlyelder">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <FaTwitter/>
    </a>
  </li>
  <li>
    <a class="instagram" href="https://www.instagram.com/earthlyelder/">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <FaInstagram/>
    </a>
  </li>
  <li>
    <a class="google" href="https://t.snapchat.com/zPQH1Akq">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <FaSnapchat/>
    </a>
  </li>
</ul>
    </div>
  )
}

export default Socials