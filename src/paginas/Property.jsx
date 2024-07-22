import Navegacion from "../layout/Navegacion"
import HeroGeneral from "../layout/HeroGeneral"
import FooterGeneral from "../layout/FooterGeneral"
import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { Button, Carousel, Rating } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import propiedades from "../data/propiedades.js"
import 'leaflet/dist/leaflet.css';



const Property = () => {

  const { id } = useParams();


  /*  const [propiedad, setPropiedad] = useState([]);
  
    useEffect(() => {
      const obtenerPropiedad = async () => {
        try {
          const { data } = await axios.get("http://localhost:8000/propiedades");
          setPropiedad(data[id - 1]);
        } catch (error) {
          console.log(error)
        }
      }
      obtenerPropiedad();
    }, []);
  */
  console.log(propiedades)
  const { titulo, ciudad, descripcion, mapa, imagenes, puntuacion, calificaciones, estrellas, parrafo,link } = propiedades[id - 1];


  return (

    <>
      <Navegacion />
      <HeroGeneral
        pagina="Properties"
        clase="heroProperty"
      />

      <section className="pt-10 pb-5">

        <div className="w-10/12 m-auto md:flex md:justify-between md:items-center font-bold  ">

          <div className="flex  md:items-center">

            <Link to="/properties" className="hidden md:inline">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-left" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#083344" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" />
                <path d="M8 12l4 4" />
                <path d="M8 12h8" />
                <path d="M12 8l-4 4" />
              </svg>
            </Link>
            <p className="text-cyan-950 mb-2 text-center text-3xl md:w-full md:pl-2 md:mb-0 md:text-left md:text-2xl lg:text-3xl">{titulo}</p>

          </div>



          <p className="text-yellow-600 text-center  md:text-right ">{ciudad}</p>
        </div>

      </section >

      <section className="pb-5">
        <div className="w-10/12 m-auto lg:grid lg:gap-5 lg:grid-cols-3">
          <div className=" h-80 lg:col-span-2 md:mb-5">
            <Carousel slideInterval={5000}>
              {
                imagenes.map(imagen => (
                  <img className="" src={`/properties/property_${id}/${imagen}.webp`} alt="..." />
                ))
              }
            </Carousel>
          </div>
          <div>
            <div className="">
              <Rating className="mb-2">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{`${puntuacion} out of 5`} </p>
              </Rating>
              <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">{`${calificaciones} global ratings `} <Link className="underline" to={link} target="_blank" >on Airbnb</Link> </p>
              <Rating.Advanced percentFilled={estrellas[0]} className="mb-2">
                5 star
              </Rating.Advanced>
              <Rating.Advanced percentFilled={estrellas[1]} className="mb-2">
                4 star
              </Rating.Advanced>
              <Rating.Advanced percentFilled={estrellas[2]} className="mb-2">
                3 star
              </Rating.Advanced>
              <Rating.Advanced percentFilled={estrellas[3]} className="mb-2">
                2 star
              </Rating.Advanced>
              <Rating.Advanced percentFilled={estrellas[4]}>1 star</Rating.Advanced>
            </div>
            <p className="text-gray-700 mt-5 font-bold  text-2xl">Entire accommodation: <br/><span className="font-normal text-2xl">{parrafo}</span></p>

          </div>


        </div>

      </section>

      <section className="pb-10">
        <div className="w-10/12 m-auto " >
          <iframe className="w-full h-60 iframe" src={`https://www.google.com/maps/embed?${mapa}`} style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </section>

      <FooterGeneral />
    </>
  )
}

export default Property