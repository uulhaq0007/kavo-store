import { createContext, useCallback, useContext, useMemo, useReducer, useState } from 'react'

const CartCtx = createContext(null)

function reducer(items, action) {
  switch (action.type) {
    case 'add': {
      const found = items.find((i) => i.name === action.item.name)
      if (found) {
        return items.map((i) => (i.name === action.item.name ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...items, { ...action.item, qty: 1 }]
    }
    case 'inc':
      return items.map((i) => (i.name === action.name ? { ...i, qty: i.qty + 1 } : i))
    case 'dec':
      // Dropping below one removes the line rather than leaving a zero-qty row.
      return items.flatMap((i) =>
        i.name === action.name ? (i.qty <= 1 ? [] : [{ ...i, qty: i.qty - 1 }]) : [i],
      )
    case 'remove':
      return items.filter((i) => i.name !== action.name)
    case 'clear':
      return []
    default:
      return items
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [])
  const [open, setOpen] = useState(false)
  const [wishlist, setWishlist] = useState([])

  const add = useCallback((item) => {
    dispatch({ type: 'add', item })
    setOpen(true)
  }, [])

  const toggleWish = useCallback((name) => {
    setWishlist((w) => (w.includes(name) ? w.filter((n) => n !== name) : [...w, name]))
  }, [])

  const value = useMemo(() => {
    const count = items.reduce((n, i) => n + i.qty, 0)
    const total = items.reduce((n, i) => n + i.qty * i.price, 0)
    return {
      items, count, total, open, setOpen, add, wishlist, toggleWish,
      inc: (name) => dispatch({ type: 'inc', name }),
      dec: (name) => dispatch({ type: 'dec', name }),
      remove: (name) => dispatch({ type: 'remove', name }),
      clear: () => dispatch({ type: 'clear' }),
    }
  }, [items, open, add, wishlist, toggleWish])

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>
}

export function useCart() {
  const ctx = useContext(CartCtx)
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>')
  return ctx
}

/** Prices differ by an order of magnitude across the three stores. */
export const money = (n) =>
  n >= 100 ? `$${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}` : `$${n.toFixed(2)}`
