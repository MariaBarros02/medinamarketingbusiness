import { Card, Button } from "flowbite-react"
import { Link } from "react-router-dom"

const CardBoton = ({imagen, titulo, parrafo, boton, ubicacion, link}) => {
    return (
        <>
            <Card
                className="max-w-sm m-auto lg:mx-3"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={imagen}
            >
                
                <p className="font-bold text-2xl text-gray-700 dark:text-gray-400">
                    {titulo}
                </p>
                <p className="font-bold text-gray-700 dark:text-gray-400">
                    {ubicacion}
                </p>
                <p className="font-normal text-sm text-gray-500 dark:text-gray-400">
                    {parrafo}
                </p>
                <Button className="bg-yellow-600 " color="dark" as={Link} to={link}>
                    {boton}
                </Button>
            </Card>

        </>
    )
}

export default CardBoton