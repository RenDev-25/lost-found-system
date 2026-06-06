
import { FileText, Search, ShieldCheck, MapPin } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="text-center mb-14">
          <p className="text-red-800 uppercase font-bold text-sm">
            WHY UNIFIND
          </p>

          <h2 className="font-serif text-4xl font-bold text-gray-900">
            A reliable system, built for campus.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <Card icon={<FileText />} title="Easy Reporting System"
            text="File lost or found item reports in under a minute." />

          <Card icon={<Search />} title="Fast Item Search"
            text="Filter by category, location, status, and date." />

          <Card icon={<ShieldCheck />} title="Secure Claim Process"
            text="Identity verification ensures safe returns." />

          <Card icon={<MapPin />} title="Campus-Wide Support"
            text="Coverage across all campus buildings." />

        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, text }: any) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center">
        {icon}
      </div>

      <h3 className="font-serif text-xl font-semibold mt-6 mb-3">
        {title}
      </h3>

      <p className="text-gray-600">{text}</p>
    </div>
  );
}