import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import contactoStyle from '../styles/contacto'
import animations from '../styles/animations'


export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    email: '',
    asunto: '',
    message: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        email: '',
        asunto: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch(`${process.env.REACT_APP_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  return (<Layout>



    <main>

      <section className='info'>
        <img className='text-focus-in' src='../../static/imgs/logo-stthomas.png'></img>
        <h1 className='text-focus-in'>Learning English Together</h1>

        <p className='text-focus-in'>
          Si desea estudiar en St. Thomas u obtener información sobre alguno de nuestros servicios , escríbanos un correo electrónico a <a href='mailto:instistthomas@gmail.com'><span className='cursiva'><strong>instistthomas@gmail.com</strong></span></a>
        </p>

        {/* <div className='linea-green'></div> */}
        <h3>TAMBIÉN PUEDES ENCONTRARNOS EN <a target='blank_' href='https://www.instagram.com/institutost.thomas/'><strong>Instagram</strong></a> Y  <a target='blank_' href='https://www.facebook.com/pages/Instituto-de-Ingl%C3%A9s-St-Thomas/395813450541322'><strong>Facebook</strong></a></h3>
        {/* <div className='linea-green'></div> */}
      </section>

      <form id="formulario" onSubmit={handleOnSubmit}>
        <label htmlFor="email">Dirección de correo electrónico*</label>
        <input
          id="email"
          type="email"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <label htmlFor="asunto">Asunto*</label>
        <input
          id="asunto"
          type="asunto"
          onChange={handleOnChange}
          required
          value={inputs.asunto}
        />
        <label htmlFor="message">Mensaje*</label>
        <textarea
          id="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />

        <div className='button-container'>
          <button type="submit" disabled={status.submitting}>
            {!status.submitting
              ? !status.submitted
                ? 'ENVIAR'
                : 'Mensaje Enviado'
              : 'Enviando...'}
          </button>

        </div>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg} No se pudo enviar el mail, intente mas tarde</div>
      )}
      {!status.info.error && status.info.msg && (

        <div className="success">
          <p>
          {status.info.msg}
          <br />
          Mensaje enviado
          </p>
        </div>
      )}
    </main>


    <style jsx>{animations}</style>
    <style jsx>{contactoStyle}</style>

  </Layout>
)
}