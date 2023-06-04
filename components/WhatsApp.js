import { FloatingWhatsApp } from "react-floating-whatsapp"
import logo from "../public/logo-fregor.png"

export default function WhatsApp() {
  return (
    <FloatingWhatsApp
    phoneNumber="56936765323"
    accountName="Tienda Fregor"
    allowEsc
    allowClickAway={true}
    notification
    notificationSound={true}
    placeholder="Escribe un mensaje"
    avatar={logo}
    statusMessage="En línea"
    chatMessage={`Hola!\nBienvenido a Fregor\n\n¿En que podemos ayudarte?`}
    darkMode={true}
    chatboxHeight={315}
    messageDelay={3}
    
  /> 
  )
}
