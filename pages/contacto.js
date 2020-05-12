import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import contactoStyle from '../styles/contacto'

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
        <img src='../../static/imgs/logo-stthomas.png'></img>
        <h1>Learning English Together</h1>

        <p>
          Si desea estudiar en St. Thomas u obtener información sobre alguno de nuestros servicios , escríbanos un correo electrónico a <a href='mailto:instistthomas@gmail.com'><span className='cursiva'>instistthomas@gmail.com</span></a>
        </p>

        {/* <div className='linea-green'></div> */}
        <h3>TAMBIÉN PUEDES ENCONTRARNOS EN <a target='blank_' href='https://www.instagram.com/institutost.thomas/'>Instagram</a> Y  <a target='blank_' href='https://www.facebook.com/pages/Instituto-de-Ingl%C3%A9s-St-Thomas/395813450541322'>Facebook</a></h3>
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
                : 'Submitted'
              : 'Submitting...'}
          </button>

        </div>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <div className="success">{status.info.msg}</div>
      )}
    </main>


    <style jsx>
      {contactoStyle}
    </style>


  </Layout>
)
}