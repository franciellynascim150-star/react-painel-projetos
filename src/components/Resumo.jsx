function Resumo({ total, concluidos, emDesenvolvimento }) {
return (
<div className="resumo">
<p>total: {total}</p>
<p>concluídos: {concluidos}</p>
<p>em desenvolvimento: {emDesenvolvimento}</p>
</div>
);
}
export default Resumo;
