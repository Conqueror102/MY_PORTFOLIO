"use client"

import { useState, useEffect } from "react"

/**
 * A hook to safely check if a component is mounted
 * Useful for preventing hydration errors with client-side only code
 */
export function useMounted() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  return isMounted
}
