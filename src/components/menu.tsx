import Link from "next/link";

// a estrutura MenuProps é basicamente um objeto com opções de menu
// ou seja é um objeto que cada atributo é um item do menu(como link ou botões)
interface MenuProps {
    op1: string
    op2: string
    op3: string
    op4: string
}
//exportando o menu para poder utilizar no layout
export const Menu = ({op1, op2, op3, op4} : MenuProps) => {
    return(
        <header>
            {/* display: flex e um gap: 10px */}
            <nav className="flex gap-10"> 
                <Link className="font-black" href={"/"}>{op1}</Link>
                <Link className="font-black" href={"/hookPage"}>{op2}</Link>
                <Link className="font-black" href={"/axiosPage"}>{op3}</Link>
                <Link className="font-black" href={"/serverSide"}>{op4}</Link>
            </nav>
        </header>
    )
}