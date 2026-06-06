import React from 'react';
import {
  ClipboardList,
  Eye,
  ShieldCheck,
  Package,
} from 'lucide-react';

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-red-800 uppercase tracking-[0.2em] font-bold text-sm mb-4">
            PROCESS
          </p>

          <h2 className="font-serif font-bold text-gray-900 text-4xl md:text-5xl mb-4">
            How it works
          </h2>

          <p className="text-gray-600 text-lg">
            Four simple steps from report to recovery.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <StepCard
            step="1"
            icon={<ClipboardList className="w-7 h-7" />}
            title="Report Item"
            text="Submit a quick form describing your lost or found item."
          />

          <StepCard
            step="2"
            icon={<Eye className="w-7 h-7" />}
            title="Search Listings"
            text="Browse and filter active reports across the campus."
          />

          <StepCard
            step="3"
            icon={<ShieldCheck className="w-7 h-7" />}
            title="Verify Ownership"
            text="Provide identifying details to confirm rightful ownership."
          />

          <StepCard
            step="4"
            icon={<Package className="w-7 h-7" />}
            title="Recover Item"
            text="Pick up at Student Affairs after staff verification."
          />

        </div>
      </div>
    </section>
  );
}

/* =========================
   REUSABLE CARD COMPONENT
========================= */
function StepCard({
  step,
  icon,
  title,
  text,
}: {
  step: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="relative bg-white rounded-xl border border-gray-100 shadow-sm p-8">

      {/* STEP NUMBER */}
      <div className="absolute -top-4 -left-4 w-10 h-10 bg-red-800 text-white font-bold flex items-center justify-center rounded-md shadow-md">
        {step}
      </div>

      {/* ICON */}
      <div className="text-blue-900 mb-5">
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="font-serif font-bold text-xl text-gray-900 mb-3">
        {title}
      </h3>

      {/* TEXT */}
      <p className="text-gray-600 leading-relaxed text-sm">
        {text}
      </p>

    </div>
  );
}