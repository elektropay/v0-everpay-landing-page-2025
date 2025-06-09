export function FeaturesSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2>Features</h2>
        <ul className="flex overflow-x-auto pb-4 scrollbar-hide">
          <li className="flex min-w-[220px] items-center gap-3 rounded-xl bg-gray-100 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66669 10L9.16669 12.5L13.3334 7.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium">Profitable deposits</h3>
            </div>
          </li>

          <li className="flex min-w-[220px] items-center gap-3 rounded-xl bg-primary p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66669 10L8.33335 11.6667L13.3334 6.66667"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium">No commission</h3>
            </div>
          </li>

          <li className="flex min-w-[220px] items-center gap-3 rounded-xl bg-gray-100 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66669 10L9.16669 12.5L13.3334 7.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium">Good cashback</h3>
            </div>
          </li>

          <li className="flex min-w-[220px] items-center gap-3 rounded-xl bg-gray-100 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66669 10L9.16669 12.5L13.3334 7.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-medium">Fast transfers</h3>
            </div>
          </li>
        </ul>

        {/* Additional features can be added here if needed */}
      </div>
    </section>
  )
}
