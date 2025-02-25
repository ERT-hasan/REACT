import style from'./App.module.css'
import Container from './container';

function App() {
  
  
  return (
    <>
      <Container>
      <h1 className={style.heading}>
        hello "md wasim"</h1>
        <p className={`${style.para} ${style.heading}`}>
          this is simple paragraph
        </p>
      </Container>
      
    </>
  )
}

export default App;
