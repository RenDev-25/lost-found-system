const quickReplies = [
  'How to report?',
  'How to claim?',
  'Browse items',
  'Contact',
];

export default function QuickReplies({
  onSelect,
}: {
  onSelect: (text: string) => void;
}) {
  return (
    <div className="px-3 pb-2 flex flex-wrap gap-1.5">
      {quickReplies.map((r) => (
        <button
          key={r}
          onClick={() => onSelect(r)}
          className="px-2.5 py-1 text-xs bg-blue-50 text-blue-600 border border-blue-100 rounded-full hover:bg-blue-100 transition-colors"
        >
          {r}
        </button>
      ))}
    </div>
  );
}