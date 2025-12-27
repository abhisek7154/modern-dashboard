import React from 'react';
import { Card } from '../common/BaseCard';
import { ArrowUp, ChevronRight, Star } from 'lucide-react';
import { Avatar } from '../common/Avatar';

export const RevenueSection = () => {
  return (
    <Card className="col-span-full relative overflow-hidden">
      <div className="grid grid-cols-12 gap-8">
        
        {/* Left: Big Stats */}
        <div className="col-span-12 lg:col-span-5">
          <h2 className="text-lg font-bold text-gray-800 mb-1">Revenue</h2>
          <div className="flex items-baseline gap-4 mt-2">
            <span className="text-4xl font-extrabold text-gray-900">$528,976.82</span>
            <span className="bg-rose-100 text-rose-600 px-2 py-0.5 rounded-full text-xs font-bold flex items-center">
              <ArrowUp size={12} className="mr-1"/> 7.9%
            </span>
            <span className="bg-rose-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
               $27,335.09
            </span>
          </div>
          <p className="text-gray-400 text-sm mt-2 font-medium">vs prev. $501,641.73 Jun 1 - Aug 31, 2023</p>
          
          <div className="flex gap-8 mt-8">
            <div className="flex items-center gap-3">
               <Avatar src="https://i.pravatar.cc/150?u=a" size="md" />
               <div>
                 <div className="text-xs text-gray-400 font-medium">Sales Head</div>
                 <div className="font-bold text-sm text-gray-700">$209,633</div>
               </div>
            </div>
             <div className="flex items-center gap-3">
               <Avatar src="https://i.pravatar.cc/150?u=b" size="md" />
               <div>
                 <div className="text-xs text-gray-400 font-medium">Marketing</div>
                 <div className="font-bold text-sm text-gray-700">$156,841</div>
               </div>
            </div>
            {/* Progress bar mock */}
            <div className="flex-1 self-center hidden xl:block">
                 <div className="flex justify-between text-xs mb-1">
                    <span className="font-bold">29.65%</span>
                    <span className="font-bold">$117,115</span>
                 </div>
                 <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-800 w-[30%]"></div>
                 </div>
            </div>
          </div>
        </div>

        {/* Middle: Mini Cards */}
        <div className="col-span-12 lg:col-span-4 flex gap-4 items-center">
          <div className="bg-white border border-gray-100 shadow-md p-5 rounded-3xl w-full">
            <div className="text-xs text-gray-400 font-semibold mb-2 uppercase">Top sales</div>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-extrabold text-gray-800">72</span>
              <Avatar src="https://i.pravatar.cc/150?u=top" size="md" />
            </div>
            <div className="text-xs text-blue-500 font-bold mt-2 flex items-center">
               Mikasa A. <ChevronRight size={14} />
            </div>
          </div>
          
           <div className="bg-gray-900 text-white shadow-xl shadow-gray-300 p-5 rounded-3xl w-full relative">
             <Star size={16} className="absolute top-5 right-5 text-gray-500" />
            <div className="text-xs text-gray-400 font-semibold mb-2 uppercase">Best deal</div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-2xl font-bold">$42,300</span>
              <button className="bg-white/10 p-1 rounded-lg hover:bg-white/20 transition">
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="text-xs text-gray-400 mt-2 font-medium">Rolf Inc.</div>
          </div>
        </div>

        {/* Right: Small KPIs */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-3 justify-center">
           <div className="flex justify-between items-center p-3 border border-gray-100 rounded-2xl bg-gray-50/50">
             <span className="text-xs font-bold text-gray-500 uppercase">Deals</span>
             <div className="text-center">
                 <span className="font-bold text-gray-800 block text-lg">256</span>
                 <span className="text-[10px] text-gray-400">◇ 5</span>
             </div>
           </div>
           <div className="flex justify-between items-center p-3 border border-rose-100 rounded-2xl bg-rose-50/30">
             <span className="text-xs font-bold text-rose-500 uppercase">Value</span>
             <div className="text-right">
                <span className="font-bold text-rose-600 block text-lg">528k</span>
                <span className="text-[10px] text-rose-600 font-bold">↑ 7.9%</span>
             </div>
           </div>
           <div className="flex justify-between items-center p-3 border border-gray-100 rounded-2xl bg-gray-50/50">
             <span className="text-xs font-bold text-gray-500 uppercase">Win rate</span>
             <div className="text-right">
                <span className="font-bold text-gray-800 block text-lg">44%</span>
                <span className="text-[10px] text-gray-400">↑ 1.2%</span>
             </div>
           </div>
           
           <button className="bg-black text-white rounded-2xl py-3 text-sm font-bold mt-1 hover:bg-gray-800 transition-colors">
             Details
           </button>
        </div>

      </div>
    </Card>
  );
};