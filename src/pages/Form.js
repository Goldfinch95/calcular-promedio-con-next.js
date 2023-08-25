import React, { useState } from "react";

const initialState = {
  finalExamValue: "",
  firstPartialValue: "",
  secondPartialValue: "",
  thirdPartialValue: "",
  firstProjectValue: "",
  secondProjectValue: "",
};

export default function Form() {
  const [values, setValues] = useState(initialState);
  const [finalNote, setFinalNote] = useState("");
  const handleValueChange = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const addPartials = (p1, p2, p3) => {
    return ((Number(p1) + Number(p2) + Number(p3)) / 3) * 0.55;
  };

  const addProjects = (pro1, pro2) => {
    return ((Number(pro1) + Number(pro2)) / 2) * 0.3;
  };

  const finalAverage = (finalExam, totalPartial, totalProjects) => {
    return Number(finalExam) * 0.15 + totalPartial + totalProjects;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalNote = finalAverage(
      values.finalExamValue,
      addPartials(
        values.firstPartialValue,
        values.secondPartialValue,
        values.thirdPartialValue
      ),
      addProjects(values.firstProjectValue, values.secondProjectValue)
    );
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
              max={10}
              min={0}
              name="finalExamValue" // Asigna un nombre al input
              value={values.finalExamValue}
              onChange={(e) =>
                handleValueChange("finalExamValue", e.target.value)
              }
              placeholder="Inserte nota"
            />
          </label>
        </div>
        <div className="input__box">
          <label>
            Parciales
            <input
              type="number"
              max={10}
              min={0}
              name="firstPartialValue" // Asigna un nombre al input
              value={values.firstPartialValue}
              onChange={(e) =>
                handleValueChange("firstPartialValue", e.target.value)
              }
              placeholder="Inserte nota"
            />
            <input
              type="number"
              max={10}
              min={0}
              name="secondPartialValue" // Asigna un nombre al input
              value={values.secondPartialValue}
              onChange={(e) =>
                handleValueChange("secondPartialValue", e.target.value)
              }
              placeholder="Inserte nota"
            />
            <input
              type="number"
              max={10}
              min={0}
              name="thirdPartialValue" // Asigna un nombre al input
              value={values.thirdPartialValue}
              onChange={(e) =>
                handleValueChange("thirdPartialValue", e.target.value)
              }
              placeholder="Inserte nota"
            />
          </label>
        </div>
        <div className="input__box">
          <label>
            Proyectos
            <input
              type="number"
              max={10}
              min={0}
              name="firstProjectValue" // Asigna un nombre al input
              value={values.firstProjectValue}
              onChange={(e) =>
                handleValueChange("firstProjectValue", e.target.value)
              }
              placeholder="Inserte nota"
            />
            <input
              type="number"
              name="secondPartialValue" // Asigna un nombre al input
              value={values.secondProjectValue}
              onChange={(e) =>
                handleValueChange("secondProjectValue", e.target.value)
              }
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
