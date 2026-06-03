export default function BrowseItems() {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-2xl font-bold mb-6">Browse Items</h1>

      {/* SEARCH BAR */}
      <input
        placeholder="Search items..."
        className="w-full mb-6 px-4 py-2 border rounded-lg"
      />

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {items.map((item) => (
          <div key={item} className="p-4 border rounded-xl bg-white shadow-sm hover:shadow-md">
            <h3 className="font-semibold">Lost Item #{item}</h3>
            <p className="text-sm text-gray-500">Category: Wallet</p>
            <p className="text-sm text-gray-500">Status: Lost</p>

            <a href="/item/1" className="text-blue-600 text-sm mt-3 inline-block">
              View Details
            </a>
          </div>
        ))}

      </div>

    </div>
  );
}