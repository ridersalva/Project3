import React, { useState } from 'react'
import {Button,Card, Collapse, Image} from 'react-bootstrap'
import help from './help.png'

 function HelpElement() {
     const [open, setOpen] = useState(false);

     return (
         <>
             <Button
                 onClick={() => setOpen(!open)}
                 aria-controls="example-collapse-text"
                 aria-expanded={open}
                 style={{
                     borderWidth: 1,
                     borderColor: 'rgba(0,0,0,0.2)',
                     justifyContent: 'center',
                     width: 30,
                     height: 30,
                     backgroundColor: '#2b607c',
                     borderRadius: 50,
                 }}>
                 <Image className='help' src={help} alt='help'></Image> 
             </Button>
             <div style={{ minHeight: '150px' }}>
                 <Collapse in={open} dimension="width">
                     <div id="example-collapse-text">
                         <Card body style={{ width: '400px' }}>
                           Click Alerts to create Alerts
                           <br></br>
                           Click Edit to edit your Vehicle
                             <br></br>
                           Click Delete to delete your Vehicle
                         </Card>
                     </div>
                 </Collapse>
             </div>
         </>
     )
}
export default HelpElement