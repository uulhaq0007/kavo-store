import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import StoreLayout from './components/layout/StoreLayout'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import { storeList } from './data/stores'

function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

/** The same page set is mounted once per storefront. */
function storeRoutes(store) {
  const inner = [
    <Route key="i" index element={<HomePage />} />,
    <Route key="s" path="shop" element={<ShopPage />} />,
    <Route key="a" path="about" element={<AboutPage />} />,
    <Route key="b" path="blog" element={<BlogPage />} />,
    <Route key="c" path="contact" element={<ContactPage />} />,
  ]
  return store.path === '/' ? (
    <Route key={store.key} path="/" element={<StoreLayout store={store} />}>{inner}</Route>
  ) : (
    <Route key={store.key} path={`${store.path}/*`} element={<StoreLayout store={store} />}>
      <Route path="" element={<HomePage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to={store.path} replace />} />
    </Route>
  )
}

export default function App() {
  return (
    <>
      <ScrollReset />
      <Routes>
        {storeList.map(storeRoutes)}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}
