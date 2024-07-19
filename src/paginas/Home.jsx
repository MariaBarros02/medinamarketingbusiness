import Navegacion from "../layout/Navegacion"
import HeroPrincipal from "../layout/HeroPrincipal"
import FooterGeneral from "../layout/FooterGeneral"
import BannerBeyond from "../components/BannerBeyond";
import Space from "../components/Space";
import { Link } from "react-router-dom";
import { Button, Timeline, Card } from "flowbite-react";
import { HiArrowNarrowRight, HiCheckCircle } from "react-icons/hi";


const Home = () => {
  return (
    <>
      <Navegacion />
      <HeroPrincipal />

      <main>
        <section className=" w-10/12 mx-auto my-5 ">
          <h2 className="text-center text-4xl fuenteTitulo font-bold my-10 text-cyan-950">Find Your Perfect Stay Here!</h2>
          <div className="lg:grid lg:grid-cols-3">
            <div className="lg:col-span-2 ">
              <Timeline horizontal>
                <Timeline.Item>
                  <Timeline.Point icon={HiCheckCircle} />
                  <Timeline.Content>
                    <Timeline.Time >Step 1</Timeline.Time>
                    <Timeline.Title className="text-2xl">Plan Your Trip</Timeline.Title>
                    <Timeline.Body className="text-sm">
                      At Medina Marketing Business, we make it easy to plan your trip. Start by determining your budget, the number of people, and your travel dates. These details will help you narrow down your options and find the perfect accommodation that fits your needs. Knowing what you want in advance makes the search process much smoother and more efficient.
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Point icon={HiCheckCircle} />
                  <Timeline.Content>
                    <Timeline.Time >Step 2</Timeline.Time>
                    <Timeline.Title className="text-2xl">Search for Accommodations</Timeline.Title>
                    <Timeline.Body className="text-sm">
                      Use our platform to search for accommodations that best suit your needs. Our easy-to-use filters allow you to refine your search based on location, amenities, and price range. Medina Marketing Business offers a wide variety of properties to ensure you find the ideal place for your stay. Whether you're looking for a cozy apartment or a spacious house, we have options to match every preference.
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Point icon={HiCheckCircle} />
                  <Timeline.Content>
                    <Timeline.Time >Step 3</Timeline.Time>
                    <Timeline.Title className="text-2xl">Book and Pay</Timeline.Title>
                    <Timeline.Body className="text-sm">
                      Once you've found your perfect accommodation, simply click to book it. Complete the reservation by entering your travel details and making the payment. Medina Marketing Business ensures a secure and seamless booking process, so you can focus on enjoying your trip. Our customer support team is always available to assist you with any questions or concerns.
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
              </Timeline>
            </div>
            <div>
              <Card
                className="max-w-sm m-auto lg:mx-3"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/images/image_11.jpg"
              >
                <p className="font-normal text-sm text-gray-500 dark:text-gray-400">
                  We offer a diverse range of accommodations to suit every traveler's needs.
                </p>
                <Button className="bg-yellow-600" as={Link} to="/properties">
                  VIEW ACCOMODATIONS
                  <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </Card>
            </div>
          </div>
        </section>
        <Space
          className="bg-cyan-950"
        />

        <section className="banner banner--bg_1 h-auto lg:grid lg:grid-cols-3 py-5 ">
          <div className="bg-cyan-950 w-3/5 mx-auto my-5 p-5 text-white lg:col-span-2">
            <p className="text-xl fuenteTitulo sm:text-5xl">Experience Quality Accommodations</p>
            <p className="text-sm my-3" >We pride ourselves on providing top-quality accommodations that cater to your every need. If you have any questions or need assistance with your booking, don't hesitate to reach out to us. </p>
            <Button className="my-5  w-40 text-cyan-950 font-bold " color="light" as={Link} to="mailto:mmv@medinamarketingbusiness.com">
              CONTACT US
            </Button>
          </div>

        </section>

        <section className="bg-gray-100">
          <div className="text-center text-sm w-10/12 mx-auto py-20 lg:grid lg:grid-cols-3 lg:justify-between lg:items-center lg:gap-x-8 ">
            <div className="mb-5">
              <p className="text-3xl text-cyan-950 fuenteTitulo">Personalized Service</p>
              <p>Enjoy personalized service with Medina Marketing Business. Our team is committed to ensuring your accommodation meets your expectations and needs, providing assistance from booking to checkout.</p>
            </div>
            <img className="mb-5 rounded-full border-2 border-white shadow-md " src="/images/image_1.jpg" alt="image_sofa" />
            <div>
              <p className="text-3xl text-cyan-950 fuenteTitulo">Trust and Reliability</p>
              <p>Count on Medina Marketing Business for trust and reliability. With a strong reputation for quality accommodations and excellent customer service, we ensure peace of mind throughout your stay.</p>
            </div>
          </div>
        </section>
        <BannerBeyond/>

      </main>

      <FooterGeneral />
    </>
  )
}

export default Home