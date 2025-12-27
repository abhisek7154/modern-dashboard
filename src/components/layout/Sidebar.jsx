import React from 'react';
import { LayoutDashboard, FileText, Folder, Users, Star, Clock, Settings } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active, count }) => (
  <div className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all group ${active ? 'bg-white shadow-sm text-rose-500' : 'text-gray-500 hover:bg-gray-100'}`}>
    <div className="flex items-center gap-3">
      <Icon size={18} className={active ? 'text-rose-500' : 'text-gray-400 group-hover:text-gray-600'} />
      <span className={`text-sm font-medium ${active ? 'text-gray-900' : ''}`}>{label}</span>
    </div>
    {count && (
      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${active ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
        {count}
      </span>
    )}
  </div>
);

export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-gray-50 border-r border-gray-200 p-4 flex flex-col overflow-y-auto z-20">
      {/* Logo Area */}
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-lg">C</div>
        <span className="font-bold text-gray-800 text-lg">Codename.com</span>
      </div>

      {/* Navigation */}
      <div className="space-y-1 mb-8">
        <div className="px-4 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Starred</div>
        <SidebarItem icon={Star} label="Starred" />
        <SidebarItem icon={Clock} label="Recent" />
      </div>

      <div className="space-y-1 mb-8">
         <div className="px-4 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Sales List</div>
         <SidebarItem icon={LayoutDashboard} label="Dashboard" />
         <SidebarItem icon={Folder} label="Codename" />
         <SidebarItem icon={Users} label="Shared with me" />
         <SidebarItem icon={FileText} label="Cloudz3r" count={2} active />
         <SidebarItem icon={Folder} label="Idioma" />
         <SidebarItem icon={Folder} label="Syllables" />
      </div>

      <div className="mt-auto pt-4 border-t border-gray-200">
         <SidebarItem icon={Settings} label="Manage folders" />
      </div>
    </aside>
  );
};