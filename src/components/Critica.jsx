import { Card, Avatar } from "flowbite-react"
const Critica = ({url, urlImagen, titulo, opinion, nombre, fecha}) => {
    return (
        <>
            <Card href={url} target="_blank" className="w-full my-5">
                <div className="flex flex-wrap gap-2">
                    <Avatar img={urlImagen} alt="avatar of Jese" rounded />
                    <div>
                        <p className="font-bold">{nombre}</p>
                        <p className="text-xs">{fecha}</p>
                    </div>
                </div>
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {titulo}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
                    {opinion}
                </p>
            </Card>
        </>
    )
}

export default Critica