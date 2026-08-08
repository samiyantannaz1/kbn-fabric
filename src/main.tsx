import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageProvider.tsx';
import OffcanvasProvider from './context/OffcanvasProvider.tsx';

import './index.css'

import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
<StrictMode>
  <BrowserRouter  basename="/kbn-fabric">
    <LanguageProvider>
    <OffcanvasProvider>
        <App />
    </OffcanvasProvider>
    </LanguageProvider>
  </BrowserRouter>
</StrictMode>
)
