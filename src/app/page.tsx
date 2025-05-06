import Image from "next/image";

export default function Home() {
  return (
    //pode-se fazer o css direto pelo className fica mais rapido e facíl
    //quase tudo é abreviado para ficar mais rapido pode pesquisa tudo pelo
    //tailwindcss la vc acha diversas config pré setadas ou espesificas para o seu css
    <div className="bg-[black] h-[100vh] flex items-center justify-center">
      <h1 className="text-[white] text-5x1">PIGUINHO GAMEPLAY</h1>
    </div>
  );
}
