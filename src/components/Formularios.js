import React, { useState } from "react";

// export default function Formulario() {
//   const [name, setName] = useState("");
//   const [sabor, setSabor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("El formulario se ha enviado");
//   };

//   return (
//     <>
//       <h2>Formularios</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form__group field">
//           <input
//             type="input"
//             className="form__field"
//             placeholder="Name"
//             name="name"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <label htmlFor="name" className="form__label">
//             Name
//           </label>
//         </div>
//         <div>
//           <p>Elije tu sabor JS favorito</p>
//           <h3 className="uppercase">
//             <mark>{sabor}</mark>
//           </h3>

//           <label htmlFor="angular">
//             <input
//               type="radio"
//               id="angular"
//               name="sabor"
//               value="angular"
//               onChange={(e) => setSabor(e.target.value)}
//               defaultChecked
//             />

//             <span>Angular</span>
//           </label>

//           <label htmlFor="react">
//             <input
//               type="radio"
//               id="react"
//               name="sabor"
//               value="react"
//               onChange={(e) => setSabor(e.target.value)}
//             />

//             <span>React</span>
//           </label>

//           <label htmlFor="vanilla">
//             <input
//               type="radio"
//               id="vanilla"
//               name="sabor"
//               value="vanilla"
//               onChange={(e) => setSabor(e.target.value)}
//             />

//             <span>Vanilla</span>
//           </label>

//           <label htmlFor="polymer">
//             <input
//               type="radio"
//               id="polymer"
//               name="sabor"
//               value="polymer"
//               onChange={(e) => setSabor(e.target.value)}
//             />
//             <span>Polymer</span>
//           </label>
//           <p>Selecciona tu leguaje favorito</p>
//           <h3 className="uppercase">
//             <mark>{lenguaje}</mark>
//           </h3>

//           <select
//             name="lenguaje"
//             onChange={(e) => setLenguaje(e.target.value)}
//             defaultValue=""
//             className="round"
//           >
//             <option value="">- - -</option>
//             <option value="js">JavaScript</option>
//             <option value="php">PHP</option>
//             <option value="py">Python</option>
//             <option value="go">GO</option>
//             <option value="rb">Ruby</option>
//           </select>
//         </div>
        

//       <h3><mark>Value {terminos}</mark></h3>
//       <div id="checklist">
//         <input 
//         id="terminos" 
//         type="checkbox" 
//         name="terminos"
//         onChange={(e) => setTerminos(e.target.checked)}/>
//         <label htmlFor="terminos">Aceptar términos y condiciones</label>
//       </div>
//       <br />
//         <button className="btn rbtn-primary" type="submit">Enviar</button>
//       </form>
//     </>
//   );
// }

export default function Formulario() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };


  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Name"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
          />
          <label htmlFor="name" className="form__label">
            Name
          </label>
        </div>
        <div>
          <p>Elije tu sabor JS favorito</p>
          <h3 className="uppercase">
            <mark>{form.sabor}</mark>
          </h3>

          <label htmlFor="angular">
            <input
              type="radio"
              id="angular"
              name="sabor"
              value="angular"
              onChange={handleChange}
              defaultChecked
            />

            <span>Angular</span>
          </label>

          <label htmlFor="react">
            <input
              type="radio"
              id="react"
              name="sabor"
              value="react"
              onChange={handleChange}
            />

            <span>React</span>
          </label>

          <label htmlFor="vanilla">
            <input
              type="radio"
              id="vanilla"
              name="sabor"
              value="vanilla"
              onChange={handleChange}
            />

            <span>Vanilla</span>
          </label>

          <label htmlFor="polymer">
            <input
              type="radio"
              id="polymer"
              name="sabor"
              value="polymer"
              onChange={handleChange}
            />
            <span>Polymer</span>
          </label>
          <p>Selecciona tu leguaje favorito</p>
          <h3 className="uppercase">
            <mark>{form.lenguaje}</mark>
          </h3>

          <select
            name="lenguaje"
            onChange={handleChange}
            defaultValue=""
            className="round"
          >
            <option value="">- - -</option>
            <option value="js">JavaScript</option>
            <option value="php">PHP</option>
            <option value="py">Python</option>
            <option value="go">GO</option>
            <option value="rb">Ruby</option>
          </select>
        </div>
        

      <h3><mark>Value {form.terminos}</mark></h3>
      <div id="checklist">
        <input 
        id="terminos" 
        type="checkbox" 
        name="terminos"
        onChange={handleChange}/>
        <label htmlFor="terminos">Aceptar términos y condiciones</label>
      </div>
      <br />
        <button className="btn rbtn-primary" type="submit">Enviar</button>
      </form>
    </>
  );
}

