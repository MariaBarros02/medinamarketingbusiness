import Navegacion from "../layout/Navegacion"
import HeroGeneral from "../layout/HeroGeneral"
import FooterGeneral from "../layout/FooterGeneral"
import BannerBeyond from "../components/BannerBeyond"
import CardFoto from '../components/CardFoto'
import { Banner } from "flowbite-react"

const AboutUs = () => {
  return (
    <>
      <Navegacion />
      <HeroGeneral
        pagina="About Us"
      />
      <section className="py-10">
        <div className="w-10/12 m-auto text-center text-sm text-gray-700 grid grid-cols-1 items-center gap-6 lg:grid-cols-3 ">
          <div>
            <h2 className="font-bold text-3xl text-cyan-950 uppercase pb-2">Mission</h2>
            <p >
              Our mission at Medina Marketing Business is to deliver outstanding hospitality services by offering a diverse range of high-quality properties that cater to the unique needs of our guests. We are committed to maintaining the highest standards of cleanliness, comfort, and customer satisfaction. Through innovative marketing strategies and professional property management, we strive to create seamless and enjoyable experiences for both our guests and property owners.
            </p>
          </div>
          <img src="/images/logo_2.png" className="rounded-full border-4 shadow-xl w-48 m-auto" alt="imagen-mission-vision" />
          <div>
            <h2 className="font-bold text-2xl text-cyan-950 uppercase pb-2">Vision</h2>
            <p>
              At Medina Marketing Business, our vision is to revolutionize the travel and accommodation industry by providing exceptional and personalized experiences for our guests. We aim to be the leading choice for travelers seeking quality, comfort, and convenience, while fostering strong partnerships with property owners to maximize their rental potential and ensure mutual success.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-10">
        <div className="text-gray-700 text-center w-10/12 m-auto">
          <h2 className="text-3xl font-bold mb-5 uppercase  ">Who we are?</h2>
          <p className="text-sm">At Medina Marketing Business, we are dedicated to transforming the way people experience travel and accommodation. With a passion for excellence and a commitment to customer satisfaction, we provide a wide array of high-quality properties that cater to the diverse needs of travelers. Our team of professionals works tirelessly to ensure every stay is comfortable, convenient, and memorable.

            Founded on the principles of trust, reliability, and innovation, Medina Marketing Business has become a trusted name in the industry. We partner with property owners to offer well-maintained, beautifully presented accommodations that provide exceptional value. Whether you're planning a short getaway or a long-term stay, you can count on us to deliver top-notch service and an unforgettable experience.
          </p>
        </div>
      </section>

      <section className="w-10/12 m-auto py-10">
        <p className=" mb-10 text-4xl font-bold text-yellow-600 uppercase text-center lg:text-left">Principal Values</p>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
          <CardFoto
            imagen="/images/image_20.jpg"
            titulo="Excellence"
            parrafo=" We strive for excellence in everything we do. From the quality of our properties to the level of our customer service, we are dedicated to exceeding expectations and providing outstanding experiences for our guests and property owners."
          />
          <CardFoto
            imagen="/images/image_21.jpg"
            titulo="Innovation"
            parrafo=" We embrace innovation to stay ahead in the industry. By continuously exploring new ideas and technologies, we enhance our services and offer cutting-edge solutions that improve the experience for both our guests and property owners."
          />
          <CardFoto
            imagen="/images/image_22.jpg"
            titulo="Customer Focus"
            parrafo=" Our guests and property owners are at the center of everything we do. We listen to their needs, provide personalized service, and strive to create exceptional experiences that meet and exceed their expectations."
          />

        </div>
      </section>
      <section className="banner banner--bg_3 ">
        <div className=" bg-white py-10 bg-opacity-50">
          <div className=" w-10/12 m-auto text-center text-white py-10  bg-yellow-600 lg:w-1/2">
            <h3 className="text-5xl font-bold mb-5 fuenteTitulo">CONTACT</h3>
            <p className="text-sm "> mmv@medinamarketingbusiness.com <br />

              611 Wilshire Blvd Suite 900 #1008, <br />
              Los Angeles CA 90017 <br />

              (800) 769-6835
            </p>

          </div>

        </div>
      </section>
      <BannerBeyond />

      <FooterGeneral />
    </>
  )
}

export default AboutUs