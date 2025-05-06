import { Metadata } from "next";
import { Suspense } from "react";


//quase a mesma coisa que a tag interface
// muda algumas coisas 
//type: Mais flexível (permite unir tipos, criar tipos condicionais, etc.).
//interface: Mais usada para definir formas de objetos (melhor para extensibilidade).

//IData define uma estrutura de objeto  
//com uma propriedade results que é um array de objetos
type IData = {
    results: {
        name: string
        status: string
        id: string
    }[]
}

export const metadata : Metadata = {
    title: "Character list from RM",
    description: "Aplicação teste com consumo de api"    
}
// O async é uma palavra-chave usada para definir funções assíncronas, 
// ou seja, funções que operam de forma não-bloqueante.
const ServerSide = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data: IData = await res.json()
    
    return(
        <>
            <div>Server side page try</div>
            {data?.results.map((item, index) => (
                <div key={index}>
                    <h1>{item.name}</h1>
                    <h2>{item.id}</h2>
                    <p>{item.status}</p>
                </div>
            ))}
        </>
    )
}

export default ServerSide