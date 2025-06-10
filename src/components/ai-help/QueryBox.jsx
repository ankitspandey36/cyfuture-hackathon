import React from 'react';
import { Send } from 'lucide-react';

const QueryBox = () => {
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <label htmlFor="query" className=" text-center block text-sm font-medium text-muted-foreground mb-2">
        Ask AI your query
      </label>

      <div className="flex items-center border border-border rounded-xl shadow-sm bg-white focus-within:ring-2 focus-within:ring-primary transition">
        <input
          type="text"
          id="query"
          placeholder="Type your question, e.g. best colleges for AI in India..."
          className="flex-1 px-4 py-3 text-sm text-gray-800 bg-transparent focus:outline-none"
        />
        <button
          className="flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-xl transition"
          aria-label="Send Query"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default QueryBox;
