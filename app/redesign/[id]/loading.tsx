export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full bg-white border-b">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-10 w-32 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      </header>

      <main className="container py-6">
        <div className="h-8 w-3/4 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
        <div className="h-6 w-1/2 bg-gray-200 rounded-lg animate-pulse mb-8"></div>

        <div className="aspect-[2/1] bg-gray-200 rounded-2xl animate-pulse mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex justify-between items-start pb-6 border-b mb-6">
              <div>
                <div className="h-6 w-1/2 bg-gray-200 rounded-lg animate-pulse mb-2"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
              <div className="h-14 w-14 bg-gray-200 rounded-full animate-pulse"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b mb-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="h-10 w-10 bg-gray-200 rounded-md animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-5 w-24 bg-gray-200 rounded-md animate-pulse mb-2"></div>
                    <div className="h-4 w-full bg-gray-200 rounded-md animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="py-6 border-b mb-6">
              <div className="h-4 w-full bg-gray-200 rounded-lg animate-pulse mb-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded-lg animate-pulse mb-2"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>

            <div className="py-6 border-b mb-6">
              <div className="h-6 w-48 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 bg-gray-200 rounded-md animate-pulse"></div>
                    <div className="h-4 w-24 bg-gray-200 rounded-md animate-pulse"></div>
                  </div>
                ))}
              </div>
              <div className="h-10 w-48 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="border rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="h-8 w-20 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-6 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>

              <div className="h-32 w-full bg-gray-200 rounded-xl animate-pulse mb-4"></div>
              <div className="h-12 w-full bg-gray-200 rounded-lg animate-pulse mb-4"></div>

              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex justify-between">
                    <div className="h-4 w-32 bg-gray-200 rounded-md animate-pulse"></div>
                    <div className="h-4 w-16 bg-gray-200 rounded-md animate-pulse"></div>
                  </div>
                ))}
                <div className="h-px w-full bg-gray-200"></div>
                <div className="flex justify-between">
                  <div className="h-5 w-32 bg-gray-200 rounded-md animate-pulse"></div>
                  <div className="h-5 w-20 bg-gray-200 rounded-md animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
