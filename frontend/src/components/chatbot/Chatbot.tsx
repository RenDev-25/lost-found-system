import { useState } from 'react';
import ChatWindow from './ChatWindow';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3'>
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full
          shadow-lg flex items-center justify-center transition-all hover:scale-105'
        aria-label='Open chatbot'
      >
        {isOpen ? '✕' : '💬'}
      </button>
    </div>
  );
}