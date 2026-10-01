import { useStore } from '../components/layout/StoreLayout'
import FashionHome from '../components/home/FashionHome'
import GroceryHome from '../components/home/GroceryHome'
import FurnitureHome from '../components/home/FurnitureHome'

const HOMES = { fashion: FashionHome, grocery: GroceryHome, furniture: FurnitureHome }

export default function HomePage() {
  const store = useStore()
  const Home = HOMES[store.key] ?? FashionHome
  return <Home store={store} />
}
