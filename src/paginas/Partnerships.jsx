import Navegacion from "../layout/Navegacion"
import HeroGeneral from "../layout/HeroGeneral"
import FooterGeneral from "../layout/FooterGeneral"
import BannerBeyond from "../components/BannerBeyond"

const Partnerships = () => {
  return (
    <>
      <Navegacion />
      <HeroGeneral
        pagina="Partnerships"
      />

      <section className="pt-20 pb-5">
        <div className="w-8/12 m-auto text-center text-gray-400 lg:10/12">
          <svg className="w-[60px] h-[60px] text-gray-400 dark:text-white m-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2" />
          </svg>
          <p>This section of our website is currently under maintenance. </p>
          <p>Please check back soon for updates. If you have any urgent inquiries, do not hesitate to contact us directly. Thank you for your patience and understanding.</p>
        </div>
      </section>

      <BannerBeyond />
      <FooterGeneral />
    </>
  )
}

export default Partnerships