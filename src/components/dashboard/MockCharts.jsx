import React from 'react';
import { Card } from '../common/BaseCard';
import { Filter } from 'lucide-react';

export const PlatformStats = () => {
  const platforms = [
    { name: 'Dribbble', value: '$227,459', percent: '43%', icon: '🏀' },
    { name: 'Instagram', value: '$142,823', percent: '27%', icon: '📸' },
    { name: 'Behance', value: '$89,935', percent: '11%', icon: 'Bz' },
    { name: 'Google', value: '$37,028', percent: '7%', icon: 'G' },
  ];

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
           <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><Filter size={16} className="text-gray-400"/></button>
           <span className="text-sm font-semibold text-gray-500 self-center">Filters</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          {platforms.map((p) => (
            <div key={p.name} className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 p-2 -mx-2 rounded-xl transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-xs shadow-sm">
                    {p.icon}
                </div>
                <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900">{p.name}</span>
              </div>
              <div className="text-right">
                 <span className="block text-sm font-bold text-gray-800">{p.value}</span>
                 <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-md">{p.percent}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-end justify-between h-56 pl-4 border-l border-dashed border-gray-200 gap-3 pb-2">
            <div className="w-full bg-blue-50 rounded-t-xl h-[60%] relative group transition-all hover:bg-blue-100">
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white shadow-md px-2 py-1 rounded-lg text-xs font-bold hidden group-hover:block z-10">Be</div>
            </div>
             <div className="w-full bg-pink-50 rounded-t-xl h-[90%] relative group hover:bg-pink-100">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white shadow-sm p-1.5 rounded-full"><span className="text-xs">🏀</span></div>
            </div>
             <div className="w-full bg-gray-100 rounded-t-xl h-[30%]"></div>
             <div className="w-full bg-orange-50 rounded-t-xl h-[50%] relative hover:bg-orange-100">
                 <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white shadow-sm p-1.5 rounded-full"><span className="text-xs">📸</span></div>
             </div>
        </div>
        <div className="col-span-2 text-xs text-gray-400 mt-2 font-medium">
            Deals amount by referrer category
        </div>
      </div>
    </Card>
  );
};

export const SalesChart = () => {
  return (
    <Card className="p-6">
       <div className="flex justify-between items-center mb-4">
         <div>
           <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center text-xs shadow-sm">🏀</div>
             <span className="font-bold text-gray-700">Dribbble</span>
           </div>
           <div className="mt-4">
              <h3 className="text-3xl font-extrabold text-gray-800">45.3% <span className="text-gray-300 ml-2">$71,048</span></h3>
           </div>
         </div>
         
         <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-4 min-w-[140px]">
            <div className="flex items-center gap-2 mb-2">
               <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-xs">📸</div>
               <span className="font-bold text-xs text-gray-700">Instagram</span>
            </div>
            <div className="text-xs font-medium text-gray-400">28.1% <span className="text-gray-300 ml-1">$44,072</span></div>
            <div className="mt-2 text-xs font-bold flex items-center gap-1 text-gray-800">
                <div className="w-2 h-2 bg-black rounded-sm"></div> Other
            </div>
            <div className="text-xs text-gray-300 ml-3">7.1% $11,136</div>
         </div>
       </div>

       <div className="h-40 w-full mt-6 relative">
          <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
             {/* Gradient Definition */}
             <defs>
                <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#E11D48" stopOpacity="0.1"/>
                    <stop offset="100%" stopColor="#E11D48" stopOpacity="0"/>
                </linearGradient>
             </defs>
             
             <line x1="0" y1="35" x2="100" y2="35" stroke="#f3f4f6" strokeWidth="0.5" />
             <line x1="0" y1="20" x2="100" y2="20" stroke="#f3f4f6" strokeWidth="0.5" />
             
             {/* Chart Line */}
             <path 
               d="M0 35 C 10 35, 15 30, 25 32 C 35 34, 40 25, 50 20 C 60 15, 65 25, 75 22 C 85 19, 90 10, 100 5" 
               fill="none" 
               stroke="#E11D48" 
               strokeWidth="1.5"
               strokeLinecap="round"
             />
             
             <circle cx="50" cy="20" r="1.5" fill="#fff" stroke="#E11D48" strokeWidth="1" />
             <circle cx="25" cy="32" r="1.5" fill="#3B82F6" stroke="#fff" strokeWidth="0.5" />
             <circle cx="75" cy="22" r="1.5" fill="#1F2937" stroke="#fff" strokeWidth="0.5" />
          </svg>
          <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-medium uppercase tracking-wider">
             <span>W1</span><span>W3</span><span>W5</span><span>W7</span><span>W9</span><span>W11</span>
          </div>
       </div>
    </Card>
  )
}