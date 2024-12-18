import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";

function NavBar() {

  return (

    <>
      <main className='bg-white px-10'>
        <section className="bg-blue-800 ">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>hello</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
              </li>
              <li>
                <a href="#" className='bg-gradient-to-r from-bg-cyan-500 to-teal-500 px-2 py-4 text-white'>Resume</a>
              </li>

            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>developer</h2>
            <h3 className='text-2xl py-2'>dev david</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Voluptatem saepe earum ducimus tempora quisquam eos tenetur similique corrupti maiores dolorum?</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillGithub/>
            <AiFillTwitterCircle/>
            <AiFillFacebook/>

          </div>
           <div className=''>

           </div>
        </section>
      </main>
    </>
  );
}

export default NavBar;