import React from 'react'

export default function Sobre() {
  return (
    <div id='sobre' className='bg-blue-950 py-16 px-6 lg:px-20'>
      <h1 className='mt-4 text-4xl md:text-5xl font-bold text-center text-orange-400 mb-12'>
        Sobre Mim
      </h1>
      <div className='flex flex-col md:flex-row items-center justify-center gap-50'>
        <div>
          <img
            src="preto.jpg"
            alt="Minha foto"
            className="w-101 h-101 rounded-full object-cover mx-auto md:mx-0 mb-6 md:mb-0 shadow-lg"
          />
        </div>
        <div className='text-orange-200 max-w-xl leading-relaxed'>
          <p>
            <strong className="text-white text-lg">💻 Resumo Pessoal – Samuel (Programação e Informática)</strong><br /><br />
            Sou um estudante de tecnologia em constante evolução. Comecei minha trajetória no curso de Programador de Sistemas, onde enfrentei muitas dificuldades no início — especialmente com lógica e algoritmos — mas com esforço e prática, consegui superar barreiras que antes pareciam impossíveis.<br /><br />
            Atualmente, estou cursando o Técnico em Informática para Internet, onde venho aprofundando meus conhecimentos em desenvolvimento web, aprendendo e praticando com linguagens e ferramentas como JavaScript, TypeScript, Python, HTML, CSS e SQL. Também estou estudando React, Next.js e conceitos de programação orientada a objetos, APIs, versionamento com Git/GitHub, além de boas práticas de código e estrutura de projetos.<br /><br />
            Programar, pra mim, é mais do que aprender comandos: é superar limitações, construir ideias e transformar conhecimento em realidade.
          </p>
        </div>
      </div>
    </div>
  )
}
