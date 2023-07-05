import { createRoot } from 'react-dom/client';
import App from './App'

const root = createRoot(document.getElementById('root'));
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);