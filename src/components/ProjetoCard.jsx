import StatusBadge from "./StatusBadge";
import TecnologiaTag from "./TecnologiaTag";
function ProjetoCard({
titulo,
descricao,
responsavel,
status,
tecnologias,
destaque
}) {
return (
<article className="card">
{destaque && <strong>em destaque</strong>}
 <h3>{titulo}</h3>
  <p>{descricao}</p>
  <p>responsável: {responsavel}</p>

  <StatusBadge status={status} />

  <div className="tecnologias">
    {tecnologias.map((nome) => (
      <TecnologiaTag key={nome} nome={nome} />
    ))}
  </div>
</article>
);
}
export default ProjetoCard;
