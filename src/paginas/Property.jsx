import Navegacion from "../layout/Navegacion"
import HeroGeneral from "../layout/HeroGeneral"
import FooterGeneral from "../layout/FooterGeneral"
import Space from "../components/Space.jsx"
import BannerBeyond from "../components/BannerBeyond.jsx"
import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { Button, Carousel, Rating, Accordion } from "flowbite-react";
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
  const { titulo, ciudad, descripcion, mapa, imagenes, puntuacion, calificaciones, estrellas, parrafo, link, invitados, entretenimiento, areaFamiliar } = propiedades[id - 1];


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
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-left" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#083344" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
          <div className="h-80 md:h-96 -mt-10 md:mt-0 lg:col-span-2 md:mb-5">
            <Carousel slideInterval={5000}>
              {
                imagenes.map((imagen, index) => (
                  <img className="" src={`/properties/property_${id}/${imagen}.webp`} alt="..." key={index} />
                ))
              }
            </Carousel>
          </div>
          <div>
            <div className="m-auto text-center lg:text-left">
              <div>
                <Rating className="mb-2 w-48 lg:w-auto mx-auto " size="lg">
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                </Rating>
              </div>

              <p className="text-3xl md:text-4xl font-bold text-gray-800 ">{`${puntuacion} out of 5`} </p>
              <p className="mb-4 text-sm font-medium text-gray-500">{`${calificaciones} global ratings `} <Link className="underline" to={link} target="_blank" >on Airbnb</Link> </p>

              <div className="hidden lg:block">
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

            </div>
            <p className="text-gray-700 mt-5 font-bold text-center text-2xl lg:text-left">Entire accommodation: <br /><span className="font-normal text-sm">{parrafo}</span></p>

          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="w-10/12 m-auto " >
          <iframe className=" h-60 iframe" src={`https://www.google.com/maps/embed?${mapa}`} style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>

      <section className="w-10/12 m-auto pb-10">
        <h2 className="text-4xl text-yellow-600 font-bold uppercase fuenteTitulo mb-5">Our Services</h2>
        <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="text-gray-700">
            {`This beautiful property comes with a range of amenities designed to make your stay comfortable and enjoyable. ${descripcion}`}
          </div>
          <div className="lg:col-span-2">
            <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title>What This Place Offers
                </Accordion.Title>
                <Accordion.Content>
                  <ul className="list-disc pl-5 mb-2 text-gray-600  text-sm">
                    <li className="pb-2"> <span className="font-bold">Laundry:</span> The laundry area is equipped with a free washer and dryer in the unit. Essentials such as towels, bed sheets, soap, and toilet paper are provided for your convenience. Additionally, you’ll find hangers, an iron, and a closet for clothing storage</li>
                    <li className="pb-2"><span className="font-bold">Entertainment:</span> {entretenimiento}
                    </li>
                    <li className="pb-2"><span className="font-bold">Family area:</span>{areaFamiliar}</li>
                    <li className="pb-2"><span className="font-bold">Fully equipped kitchen:</span> The fully equipped kitchen is available for guest use and includes a refrigerator, microwave, and cooking basics such as pots and pans, oil, salt, and pepper. You’ll also find dishes and silverware (bowls, chopsticks, plates, cups, etc.), a freezer, dishwasher, gas stove, stainless steel oven, electric kettle, drip coffee maker, wine glasses, toaster, blender, dining table, and coffee. This kitchen setup ensures you have everything you need to prepare and enjoy meals during your stay.</li>

                  </ul>

                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Check-in and Check-out information</Accordion.Title>
                <Accordion.Content>
                  <ul className="mb-2  pl-5 list-disc text-gray-600 text-sm">
                    <li className="pb-1">Check-in from 3:00 PM and Check-out before 11:00 AM </li>
                    <li className="pb-1">Maximum of {invitados} guests.</li>
                    <li className="pb-1">Before leaving, please take out the trash, turn off the appliances, and lock the doors.</li>

                  </ul>

                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>House's Rules</Accordion.Title>
                <Accordion.Content>
                  <ol className="mb-2 pl-5 list-decimal text-gray-600 text-sm">


                    <li className="pb-2"> All guests must register. Additional charges will apply if extra people are discovered (you may have visitors, but you must notify us, and they cannot stay overnight). </li>
                    <li className="pb-2">Pets are welcome, but you must ensure they do not cause damage, and they must not sleep on beds or sofas for any reason. A fine of $250 will be charged for violations. </li>
                    <li className="pb-2"> No smoking inside the property, only outdoors. </li>
                    <li className="pb-2">No parties allowed. </li>
                    <li className="pb-2">Simply take care of the property as if it were your own.</li>
                  </ol>

                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>


        </div>
      </section>

      <section className="banner banner--bg_1 p-5 h-auto md:grid md:grid-cols-2 md:gap-x-3">
        <div className="bg-cyan-950 p-5 text-white  mb-3 md:mb-0">
          <p className="text-xl fuenteTitulo sm:text-5xl">Book Your Stay on Airbnb</p>
          <p className="text-sm my-3" >At Medina Marketing Business, we have made it even easier for you to book your perfect stay. All of our properties, complete with detailed descriptions and high-quality photos, are available on Airbnb. With just a few clicks, you can secure your ideal accommodation and start planning your trip with confidence.</p>
          <Button className="my-5 mx-auto  w-48 text-cyan-950 font-bold uppercase lg:mx-0" color="light" as={Link} to={link} target="_blank">
            Book on Airbnb
          </Button>
        </div>
        <div className="bg-white bg-opacity-50 text-white flex items-center">
          <img className="w-40 m-auto" src="/images/airbnbLogo_2.png" alt="logo-airbnb" />
        </div>
      </section>
      <BannerBeyond />

      <FooterGeneral />
    </>
  )
}

export default Property