import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Resumo from "./components/Resumo";
import Secao from "./components/Secao";
import ProjetoCard from "./components/ProjetoCard";
import "./app.css";
const projetos = [
{
id: 1,
titulo: "site de jogos",
descricao: "site para apresentar jogos.",
responsavel: "luan",
status: "Concluído",
tecnologias: ["HTML", "CSS"],
destaque: true
},
{
id: 2,
titulo: "loja virtual",
descricao: "loja para vender produtos.",
responsavel: "ana",
status: "Em desenvolvimento",
tecnologias: ["React", "CSS"],
destaque: false
},
{
id: 3,
titulo: "sistema escolar",
descricao: "cadastro de alunos.",
responsavel: "pedro",
status: "Planejamento",
tecnologias: ["JavaScript"],
destaque: false
},
{
id: 4,
titulo: "lista de tarefas",
descricao: "organização de atividades.",
responsavel: "maria",
status: "Concluído",
tecnologias: ["HTML", "JavaScript"],
destaque: false
},
{
id: 5,
titulo: "portal de notícias",
descricao: "site para publicar notícias.",
responsavel: "joão",
status: "Em desenvolvimento",
tecnologias: ["React", "CSS"],
destaque: true
},
{
id: 6,
titulo: "controle financeiro",
descricao: "organização de despesas.",
responsavel: "julia",
status: "Concluído",
tecnologias: ["JavaScript", "CSS"],
destaque: false
}
];
function App() {
const concluidos = projetos.filter(
(p) => p.status === "Concluído"
).length;
const emDesenvolvimento = projetos.filter(
(p) => p.status === "Em desenvolvimento"
).length;
return (
<main className="painel">
<Cabecalho />
 <Resumo
    total={projetos.length}
    concluidos={concluidos}
    emDesenvolvimento={emDesenvolvimento}
  />

  <Secao titulo="projetos da turma">
    <div className="projetos">
      {projetos.map((p) => (
        <ProjetoCard key={p.id} {...p} />
      ))}
    </div>
  </Secao>

  <Rodape />
</main>
);
}
export default App;
