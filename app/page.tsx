import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-48">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
            Custom T-Shirts
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 lg:mb-8 lg:mt-16">
            Design and order custom t-shirts online. Choose from a variety of
            styles, colors, and sizes to create your unique personalized
            t-shirts.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href="design-studio"
              className="inline-flex items-center justify-center w-full px-8 py-4 text-lg font-bold leading-6 text-white bg-amber-600 border border-transparent rounded-full md:w-auto hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600"
            >
              Design Your T-Shirt
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>

            <Link
              href="/catalog"
              className="inline-flex justify-center items-center px-8 py-4 text-lg font-medium text-center text-gray-900 rounded-full border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            >
              Explore our Catalog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
