import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Header from './components/header/Header.tsx'
import GlobalStyles from './styles/global.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode >
    {<GlobalStyles />}
    <Header />
    <App />
  </StrictMode>,
)
