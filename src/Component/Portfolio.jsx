import html from "../../public/Images/html.png"
import css from "../../public/Images/css.jpg"
import bootstrap from "../../public/Images/Bootstrap.png"
import javascript from "../../public/Images/javascript.png"
import reactj from "../../public/Images/reactjs.png"
import vite from "../../public/Images/vite.svg"

const Portfolio = () => {

  const cartItem = [
    {
      id: 1,
      logo: html,
      name: "HTMT"
    },
    {
      id: 2,
      logo: css,
      name: "CSS"
    },
    {
      id: 3,
      logo: bootstrap,
      name: "Bootstrap"
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaSacrit"
    },
    {
      id: 5,
      logo: reactj,
      name: "React Js"
    },
    {
      id: 6,
      logo: vite,
      name: "Vite"
    },
  ]


  return (
    <>
      <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
        <span className='underline font-semibold'>Featured Projects</span>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
          {
            cartItem.map(({ id, logo, name }) => {
              return (<div className=" md:w-[300px] md:h-[300px] border-[2px] border-gray-500 rounded-lg shadow-md p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt="" />
                <div>
                  <div className="px-2 py-3 font-bold text-xl md-2 ">{name}</div>
                  <p className="px-2 text-gray-700">Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="px-6 py-4 space-x-3 justify-around">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video</button>
                  <button className="bg-green-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Source Code</button>
                </div>
              </div>);
            })
          }
        </div>
      </div>
    </>
  )
}

export default Portfolio
