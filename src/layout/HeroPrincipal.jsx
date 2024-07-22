import { Carousel } from "flowbite-react";

const HeroPrincipal = () => {



    return (
        <>
            <header className="relative">
                <div className=" top-0 hero">
                    <Carousel leftControl=" " rightControl=" ">
                        <img className="img--centrada" src="/images/image_8.jpg" alt="..." />
                        <img className="img--centrada" src="/images/image_4.jpg" alt="..." />
                        <img className="img--centrada" src="/images/image_2.jpg" alt="..." />
                        <img className="img--centrada" src="/images/image_9.jpg" alt="..." />
                        <img className="img--centrada" src="/images/image_7.jpg" alt="..." />
                    </Carousel>
                </div>
                <div className="bg-white bg-opacity-50 absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
                    <img src="images/logo_1.png" alt='logo' className="max-w-full max-h-full object-contain" />
                </div>

            </header>


        </>
    )
}

export default HeroPrincipal