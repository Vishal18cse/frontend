import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'

const MaybeShowNavbar = ({children}) => {
    const location = useLocation();
    const [ShowNavbar, setShowNavbar] = useState(false)

    useEffect(()=>{
        if(location.pathname === '/BookingForm' || location.pathname ==='/Login' || location.pathname ==='/register'){
            setShowNavbar(false)
        }
        else{
            setShowNavbar(true)
        }
    },[location])

  return (
    <div>
      { ShowNavbar && children}
    </div>
  )
}

export default MaybeShowNavbar
