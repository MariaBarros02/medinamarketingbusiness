import Navegacion from "../layout/Navegacion"
import HeroGeneral from "../layout/HeroGeneral"
import FooterGeneral from "../layout/FooterGeneral"
import { Button } from "flowbite-react"
import { Link } from "react-router-dom"

const Guests = () => {
  return (
    <>
      <Navegacion />
      <HeroGeneral
        pagina='Guests'
      />
      <section className=" py-16">
      </section>
      <section className="bannerContacto h-auto lg:grid lg:grid-cols-2 ">
        <div className="bg-cyan-950 p-5 text-white ">
          <p className="text-xl fuenteTitulo sm:text-5xl">Experience Quality Accommodations</p>
          <p className="text-sm my-3" >We pride ourselves on providing top-quality accommodations that cater to your every need. If you have any questions or need assistance with your booking, don't hesitate to reach out to us. </p>
          <Button className="my-5  w-40 text-cyan-950 font-bold " color="light" as={Link} to="/properties">
            CONTACT US

          </Button>

        </div>
        <div className="bg-white bg-opacity-50 p-10  m-5 text-white ">
          <img className="w-52 m-auto" src="/images/airbnbLogo_1.png" alt="logo-airbnb" />
        </div>

      </section>
      <section className=" py-16">
      </section>
      <FooterGeneral />
    </>
  )
}

export default Guests