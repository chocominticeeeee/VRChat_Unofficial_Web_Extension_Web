import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Changelog from './pages/Changelog'
import PrivacyPolicy from './pages/PrivacyPolicy'

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <main className="flex-1 max-w-[860px] w-full mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <footer className="text-center py-6 text-[#8b8fa8] text-sm border-t border-[#2a2d3a]">
        <p>
          制作者：{' '}
          <a href="https://x.com/Choccomintice" target="_blank" rel="noreferrer">
            ばぶ宮ちょこみん🍼🌱
          </a>
        </p>
      </footer>
    </HashRouter>
  )
}
