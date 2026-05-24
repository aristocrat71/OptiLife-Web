import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Guide from './pages/Guide'

/** Jump to the top on route change (but honor in-page #anchors). */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <div className="space-bg" aria-hidden="true" />
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
      <Footer />
    </>
  )
}
