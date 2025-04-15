import React from 'react'

export default function Sobre() {
  return (
    <div id='sobre' className='bg-blue-950'>
      <h1 className=' text-3xl font-bold text-center text-orange-400'>Sobre Mim</h1>
      <div className=' flex items-center justify-around h-150'> <div>
          <img
              src="preto.jpg" // A imagem deve estar na pasta public
              alt="Minha foto"
              className="w-52 h-52 rounded-full mx-auto mb-4 object-cover"
            />
      </div>
        <div>
            <p className='w-200 text-orange-300'><strong>💻 Resumo Pessoal – Samuel (Programação e Informática)</strong><br />
            Sou um estudante de tecnologia em constante evolução. Comecei minha trajetória no curso de Programador de Sistemas, onde enfrentei muitas dificuldades no início — especialmente com lógica e algoritmos — mas com esforço e prática, consegui superar barreiras que antes pareciam impossíveis. <br /><br />
            
            Atualmente, estou cursando o Técnico em Informática para Internet, onde venho aprofundando meus conhecimentos em desenvolvimento web, aprendendo e praticando com linguagens e ferramentas como JavaScript, TypeScript, Python, HTML, CSS e SQL. Também estou estudando React, Next.js e conceitos de programação orientada a objetos, APIs, versionamento com Git/GitHub, além de boas práticas de código e estrutura de projetos.<br /><br />
            
            
            
            Programar, pra mim, é mais do que aprender comandos: é superar limitações, construir ideias e transformar conhecimento em realidade.</p>
        </div>
        </div>
    </div>
  )
}
