export async function obtenerClientes () {
  const respuesta = await fetch(import.meta.env.VITE_API_URL) // variables de entorno
  const resultado = await respuesta.json()
  return resultado
}
// funcion para editar clientes
export async function obtenerEditarCliente (id) {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`) // variables de entorno
  const resultado = await respuesta.json()
  return resultado
}

export async function agregarClientes (datos) {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: { 'Content-Type': 'application/json' }
    })
    await respuesta.json()
  } catch (error) {
    // console.log(error);
  }
}

export async function actualizarCliente (id, datos) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(datos),
      headers: { 'Content-Type': 'application/json' }
    })
    await respuesta.json()
  } catch (error) {
    // console.log(error);
  }
}

export async function eliminarCliente (id) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'DELETE'
    })
    await respuesta.json()
  } catch (error) {
    // console.log(error);
  }
}
