
import './App.css'
import Heading from './component/Heading'
import Paragraph from './component/paragraph'
import {DangerButton, SuccessButton} from './component/Button'
import DynamicComponent from './component/DynamicComponent'
import StudentList from './component/StudentList'
import RandomNumber from './component/RandomNumber'
import Title from './component/Title'

function App() {
 

  return (
    <>

      <Title  TitleText="Hello World"/>
      <Heading />
      <RandomNumber/>
      <Paragraph />
      <DangerButton />
      <SuccessButton />
      <DynamicComponent />
      <StudentList/>

         
    </>
  )
}

export default App
