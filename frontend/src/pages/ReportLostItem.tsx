export default function ReportLostItem() {
  return (
    <div className="max-w-xl mx-auto px-6 py-10">

      <h1 className="text-2xl font-bold mb-6">Report Lost Item</h1>

      <form className="space-y-4">

        <input placeholder="Title" className="w-full border p-2 rounded" />
        <textarea placeholder="Description" className="w-full border p-2 rounded" />
        <input placeholder="Location" className="w-full border p-2 rounded" />
        <input type="date" className="w-full border p-2 rounded" />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Submit
        </button>

      </form>

    </div>
  );
}