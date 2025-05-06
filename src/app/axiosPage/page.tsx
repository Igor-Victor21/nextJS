//avisando o next js que irá rodar em navegador para o cliente
// isso é importante pois como padrão o código no next js 
// so roda em servidor, por isso que tem que especificar 
"use client"

import { useEffect, useState, Suspense } from "react"
import Image from "next/image"
import { api } from "@/constants/api"
import { error } from "console"

// basicamente essa estruta e como se fosse
// um objeto onde tem varios atributos que 
// esse obejto precisa ter como
interface IData{
    name: string // precisa ter um nome
    gender: string // precisa ter um genero
    status: string // precisa ter um status
    species: string // precisa ter uma especie
    image: string // precisa ter uma imagem(vem como link por isso que está com string)
}

const AxiosPage = () => {
    const [data, setData] =  useState<IData[]>([])

    //função de uso e efeito
    //para com uma condicional se entrar no caminho /character
    //e encontrar algo o sistema irá responder os resultados e setalos
    //caso não tenha nenhum resultado ele íra exibir uma mensagem de erro
    useEffect(() => {
        api.get(`/character`).then((res : any) => {
            console.log(res.data.results)
            setData(res.data.results)
        }).catch((error) => {
            console.log("FUDEO DEU MERDA")
        })
    }, [])
        return(
            <>
            <h1>Axios page client side</h1>
            {/* esse componente "Suspense" serve basicamente 
            para fazer um loading até que as informações, 
            dados etc chegue para o usuario.
            
            e esse componente fallback é um componente temporario
            que aparece quando tem algo carregando*/}
            <Suspense fallback={<div>Loading...</div>}>
                {data.map((item, index) => (
                    <div key={index}>
                        <h2>{item.name}</h2>
                        <Image src={item.image} alt={item.name} width={200} height={200}/>
                        <p>{item.species}</p>
                        <p>{item.status}</p>
                        <p>{item.gender}</p>
                    </div>
                ))}
            </Suspense>
            </>
        )
}

export default AxiosPage