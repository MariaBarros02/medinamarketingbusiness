import Navegacion from "../layout/Navegacion"
import HeroGeneral from "../layout/HeroGeneral"
import FooterGeneral from "../layout/FooterGeneral"
import { useParams, Link} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { Button } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import propiedades from "../data/propiedades.js"


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
  const { titulo, ciudad, descripcion, mapa, imagenes } = propiedades[id - 1];


  return (

    <>
      <Navegacion />
      <HeroGeneral
        pagina="Properties"
      />

      <section className="pt-10 pb-5">

        <div className="w-10/12 m-auto flex justify-between items-center font-bold text-sm ">

          <div className="flex items-center">

            <Link to="/properties">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-left" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#083344" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" />
                <path d="M8 12l4 4" />
                <path d="M8 12h8" />
                <path d="M12 8l-4 4" />
              </svg>
            </Link>
            <p className="text-cyan-950 pl-2 md:text-xl w-3/5 md:w-full lg:text-2xl">{titulo}</p>

          </div>



          <p className="text-yellow-600 text-right lg:text-sm">{ciudad}</p>
        </div>

      </section >
      <section className="pb-10">
        <div className="w-10/12 m-auto " >
          <iframe className="w-full h-60" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d18557.364409156176!2d-122.21657593583618!3d40.18698711810877!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1721612581591!5m2!1ses!2smx" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </section>
      <FooterGeneral />
    </>
  )
}

export default Property