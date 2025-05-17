export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container py-6">
        <div className="h-8 w-3/4 bg-gray-200 rounded-md animate-pulse mb-4"></div>
        <div className="h-6 w-1/2 bg-gray-200 rounded-md animate-pulse mb-8"></div>

        <div className="aspect-[2/1] bg-gray-200 rounded-xl animate-pulse mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="h-6 w-1/2 bg-gray-200 rounded-md animate-pulse mb-4"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded-md animate-pulse mb-8"></div>

            <div className="h-40 w-full bg-gray-200 rounded-md animate-pulse mb-8"></div>

            <div className="h-60 w-full bg-gray-200 rounded-md animate-pulse mb-8"></div>
          </div>

          <div className="md:col-span-1">
            <div className="border rounded-xl p-6">
              <div className="h-8 w-1/2 bg-gray-200 rounded-md animate-pulse mb-4"></div>
              <div className="h-20 w-full bg-gray-200 rounded-md animate-pulse mb-4"></div>
              <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse mb-4"></div>
              <div className="h-40 w-full bg-gray-200 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
