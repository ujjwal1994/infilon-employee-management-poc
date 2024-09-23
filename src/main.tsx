import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { makeServer } from "../src/mirage.tsx"
import { Provider } from 'react-redux'
import { store } from '../store.tsx'


// Start MirageJS server
if (process.env.NODE_ENV === 'development') {
  makeServer();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
    <App />
  </Provider>,
  </StrictMode>,
)
