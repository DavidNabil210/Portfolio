import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import deved from "../Navbar/dev-ed-wave.png"
import design from "../Navbar/design.png"
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
            <h3 className='text-2xl py-2'>dev </h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Voluptatem saepe earum ducimus tempora quisquam eos tenetur similique corrupti maiores dolorum?</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillGithub/>
            <AiFillTwitterCircle/>
            <AiFillFacebook/>

          </div>
           <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 '>
           <img 
                src={deved} 
                alt="Wave" 
              
            />
           </div>
        </section>

        {/* section two */}
        <section>
          <div>
            <h3 className="text-3xl py-1">
            Service I offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iure qui possimus repellat vel minus atque officia provident quasi quam iusto, distinctio saepe consequuntur omnis adipisci dolore aliquam enim. Consequuntur.
            </p>

          </div>
          
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              
              <img src={design} alt="design" width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">beautiful designs</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dolorum!</p>
              <h4 className="text-teal-800">design tools i use</h4>
              <p className="py-4 text-gray-600">photoshop</p>
              <p className="py-4 text-gray-600">Illustrator</p>
              <p className="py-4 text-gray-600">figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              
              <img src={design} alt="design" width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">beautiful designs</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dolorum!</p>
              <h4 className="text-teal-800">design tools i use</h4>
              <p className="py-4 text-gray-600">photoshop</p>
              <p className="py-4 text-gray-600">Illustrator</p>
              <p className="py-4 text-gray-600">figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              
              <img src={design} alt="design" width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">beautiful designs</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, dolorum!</p>
              <h4 className="text-teal-800">design tools i use</h4>
              <p className="py-4 text-gray-600">photoshop</p>
              <p className="py-4 text-gray-600">Illustrator</p>
              <p className="py-4 text-gray-600">figma</p>
            </div>
          </div>
        </section>

        {/* section three */}

        <section>
          <div>
            <h3 className="text-3xl py-1">portfolio</h3>
            <p className="text-teal-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, fuga?</p>
       
           
          </div>
        </section>
      </main>
    </>
  );
}

export default NavBar;