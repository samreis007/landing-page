const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gray-900 text-white h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('imagem-de-fundo.png')" }}
    >
      <div className="text-center px-5  p-8 rounded-lg border-1 bg-gray-100/20 ">
        <img
          src="/preto.jpg" // A imagem do perfil, separada do fund
          alt="Minha foto"
          className="w-52 h-52 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-5xl font-bold mb-4">Olá, eu sou Samuel Sputnik</h1>
        <p className="text-xl mb-6">
          Desenvolvedor Web apaixonado por criar interfaces incríveis e experiências digitais impactantes.
        </p>
        <div className="flex justify-center mt-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition"
          >
            Veja meus projetos
          </a>
          <a
            href="/curriculo.pdf"
            download
            className="bg-red-500 text-white px-6 py-3 rounded-full text-lg hover:bg-red-800 transition ml-4"
          >
            Baixar Currículo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
