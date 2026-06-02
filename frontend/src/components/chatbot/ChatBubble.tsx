interface ChatBubbleProps {
  role: 'user' | 'bot';
  text: string;
}

export default function ChatBubble({ role, text }: ChatBubbleProps) {
  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={[
          'max-w-[75%] px-3 py-2 rounded-2xl text-sm leading-relaxed',
          role === 'user'
            ? 'bg-blue-600 text-white rounded-tr-none'
            : 'bg-gray-100 text-gray-800 rounded-tl-none',
        ].join(' ')}
      >
        {text}
      </div>
    </div>
  );
}