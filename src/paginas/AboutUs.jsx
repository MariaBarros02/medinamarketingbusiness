import Navegacion from "../layout/Navegacion"
import HeroGeneral from "../layout/HeroGeneral"
import FooterGeneral from "../layout/FooterGeneral"

const AboutUs = () => {
  return (
    <>
      <Navegacion/>
      <HeroGeneral
        pagina="About Us"
      />
        <div>AboutUs</div>
      <FooterGeneral/>
    </>
  )
}

export default AboutUs