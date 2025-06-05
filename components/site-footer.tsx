export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600">© {new Date().getFullYear()} Everpay. All rights reserved.</p>
      </div>
    </footer>
  )
}
