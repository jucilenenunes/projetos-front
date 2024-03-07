import React from 'react'
import ReactDOM from 'react-dom/client'
import { DialogProvider } from "react-dialog-confirm"
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DialogProvider>
      <App />
    </DialogProvider>
  </React.StrictMode>,
)
