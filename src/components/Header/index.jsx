import './styles.css'


export default function Header() {
    return (
        <>
        <header>

          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css'/>
          
        <section id='cabecalho'>

        <div>
            <h1>Agropecuária Borba Gato &copy;</h1>
        </div>
        <div className='input-suffix'>
        <i id='emoji' class="fa-solid fa-magnifying-glass"></i>
        <input id='pesquisa' placeholder='Pesquise'></input>
        
        </div>
    
        
        </section>
        </header>
        </>
    )
}