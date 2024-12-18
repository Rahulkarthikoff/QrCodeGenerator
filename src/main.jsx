import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import './QrCode.css'
//import App from './App.jsx'
// import { UserCard } from './UserCard.jsx'
import { Qrcode } from './Qrcode.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UserCard /> */}
    <Qrcode />

  </StrictMode>
)
