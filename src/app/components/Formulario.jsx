"use client";
import { useState } from "react";
import styles from "./formulario.module.css";

function Formulario() {
  const [formdata, setFormdata] = useState({});

  function handleChange(e) {
    let nombre = e.target.name;
    let value = e.target.value;
    setFormdata({ ...formdata, [nombre]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(formdata));
  }

  return (
    <div className={styles.form_container}>
      <h1 style={{ margin: "15px", textShadow: "5px 5px 5px gray" }}>
        Formulario de Confirmación
      </h1>
      <form method="POST" onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.formrow}>
          <label className={styles.form_label} htmlFor="nombre">
            Nombre
          </label>
          <input
            type="text"
            placeholder="digite su nombre"
            name="nombre"
            className={styles.form_input}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.formrow}>
          <label className={styles.form_label} htmlFor="adultos">
            Acompañantes adultos
          </label>
          <input
            type="text"
            placeholder="numero de adultos"
            name="adultos"
            className={styles.form_input}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.formrow}>
          <label className={styles.form_label} htmlFor="boys">
            Acompañantes niños
          </label>
          <input
            type="number"
            placeholder="numero de niños"
            name="boys"
            className={styles.form_input}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.formrow}>
          <label className={styles.form_label} htmlFor="girls">
            Acompañantes niñas
          </label>
          <input
            type="number"
            placeholder="numero de niñas"
            name="girls"
            className={styles.form_input}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <button type="submit" className={styles.form_button}>
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
