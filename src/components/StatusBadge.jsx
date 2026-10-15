function StatusBadge({ status }) {
  let cor = "amarelo";

  if (status === "Concluído") {
    cor = "verde";
  } else if (status === "Em desenvolvimento") {
    cor = "azul";
  }

  return (
    <span className={`status ${cor}`}>
      {status}
    </span>
  );
}

export default StatusBadge;

