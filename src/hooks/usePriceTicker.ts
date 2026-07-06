import { useEffect, useState } from 'react'

const REF_PRICE = 5344.22

export function usePriceTicker() {
  const [priceState, setPriceState] = useState({ current: 5591.15, prev: 5591.15 })

  useEffect(() => {
    const tick = setInterval(() => {
      setPriceState(s => {
        const next = +(Math.max(5100, Math.min(6400, s.current + (Math.random() - 0.46) * 5.5)).toFixed(2))
        return { current: next, prev: s.current }
      })
    }, 1100)
    return () => clearInterval(tick)
  }, [])

  const { current: price } = priceState
  const absDelta = +(price - REF_PRICE).toFixed(2)
  const pctDelta = +((absDelta / REF_PRICE) * 100).toFixed(2)
  const isUp = absDelta >= 0

  return { price, absDelta, pctDelta, isUp }
}
