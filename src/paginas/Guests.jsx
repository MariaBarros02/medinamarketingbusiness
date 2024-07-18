import Navegacion from "../layout/Navegacion"
import HeroGeneral from "../layout/HeroGeneral"
import FooterGeneral from "../layout/FooterGeneral"

const Guests = () => {
  return (
    <>
      <Navegacion/>
      <HeroGeneral
        pagina='Guests'
      />
      <div>Guests</div>
      <FooterGeneral/>
    </>
  )
}

export default Guests