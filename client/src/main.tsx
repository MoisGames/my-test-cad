import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Header from './components/UI/header/Header.tsx'
import GlobalStyles from './styles/global.ts'
import Footer from './components/UI/footer/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode >
    {<GlobalStyles />}
    <Header />
    
    <Footer />
  </StrictMode>,
)
