import { BsFillMoonFillStars } from 'react-icons'
import {AifillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
function NavBar() {

  return (

    <>
      <main className='bg-white px-10'>
        <section className="bg-blue-700 min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>hello</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonFillStars className='cursor-pointer text-2xl' />
              </li>
              <li>
                <a href="#" className='bg-gradient-to-r from-bg-cyan-500 to-teal-500 px-2 py-4 text-white'>Resume</a>
              </li>

            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>developer</h2>
            <h3>dev</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Voluptatem saepe earum ducimus tempora quisquam eos tenetur similique corrupti maiores dolorum?</p>
          </div>
          <div>
            <AiFillLinkedin/>
            <AifillTwitterCircle/>
            <AiFillYoutube/>

          </div>
           
        </section>
      </main>
    </>
  );
}

export default NavBar;