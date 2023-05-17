import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from '@/app/components';
import { Home } from '@/app/views';

function App() {
  return (
    <main className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  )
}
export default App