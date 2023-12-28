import React, { useContext } from 'react'
import Data from './Data'
import { authContext } from './Context/AuthContext'

const Heading = (props) => {
    const {data,setData}=useContext(authContext);
  return (
    <>
        <div style={{margin:'0px',width:"100%",height:"150px",backgroundColor:"black",color:'white'}}>
                hello {data?"Login":"logout"}
        </div>
        
    </>
  )
}

export default Heading