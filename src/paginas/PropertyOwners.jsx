import Navegacion from "../layout/Navegacion"
import HeroGeneral from "../layout/HeroGeneral"
import FooterGeneral from "../layout/FooterGeneral"
import BannerBeyond from "../components/BannerBeyond"
import Space from "../components/Space"
import CardFoto from "../components/CardFoto"
import { Banner, Button } from "flowbite-react"
import { Link } from "react-router-dom"


const PropertyOwners = () => {
  return (
    <>
      <Navegacion />
      <HeroGeneral
        pagina="Property Owners"
      />
      <section className="bg-gray-200 py-10">
        <div className=" w-10/12 m-auto text-center lg:w-8/12  lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center">
          <img src="/images/image_16.jpg" alt="image_propertyOwners" className="rounded-full border-white m-auto border-4 shadow-xl w-80 mb-5 lg:mb-0" />
          <p className="text-sm text-gray-700">
            Welcome to the Property Owners section of Medina Marketing Business. Here, we offer a seamless and profitable way for you to list your property and reach a broad audience of potential guests. Our platform provides comprehensive support, from professional photography and detailed descriptions to robust marketing strategies that highlight your property’s unique features. Partnering with us ensures your property is well-maintained, effectively marketed, and consistently booked, maximizing your rental income and giving you peace of mind.
          </p>
        </div>
      </section>

      <section className="banner banner--bg_2 ">
        <div className="bg-black bg-opacity-50 py-20">
          <div className="w-10/12 m-auto md:grid md:grid-cols-2 md:gap-x-8  lg:grid-cols-3">
           
            <CardFoto
              imagen="/images/image_17.jpg"
              titulo="Professional Property Management"
              parrafo="Benefit from our professional property management services. We handle everything from regular maintenance and cleaning to guest communication and check-ins, allowing you to enjoy hassle-free property ownership."
            />
            <CardFoto
              imagen="/images/image_18.jpg"
              titulo="Maximize Your Income"
              parrafo="Partner with Medina Marketing Business to optimize your rental income. Our extensive marketing strategies and high-visibility listings attract a wide range of guests, ensuring your property is booked consistently and generates maximum revenue."
            />
            <CardFoto
              imagen="/images/image_19.jpg"
              titulo="Comprehensive Support"
              parrafo=" Receive comprehensive support throughout the rental process. Our team provides expert advice on property presentation, pricing strategies, and guest relations to help you achieve the best possible results."
            />

          </div>
        </div>
      </section>
      <BannerBeyond/>

      <section className="banner banner--bg_1">
        <div  className="bg-white bg-opacity-50 py-20 text-center ">
            <p className="w-8/12 m-auto text-xl mb-5 fuenteTitulo text-gray-800 md:text-3xl">
              Are you ready to maximize your property’s potential with Medina Marketing Business? We invite you to get in touch with us today.
            </p>
            <Button className=" m-auto w-40 font-bold bg-cyan-950 " as={Link} to="mailto:mmv@medinamarketingbusiness.com">
              CONTACT US
            </Button>
        </div>
      </section>
      <Space/>

      <FooterGeneral />
    </>
  )
}

export default PropertyOwners