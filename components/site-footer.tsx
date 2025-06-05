export function SiteFooter() {
  return (
   <footer style={{ padding: "2rem", borderTop: "1px solid #e5e5e5", marginTop: "2rem" }} className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">© {new Date().getFullYear()} Everpay. All rights reserved.</p>
        </div>
      </footer>
  )
}
