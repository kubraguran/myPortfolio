import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
    return (
        <div>
        <main className='main'>
     <article className='article-info'>
   <div className='infos'>
       <h1>Kubra Guran</h1>
       <h3>Junior Front End Developer</h3>
       <p className='home-p'>Information Technology Student</p>
       <p>If you want to reach me just click on the icons!</p>
       <br />

   </div>
   <div className='article-socialMedia'>
  
       <ul>
       <li className='icon'><a href = "https://github.com/kubraguran"><GitHubIcon style={{fontSize:"4.5rem"}}/></a></li>
       <li className='icon'> <a href ="https://www.linkedin.com/in/kubraguran/"> <LinkedInIcon  style={{fontSize:"4.5rem", color: "#0072b1"}}/></a> </li>
     </ul>
  </div>
       </article>
       <article >
        <img className='article-pic' src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyimiaRobn9GSZEPteLmq_WDRPWAAgtGOi0vhmtNKfaJa9PuNL81vJpKrBhcAQlVRv4Zk&usqp=CAU" alt = '...'/>
       </article>
            </main>

        </div>
    )
}

export default Home