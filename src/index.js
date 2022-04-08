import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import imagem1 from "./images/imagem1.jpg"

const App = () => {
    const bloco1 = () => ({margin: 'auto', width: 1000, backgroundColor: '#dcdcdc', padding: 12, borderRadius: 8 })
    const textoDoRotulo = "Profissionais de saúde"
    const nome1 = ({nome: 'José da Silva'})
    const nome2 = ({nome: 'Maria da Silva'})
    const nome3 = ({nome: 'Jaqueline Mendes'})

  return(
    <div style={bloco1()}>
        <label className="rotulo" htmlFor="nome" style={{display: 'block', marginBottom: 4, textAlign: 'center'}}>
        <b>{textoDoRotulo}</b>
        </label>
    <div style={{margin: 'auto', width: 900, backgroundColor: '#e4e4e4', paddingLeft:50, paddingRight:50, paddingTop: 5, paddingBottom: 10, borderRadius: 10 }}> 
       
        <div className='bloco2'>    
            <div className="um">
            <img src={imagem1} alt=""/>
            <label className='medico1'>
            {nome1.nome}  
            </label>    
            </div>
            <div className='dois'>
            <img src={process.env.PUBLIC_URL + "/medico2.jpg"} alt=""/>
                {nome2.nome}</div>
            <div className='tres'>
            <img src="https://media.istockphoto.com/photos/portrait-of-smiling-female-doctor-wearing-uniform-standing-picture-id1346711310?k=20&m=1346711310&s=612x612&w=0&h=axAb3twIL5WonBso0LWk9bitR7P5gEfxJ6g4_tbjXGo=" alt=""/>
                {nome3.nome}</div>
        </div>   
    </div>
 </div>      
  )}
ReactDOM.render(
    <App />,
    document.querySelector("#root")
)
