import { useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

function NotFound() {
  const router = useRouter()
  console.log(router)
  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }, [])
  return (
    <div className="not-found">
      <h1>Oooops</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to <Link href="/">Home</Link>{" "}
      </p>
    </div>
  )
}

export default NotFound
