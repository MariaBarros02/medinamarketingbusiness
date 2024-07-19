import Navegacion from "../layout/Navegacion"
import HeroGeneral from "../layout/HeroGeneral"
import FooterGeneral from "../layout/FooterGeneral"
import CardBoton from "../components/CardBoton"
import { Card } from "flowbite-react"

const Properties = () => {
  return (
    <>
      <Navegacion />
      <HeroGeneral
        pagina="Properties"
      />
      <section className=" ">
        <div className="w-10/12 m-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 " >
          <CardBoton
            imagen="/properties/property_1/livingRoom_2.webp"
            titulo="Red Bluff, California: Luxury House Next to the Fair"
            parrafo="Relax in this tranquil and elegant space. This fully equipped house offers comfortable sleeping areas, with curtains in all bedrooms for a better rest. Enjoy a well-equipped kitchen, free parking, and a location just 5 minutes from downtown and the Red Bluff fairgrounds!"
            boton="MORE INFORMATION"
          />
        </div>
      </section>
      <FooterGeneral />
    </>
  )
}

export default Properties