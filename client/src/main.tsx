import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/global.ts'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
  <StrictMode >
    <BrowserRouter>
      {<GlobalStyles />}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
