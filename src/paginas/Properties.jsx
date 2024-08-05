import Navegacion from "../layout/Navegacion"
import HeroGeneral from "../layout/HeroGeneral"
import FooterGeneral from "../layout/FooterGeneral"
import CardBoton from "../components/CardBoton"
import propiedades from "../data/propiedades"
import { Card } from "flowbite-react"
import { useEffect, useState } from "react"
import axios from 'axios';



const Properties = () => {
  /*const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    const obtenerPropiedades = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/propiedades");
        setPropiedades(data);
      } catch (error) {
        console.log(error)
      }
    }
    obtenerPropiedades();
  }, []);*/


  return (
    <>
      <Navegacion />
      <HeroGeneral
        pagina="Properties"
      />

      <section className=" ">
  
        
        <div className="w-10/12 m-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 " >

          {propiedades.map(propiedad => (
            <CardBoton
            key={propiedad.id}
            imagen={`/properties/property_${propiedad.id}/principal.webp`}
            titulo={propiedad.titulo}
            ubicacion={propiedad.ciudad}
            parrafo={propiedad.descripcion}
            boton="MORE INFORMATION"
            link={`/properties/property/${propiedad.id}`}
            />
          ))}
        </div>
      </section>
      <FooterGeneral />
    </>
  )
}

export default Properties