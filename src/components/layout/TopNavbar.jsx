import React from 'react';
import { Search, Menu, Plus } from 'lucide-react';
import { Avatar } from '../common/Avatar';

export const TopNavbar = () => {
  return (
    <header className="h-20 flex items-center justify-between px-8 bg-gray-50 sticky top-0 z-10">
      <div className="flex-1 max-w-lg">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder='Try searching "insights"' 
            className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 shadow-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-500 hover:bg-white hover:shadow-sm rounded-full transition-all">
          <Menu size={20} />
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
           <Avatar src="https://i.pravatar.cc/150?u=1" size="md" />
           <button className="w-9 h-9 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-rose-500/30 hover:bg-rose-600 transition-colors">
             <Plus size={18} />
           </button>
        </div>
      </div>
    </header>
  );
};