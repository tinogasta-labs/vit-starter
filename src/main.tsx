import { createRoot } from 'react-dom/client'
import '~/styles/global.css'
import App from '~/root'

const root = document.getElementById('root')

if (root) {
  createRoot(root).render(<App />)
}
