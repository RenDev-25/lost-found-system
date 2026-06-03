export default function Admin() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="p-6 bg-white border rounded-xl">
          <h3>Total Items</h3>
          <p className="text-2xl font-bold">120</p>
        </div>

        <div className="p-6 bg-white border rounded-xl">
          <h3>Lost Items</h3>
          <p className="text-2xl font-bold">45</p>
        </div>

        <div className="p-6 bg-white border rounded-xl">
          <h3>Found Items</h3>
          <p className="text-2xl font-bold">75</p>
        </div>

      </div>

    </div>
  );
}