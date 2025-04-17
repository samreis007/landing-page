import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaGitAlt, FaComments, FaUsers, FaPuzzlePiece, FaSyncAlt, FaClock } from'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Minhas Habilidades</h2>
        
        {/* Soft Skills */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li className="flex items-center">
              <FaComments className="text-blue-500 mr-2" /> Comunicação efetiva
            </li>
            <li className="flex items-center">
              <FaUsers className="text-green-500 mr-2" /> Trabalho em equipe
            </li>
            <li className="flex items-center">
              <FaPuzzlePiece className="text-purple-500 mr-2" /> Resolução de problemas
            </li>
            <li className="flex items-center">
              <FaSyncAlt className="text-indigo-500 mr-2" /> Adaptabilidade
            </li>
            <li className="flex items-center">
              <FaClock className="text-yellow-500 mr-2" /> Gestão de tempo
            </li>
          </ul>
        </div>
        
        {/* Hard Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Hard Skills</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li className="flex items-center">
              <FaHtml5 className="text-orange-500 mr-2" /> HTML5
            </li>
            <li className="flex items-center">
              <FaCss3Alt className="text-blue-500 mr-2" /> CSS3 e frameworks como Tailwind CSS
            </li>
            <li className="flex items-center">
              <FaJs className="text-yellow-500 mr-2" /> JavaScript (incluindo ES6+)
            </li>
            <li className="flex items-center">
              <FaReact className="text-blue-400 mr-2" /> React.js e Next.js
            </li>
            <li className="flex items-center">
              <FaNode className="text-green-500 mr-2" /> Node.js
            </li>
            <li className="flex items-center">
              <FaDatabase className="text-purple-600 mr-2" /> Banco de dados (SQL e MongoDB)
            </li>
            <li className="flex items-center">
              <FaGitAlt className="text-red-500 mr-2" /> Versionamento de código com Git
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
