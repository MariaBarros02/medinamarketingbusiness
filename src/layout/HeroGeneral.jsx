import { Carousel } from "flowbite-react"
const HeroGeneral = ({pagina}) => {
    return (
        <>
            <header className="relative">
                <div className=" top-0 hero">
                    <Carousel leftControl=" " rightControl=" ">
                        <img className="img--centrada" src="images/image_8.jpg" alt="..." />
                        <img className="img--centrada" src="images/image_4.jpg" alt="..." />
                        <img className="img--centrada" src="images/image_2.jpg" alt="..." />
                        <img className="img--centrada" src="images/image_9.jpg" alt="..." />
                        <img className="img--centrada" src="images/image_7.jpg" alt="..." />
                    </Carousel>
                </div>
                <div className="bg-white bg-opacity-50 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
                    
                    <h1 className="uppercase text-center text-cyan-950 text-5xl font-bold m-0 fuenteTitulo lg:text-8xl ">{pagina}</h1>
                </div>

            </header>


        </>
    )
}

export default HeroGeneral