import React, { useState } from "react";

export default function Form() {
  const [finalExamValue, setFinalExamValue] = useState("");
  const [firstPartialValue, setFirstPartialValue] = useState("");
  const [secondPartialValue, setSecondPartialValue] = useState("");
  const [thirdPartialValue, setThirdPartialValue] = useState("");
  const [firstProjectValue, setFirstProjectValue] = useState("");
  const [secondProjectValue, setSecondProjectValue] = useState("");
  const [finalNote, setFinalNote] = useState("");

  const handleFinalExamChange = (e) => {
    setFinalExamValue(e.target.value);
  };

  const handleFirstPartialChange = (e) => {
    setFirstPartialValue(e.target.value);
  };

  const handleSecondPartialChange = (e) => {
    setSecondPartialValue(e.target.value);
  };
  const handleThirdPartialChange = (e) => {
    setThirdPartialValue(e.target.value);
  };
  const handleFirstProjectChange = (e) => {
    setFirstProjectValue(e.target.value);
  };
  const handleSecondProjectChange = (e) => {
    setSecondProjectValue(e.target.value);
  };

  const addPartials = (p1, p2, p3) => {
    const suma = Number(p1) + Number(p2) + Number(p3);
    return suma;
  };

  const addProjects = (pro1, pro2) => {
    const suma = Number(pro1) + Number(pro2);
    return suma;
  };

  const finalAverage = (finalExam, totalPartial, totalProjects) => {
    const total =
      Number(finalExam) + Number(totalPartial) + Number(totalProjects);
    //console.log(`la suma es de ${total}`);
    const partialPercentage = (55 / 100) * total;
    const projectsPercentage = (30 / 100) * total;
    const examPercentage = (15 / 100) * total;
    const finalNote =
      (partialPercentage + projectsPercentage + examPercentage) / 6;
    return finalNote;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`la nota del examen final es de ${finalExamValue}`);
    const totalPartial = addPartials(
      firstPartialValue,
      secondPartialValue,
      thirdPartialValue
    );
    //console.log(`la suma de los parciales es de ${totalPartial}`);
    const totalProjects = addProjects(firstProjectValue, secondProjectValue);
    //console.log(`la suma de los proyectos es de ${totalProjects}`);
    const finalNote = finalAverage(finalExamValue, totalPartial, totalProjects);
    // console.log(` la nota final es de ${finalNote.toFixed(2)}`);
    setFinalNote(finalNote.toFixed(2));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Calculadora de promedio final</h2>
        <div className="input__box">
          <label>
            Examen Final
            <input
              type="number"
              name="finalExamValue" // Asigna un nombre al input
              value={finalExamValue}
              onChange={handleFinalExamChange}
              placeholder="Inserte nota"
            />
          </label>
        </div>
        <div className="input__box">
          <label>
            Parciales
            <input
              type="number"
              name="firstPartialValue" // Asigna un nombre al input
              value={firstPartialValue}
              onChange={handleFirstPartialChange}
              placeholder="Inserte nota"
            />
            <input
              type="number"
              name="secondPartialValue" // Asigna un nombre al input
              value={secondPartialValue}
              onChange={handleSecondPartialChange}
              placeholder="Inserte nota"
            />
            <input
              type="number"
              name="thirdPartialValue" // Asigna un nombre al input
              value={thirdPartialValue}
              onChange={handleThirdPartialChange}
              placeholder="Inserte nota"
            />
          </label>
        </div>
        <div className="input__box">
          <label>
            Proyectos
            <input
              type="number"
              name="firstProjectValue" // Asigna un nombre al input
              value={firstProjectValue}
              onChange={handleFirstProjectChange}
              placeholder="Inserte nota"
            />
            <input
              type="number"
              name="secondPartialValue" // Asigna un nombre al input
              value={secondProjectValue}
              onChange={handleSecondProjectChange}
              placeholder="Inserte nota"
            />
          </label>
        </div>
        <button type="submit" className="send">
          Enviar
        </button>
      </form>
      <div className="answer">
        <p>La Nota final es de: {finalNote}</p>
      </div>
    </div>
  );
}
