import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './components/GlobalStyle'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={{}}>
      <App />
      <GlobalStyle/>
    </ThemeProvider>
  </StrictMode>
);
