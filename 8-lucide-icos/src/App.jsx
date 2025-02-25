import {Camera, Trash2, Icon} from 'lucide-react';
import {bottleBaby,burger} from '@lucide/lab';


function App() {
  

  return (
    <>
       <Camera color="green" size={72} strokeWidth={2}/>
       <Trash2 />
       <Icon iconNode={bottleBaby} color='pink' size={72} strokeWidth={2}/>
       <Icon iconNode={burger} color='red' size={72} strokeWidth={3}/>
    </>
  )
}

export default App
