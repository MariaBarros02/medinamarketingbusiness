import Navegacion from "../layout/Navegacion"
import HeroGeneral from "../layout/HeroGeneral"
import FooterGeneral from "../layout/FooterGeneral"
import { useParams } from "react-router-dom"
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

        <div className="w-10/12 m-auto flex justify-between items-center font-bold text-xs ">

          <div className="flex items-center">

            <Button outline pill>
              <HiOutlineArrowLeft className="h-4 w-4 " />
            </Button>
            <p className="text-cyan-950 pl-2 lg:text-2xl">{titulo}</p>

          </div>



          <p className="text-yellow-600 lg:text-sm">{ciudad}</p>
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