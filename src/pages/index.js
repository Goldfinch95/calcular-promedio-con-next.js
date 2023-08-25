import Form from "./Form";
import img from "../styles/background.jpg";

const promedioFinal = (examenFinal, totalParciales, totalProyectos) => {
  const total = examenFinal + totalParciales + totalProyectos;
  const porcentajeParciales = (55 / 100) * total;
  const porcentajeProyectos = (30 / 100) * total;
  const porcentajeExamen = (15 / 100) * total;
  const notaFinal =
    (porcentajeParciales + porcentajeProyectos + porcentajeExamen) / 6;
  return `el promedio final del alumno es de ${notaFinal}`;
};

export default function HomePage() {
  function darNotaFinal() {
    const totalParciales = sumarParciales(p1, p2, p3);
    const totalProyectos = sumarProyectos(pro1, pro2);
    promedioFinal(examenFinal, totalParciales, totalProyectos);
  }

  return (
    <body
      style={{
        backgroundImage: `url(${img.src})`,
      }}
    >
      <div className="container__form">
        <Form />
      </div>
    </body>
  );
}
