export default function ItemDetails() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">

      <h1 className="text-2xl font-bold">Item Details</h1>

      <div className="mt-6 p-6 border rounded-xl bg-white space-y-3">

        <h2 className="text-xl font-semibold">Lost Wallet</h2>

        <p className="text-gray-600">Category: Wallet</p>
        <p className="text-gray-600">Location: Library</p>
        <p className="text-gray-600">Date: June 1, 2026</p>

        <p className="mt-4 text-gray-700">
          Black leather wallet with ID cards inside.
        </p>

        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg">
          Claim Item
        </button>

      </div>

    </div>
  );
}