import data_annotation from "../../public/Images/data-annotation.jpg"
// import html from "../../public/Images/html.png"
// import css from "../../public/Images/css.jpg"
// import bootstrap from "../../public/Images/Bootstrap.png"
// import javascript from "../../public/Images/javascript.png"
// import reactj from "../../public/Images/reactjs.png"
// import vite from "../../public/Images/vite.svg"

function Experiance() {
 const cartItem = [
     {
       id: 1,
       logo: data_annotation,
       name: "Daata Annotation"
     }
    //  {
    //    id: 2,
    //    logo: html,
    //    name: "HTMT"
    //  },
    //  {
    //    id: 3,
    //    logo: css,
    //    name: "CSS"
    //  },
    //  {
    //    id: 4,
    //    logo: bootstrap,
    //    name: "Bootstrap"
    //  },
    //  {
    //    id: 5,
    //    logo: javascript,
    //    name: "JavaSacrit"
    //  },
    //  {
    //    id: 6,
    //    logo: reactj,
    //    name: "React Js"
    //  },
    //  {
    //    id: 7,
    //    logo: vite,
    //    name: "Vite"
    //  },
   ]
 
 
   return (
     <>
       <div name="Experiance" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
         <h1 className='text-3xl font-bold mb-5'>Experiance</h1>
         <p>I' ve more than 1.5 years of experiance in outher profile</p>
         <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 my-5">
           {
             cartItem.map(({ id, logo, name }) => {
               return (<div className="flex flex-col items-center justify-center md:w-[200px] md:h-[250px] rounded-full p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                 <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full" alt="" />
                 <div>
                   <div className=" ">{name}</div>
                 </div>
               </div>);
             })
           }
         </div>
       </div>
     </>
   )
}

export default Experiance
