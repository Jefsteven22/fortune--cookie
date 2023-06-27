const Container = ( { index } ) => {

  const backgrounds = ['url(/backgrounds/fondo1.jpg)', 'url(/backgrounds/fondo2.jpg)', 'url(/backgrounds/fondo3.jpg)', 'url(/backgrounds/fondo4.jpg)'];
  
  document.body.style = `
    background: ${backgrounds[index]} no-repeat center center fixed;
    background-size: cover;
  `

  return (
    <article className="container">      
      <h1 className="title">Galleta de la fortuna</h1>
    </article>
  )
}

export default Container