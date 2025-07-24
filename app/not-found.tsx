import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-white text-everpayText">
      <h1 className="text-6xl font-bold font-heading mb-4">404</h1>
      <p className="text-xl mb-8 font-sans">Page Not Found</p>
      <Link href="/" className="text-everpayGreen hover:underline font-sans">
        Go back home
      </Link>
    </div>
  )
}
