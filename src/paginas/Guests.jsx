import Navegacion from "../layout/Navegacion"
import HeroGeneral from "../layout/HeroGeneral"
import FooterGeneral from "../layout/FooterGeneral"
import BannerBeyond from "../components/BannerBeyond"
import Critica from "../components/Critica"
import CardFoto from "../components/CardFoto"
import Space from "../components/Space"
import { Button, Card } from "flowbite-react"
import { Link } from "react-router-dom"

const Guests = () => {
  return (
    <>
      <Navegacion />
      <HeroGeneral
        pagina='Guests'
      />
      <section className="my-16" >
        <h2 className="text-center text-4xl fuenteTitulo font-bold my-10  text-cyan-950">Advantages of Booking Your Stay with us</h2>
        <div className="w-10/12 m-auto  md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-5 md:gap-y-5">

          <CardFoto
            imagen="/images/image_14.jpg"
            titulo="Variety of Options"
            parrafo="Medina Marketing offers a wide range of properties, from cozy apartments to spacious houses, catering to diverse preferences and group sizes. Whether you’re traveling solo, with family, or friends, you’ll find the perfect accommodation to suit your needs."
          />

          <CardFoto
            imagen="/images/image_15.jpg"
            titulo="Prime Locations"
            parrafo="Our properties are strategically located in prime areas, ensuring you have easy access to major attractions, public transportation, and essential services. Enjoy the convenience of staying in the heart of your chosen destination."
          />

          <CardFoto
            imagen="/images/image_12.jpg"
            titulo="High-Quality Standards"
            parrafo="We maintain strict quality standards for all our properties, ensuring they are clean, well-maintained, and equipped with modern amenities. Your comfort and satisfaction are our top priorities, so you can relax and enjoy your stay."
          />

          <CardFoto
            imagen="/images/image_13.jpg"
            titulo="Excellent Customer Service"
            parrafo="Medina Marketing is committed to providing exceptional customer service. Our dedicated support team is available to assist you with any questions or concerns before, during, and after your stay, ensuring a seamless and enjoyable experience."
          />
        </div>

      </section>

      <section className="banner banner--bg_1 p-5 h-auto md:grid md:grid-cols-2 md:gap-x-3">
        <div className="bg-cyan-950 p-5 text-white  mb-3 md:mb-0">
          <p className="text-xl fuenteTitulo sm:text-5xl">Book Your Stay on Airbnb</p>
          <p className="text-sm my-3" >At Medina Marketing Business, we have made it even easier for you to book your perfect stay. All of our properties, complete with detailed descriptions and high-quality photos, are available on Airbnb. With just a few clicks, you can secure your ideal accommodation and start planning your trip with confidence.</p>
          <Button className="my-5 mx-auto  w-48 text-cyan-950 font-bold uppercase lg:mx-0" color="light" as={Link} to="https://www.airbnb.mx/users/show/445301888" target="_blank">
            view our profile
          </Button>
        </div>
        <div className="bg-white bg-opacity-50 text-white flex items-center">
          <img className="w-40 m-auto" src="/images/airbnbLogo_2.png" alt="logo-airbnb" />
        </div>
      </section>

      <section>
        <div className="w-10/12 m-auto py-20">
          <h2 className="text-2xl text-cyan-950">Recent Reviews <span className="text-sm text-yellow-600">On Airbnb</span></h2>
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-5" >


            <Critica
              url="https://www.airbnb.mx/rooms/1043126792881083141?source_impression_id=p3_1721399538_P3WQyDW0HANKo4FL"
              urlImagen="https://a0.muscache.com/im/pictures/user/3e652e83-e94d-4871-a5de-bf2899c0be8b.jpg?"
              titulo="Luxury House Next to the Fair"
              opinion="We enjoyed our stay at Maria’s place. It was nice and clean. Checkin and checkout is easy and smooth."
              nombre="Peixin"
              fecha="July 2024"
            />
            <Critica
              url="https://www.airbnb.mx/rooms/1043126792881083141?source_impression_id=p3_1721399538_P3WQyDW0HANKo4FL"
              urlImagen="https://a0.muscache.com/im/pictures/user/User-170467521/original/22f264cf-b103-4cfb-9274-fa8fea2ba6af.jpeg?"
              titulo="Luxury House Next to the Fair"
              opinion="Great place to stay. The room are spacious and very clean! Maria is always responsive. Will definitely come back."
              nombre="Zonglin"
              fecha="July 2024"
            />

            <Critica
              url="https://www.airbnb.mx/rooms/1043126792881083141?source_impression_id=p3_1721399538_P3WQyDW0HANKo4FL"
              urlImagen="https://a0.muscache.com/im/pictures/user/d777fdd4-cc35-4bf1-b3b8-4476f4c78fae.jpg"
              titulo="Luxury House Next to the Fair"
              opinion="We enjoyed our stay at MariaI have stayed in a lot of AirBNB's throughout the year and Maria is among the BEST host I have had. She is extremely kind, which really matters. She was so helpful with everything and extremely responsive. I will stay with Maria every time I am in the area! Thank you Maria💚"
              nombre="Bob"
              fecha="June 2024"
            />

            <Critica
              url="https://www.airbnb.mx/rooms/1043126792881083141?source_impression_id=p3_1721399538_P3WQyDW0HANKo4FL"
              urlImagen="https://a0.muscache.com/im/pictures/user/a45d8506-928c-4bff-befc-12c2823cd4bb.jpg"
              titulo="Luxury House Next to the Fair"
              opinion="We loved the house. It was very comfortable. The beds are great, the chair and couch cozy. The kitchen had everything we needed. It is not a huge house, but the lay out makes it feel much bigger. We are a family of 4 and did not feel squeezed in. Maria is very friendly and responsive. We did not have any issues, but a few questions. She replied quickly and was very nice. My father live in Red bluff and we will be back here on our next visit. THANK YOU! "
              nombre="Richard"
              fecha="June 2024"
            />

            <Critica
              url="https://www.airbnb.mx/rooms/566777272277410256?source_impression_id=p3_1721399370_P32ebjyfpXcAXvll"
              urlImagen="https://a0.muscache.com/im/pictures/user/181d9508-1aae-4dd5-b22f-fecfb691b4f1.jpg"
              titulo="Luxury House Next to Highway 5"
              opinion="10 out of 10 property!! We flew from South Carolina to visit our family and we were so grateful for this air bnb. Private location, felt very safe, beautiful home, had all the amenities listed, and number one is great communication with host. Will definitely stay here again in the future!!"
              nombre="Ivy"
              fecha="June 2024"
            />

            <Critica
              url="https://www.airbnb.mx/rooms/566777272277410256?source_impression_id=p3_1721399370_P32ebjyfpXcAXvll"
              urlImagen="https://a0.muscache.com/im/pictures/user/bc509d53-2c2c-4576-9936-f8f88c10c1e1.jpg"
              titulo="Luxury House Next to Highway 5"
              opinion="The house is huge and had tons of room! It was a very open floor plan. There was a lot of what seemed to be beetles but you’re in the middle of an orchard so that’s to be expected. We used this house for a bridal suite before a wedding and it was perfect! I would highly recommend  "
              nombre="Alyssa"
              fecha="May 2024"
            />

          </div>
        </div>

      </section>
      <BannerBeyond />
      <FooterGeneral />
    </>
  )
}

export default Guests