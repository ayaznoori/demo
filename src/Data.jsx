import React, { useContext } from 'react'
import { authContext } from './Context/AuthContext'

const Data = (props) => {
    const {data,setData}=useContext(authContext);
  return (
    <div>Data
        <button onClick={()=>setData(!data)}>alter</button>
    </div>
  )
}

export default Data