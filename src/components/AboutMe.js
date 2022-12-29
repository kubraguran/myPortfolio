import React from 'react'
import kguran from './images/kguran-resume.png'

function AboutMe() {
  return (
    <div>
      <main className='aboutme'>
        <article className='aboutme-info'>
          <h5>Hello, my name is Kubra Guran</h5>
          <br/>
          <p>I am Information Technology Student at Collegium Da Vinci.My passion is learning new technologies and creating new ideas.</p>
          <a href = {kguran}><p>For my resume please click</p></a>
          <ul>
            <li>
              <span>Email: </span><p>kubraguran00@gmail.com</p>
            </li>
            <li>
              <span>Mobile Number: </span><p>+48 694 699 506</p>
            </li>
            <li>
              <span>Country/City: </span><p>Poland/Poznan</p>
            </li>
          </ul>
        </article>
        <article className='aboutme-cert'>
          <h5>Certificates I Have</h5>
          <br/>
          <ul>
            <li>
              <p>IELTS-2021 - B2</p>
            </li>
            <li>
              <a href='https://www.freecodecamp.org/certification/bendebiliyom/javascript-algorithms-and-data-structures'> <p>JavaScript Algorithms and Data Structures - FreeCodeCamp</p></a>
            </li>
            <li>
              <a href='https://www.freecodecamp.org/certification/bendebiliyom/responsive-web-design'> <p>Responsive Web Design - FreeCodeCamp</p></a>
            </li>
            <li>
              <a href='https://app.patika.dev/certificates/F49iR2J'><p>Web Development Course</p></a>
            </li>
            <li>
              <a hred='https://app.patika.dev/certificates/F49mc8P'><p>Web Development Bootcamp - Javascript and React</p></a>
            </li>

          </ul>
        </article>
      </main>

    </div>
  )
}

export default AboutMe