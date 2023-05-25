import React from "react";
import style from "../styles/Footer.module.css";
import { useState } from "react";


const Form = () => {
  const [message, setMessage] = useState('')
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const data = new FormData(e.target)
    const response = await fetch(e.target.action, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json' 

      }
    })
    const result = await response.json(); 
    if (!response.ok) {
      setMessage(result.errors.map(error => error.message).join(', '))
      return false
      }
      alert('enviado correctamente')
  }

  return (
    <div
      className={`${style.fondoFooter} bg-white overflow-hidden`}
      id="contact"
    >
      <div className="py-8  px-4 mx-auto max-w-screen-md bottom-0 w-full">
        <section className="bg-white dark:bg-divHero rounded w-full ">
          <div className="py-8  px-16 mx-auto max-w-screen-md ">
            <h2 className=" text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Escribinos
            </h2>
            <p className="py-1 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Llene el siguiente formulario con su consulta
            </p>
            <form className="space-y-2  " action="https://formspree.io/f/mayzkqvr" method="POST" 
            onSubmit={handleSubmit} >
              <div>
                <label
                  htmlFor="email" 
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 opacity-75 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="nombre@...."
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
                >
                  En que podemos ayudarte..
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="shadow-sm bg-gray-50 opacity-75 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Como podemos ayudarte"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-00"
                >
                  Tu mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="shadow-sm bg-gray-50 opacity-75 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Dejanos tu mensaje"
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 colorBoton px-5 text-sm font-medium text-center text-black rounded-lg  sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 "
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </section>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 w-full" />

        
      </div>
    </div>
  );
};

export default Form;
