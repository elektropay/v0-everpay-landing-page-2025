export default function MerchantApplicationPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="p-4 border-b">
        <h1 className="text-2xl font-bold">Everpay</h1>
      </header>
      <main className="p-4">
        <h2 className="text-xl font-semibold mb-4">Merchant Application</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Business Name</label>
            <input type="text" className="border p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input type="email" className="border p-2 w-full" />
          </div>
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Submit
          </button>
        </form>
      </main>
    </div>
  )
}
