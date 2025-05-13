import { Suspense } from "react"
import { VSCodePortfolio } from "@/components/vscode-portfolio"
import { LoadingPlaceholder } from "@/components/loading-placeholder"

export default function Home() {
  return (
    <Suspense fallback={<LoadingPlaceholder height="100vh" />}>
      <VSCodePortfolio />
    </Suspense>
  )
}
