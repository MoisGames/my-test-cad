import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/UI/header/Header.tsx'
import GlobalStyles from './styles/global.ts'
import Footer from './components/UI/footer/Footer.tsx'
import MainPage from './components/pages/MainPage.tsx'
import ErrorPage from './components/pages/ErrorPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainPage,
    errorElement: <ErrorPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode >
    {<GlobalStyles />}
    <Header />
    <RouterProvider router={router}>
    </RouterProvider>
    <Footer />
  </StrictMode>,
)
