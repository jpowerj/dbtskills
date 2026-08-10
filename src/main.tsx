import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from "@/components/ui/tooltip"
import { SidebarProvider } from './components/ui/sidebar'
import './styles/globals.css'
import Layout from './Layout'
import Home from './pages/Home'
import Settings from './pages/Settings'
import ChainAnalysis from './pages/ChainAnalysis'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <TooltipProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/chain-analysis" element={<ChainAnalysis />} />
              </Route>
            </Routes>
          </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>,
)
