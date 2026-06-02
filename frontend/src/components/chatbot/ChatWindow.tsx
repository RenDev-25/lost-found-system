import { useState, useRef, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import QuickReplies from './QuickReplies';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const responses: Record<string, string> = {
  'lost item':
    'Go to Report Lost in the navbar and fill in the item details.',
  'found item':
    'Go to Report Found in the navbar and describe the item clearly.',
  claim:
    'Browse items, open the item you believe is yours, and click Claim.',
  'how to report':
    'Use the top navigation: Report Lost or Report Found.',
  browse:
    'Click Browse Items in the navigation to see all reported items.',
  contact:
    'Visit the university lost and found office or submit a claim here.',
  help:
    'I can help with: lost items, found items, claiming, or browsing.',
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();

  for (const [key, response] of Object.entries(responses)) {
    if (lower.includes(key)) return response;
  }

  return 'Try asking about: lost items, found items, claiming, browsing, or contact.';
}

export default function ChatWindow({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: 'Hi! I am the Lost & Found assistant. How can I help?',
    },
  ]);

  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: 'user', text }]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: getBotResponse(text) },
      ]);
    }, 800);
  };

  return (
    <div className="w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">

      {/* Header */}
      <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between rounded-t-2xl">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="text-sm font-semibold">
            Lost & Found Assistant
          </span>
        </div>

        <button onClick={onClose} className="text-blue-200 hover:text-white">
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[280px] max-h-[320px]">
        {messages.map((msg, i) => (
          <ChatBubble key={i} role={msg.role} text={msg.text} />
        ))}

        {typing && (
          <div className="flex gap-1 px-3 py-2 bg-gray-100 rounded-2xl rounded-tl-none w-fit">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Quick replies */}
      <QuickReplies onSelect={send} />

      {/* Input box */}
      <div className="flex items-center gap-2 p-3 border-t border-gray-100">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send(input)}
          placeholder="Type a message..."
          className="flex-1 text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={() => send(input)}
          className="w-8 h-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
        >
          ➤
        </button>
      </div>
    </div>
  );
}