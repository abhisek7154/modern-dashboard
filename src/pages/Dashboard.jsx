import React from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { TopNavbar } from '../components/layout/TopNavbar';
import { AvatarGroup, Avatar } from '../components/common/Avatar';
import { RevenueSection } from '../components/dashboard/RevenueSection';
import { PlatformStats, SalesChart } from '../components/dashboard/MockCharts';
import { Card } from '../components/common/BaseCard';
import { Plus } from 'lucide-react';

const salesReps = [
  { name: 'Armin A.', revenue: '$209,633', leads: 41, kpi: 118, win: 0.84, wl: '31% 12 29', img: 'https://i.pravatar.cc/150?u=1' },
  { name: 'Mikasa A.', revenue: '$156,841', leads: 54, kpi: 103, win: 0.89, wl: '39% 21 33', img: 'https://i.pravatar.cc/150?u=2', active: true },
  { name: 'Eren Y.', revenue: '$117,115', leads: 22, kpi: 84, win: 0.79, wl: '32% 7 15', img: 'https://i.pravatar.cc/150?u=3' },
];

const Dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans flex">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <TopNavbar />
        
        <div className="max-w-7xl mx-auto mt-6">
          
          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 bg-white border border-dashed border-gray-300 rounded-full flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-all">
                <Plus size={20} />
              </button>
              <AvatarGroup images={[
                'https://i.pravatar.cc/150?u=1', 
                'https://i.pravatar.cc/150?u=2',
                'https://i.pravatar.cc/150?u=3'
              ]} />
              <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-gray-400/50">C</div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center bg-white rounded-full p-1 pl-4 border border-gray-200 shadow-sm">
                    <span className="text-xs font-semibold text-gray-500 mr-3">Timeframe</span>
                    <button className="bg-gray-100 px-3 py-1.5 rounded-full text-xs font-bold text-gray-800 hover:bg-gray-200 transition-colors">
                        Sep 1 - Nov 30, 2023
                    </button>
                </div>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-200 tracking-tight">New report</h1>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-12 gap-6">
            
            <RevenueSection />

            {/* Bottom Row Left: Platform Stats & Month Chart */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
                <PlatformStats />
                
                {/* Monthly Revenue Chart (Red card) */}
                {/* Monthly Revenue Chart (Red card) */}
<div className="bg-rose-500 text-white p-6 rounded-3xl shadow-sm relative overflow-hidden h-[300px]">
    <div className="flex justify-between items-start z-10 relative">
        <div>
            <div className="text-rose-200 text-xs font-bold uppercase tracking-wider mb-1">Platform value</div>
            <div className="font-bold flex items-center gap-2 text-lg">
                <div className="bg-white/20 p-1 rounded-full"><span className="text-xs">🏀</span></div>
                Dribbble
            </div>
        </div>
        <div className="flex gap-2 text-[10px] font-bold bg-black/20 p-1 rounded-lg">
            <span className="bg-black text-white px-2 py-1 rounded">Revenue</span>
            <span className="px-2 py-1 text-rose-100 cursor-pointer hover:bg-white/10 rounded">Leads</span>
            <span className="px-2 py-1 text-rose-100 cursor-pointer hover:bg-white/10 rounded">W/L</span>
        </div>
    </div>

    <div className="mt-8 mb-2 relative z-10">
        <div className="text-sm text-rose-100 font-medium">Revenue</div>
        <div className="text-4xl font-extrabold mb-3">$18,552</div>
        <div className="space-y-1">
            <div className="text-xs text-rose-200 font-medium">Leads <span className="text-white font-bold ml-1">373</span> <span className="opacity-60">97/276</span></div>
            <div className="text-xs text-rose-200 font-medium">Win/lose <span className="text-white font-bold ml-1">16%</span> <span className="opacity-60">51/318</span></div>
        </div>
    </div>

    {/* Mock Bars */}
     <div className="absolute bottom-0 right-0 left-0 h-32 flex items-end justify-around px-6 gap-3 z-0">
        {[40, 60, 30, 80, 50, 60].map((h, i) => (
           <div key={i} className="w-full bg-white/20 rounded-t-sm relative group transition-all hover:bg-white/30 cursor-pointer" style={{height: `${h}%`}}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-rose-500 text-[10px] font-bold px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    ${h}k
                </div>
                <div className="absolute -bottom-6 text-[10px] text-rose-200 font-semibold left-1/2 -translate-x-1/2">
                   {['Sep','Oct','Nov','Dec','Jan','Feb'][i]}
                </div>
                <Avatar src={`https://i.pravatar.cc/150?u=${i + 10}`} size="sm" className="w-4 h-4 absolute bottom-2 left-1/2 -translate-x-1/2 border-none ring-2 ring-rose-400" />
           </div>
        ))}
     </div>
</div>
            </div>

            {/* Bottom Row Right: Sales Table & Line Chart */}
            <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
                
                {/* Sales Rep Table */}
                <div className="bg-transparent">
                   <div className="grid grid-cols-6 text-xs text-gray-400 font-bold uppercase tracking-wider px-4 mb-3">
                      <div className="col-span-2">Sales</div>
                      <div className="text-right">Revenue</div>
                      <div className="text-center">Leads</div>
                      <div className="text-center">KPI</div>
                      <div className="text-right">W/L</div>
                   </div>
                   
                   <div className="space-y-3">
                      {salesReps.map((rep, idx) => (
                        <div key={idx} className={`grid grid-cols-6 items-center bg-white p-3 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer ${rep.active ? 'ring-1 ring-rose-100 bg-rose-50/10' : ''}`}>
                            <div className="col-span-2 flex items-center gap-3">
                                <Avatar src={rep.img} size="md" />
                                <span className="font-bold text-gray-700 text-sm">{rep.name}</span>
                            </div>
                            <div className="text-right font-bold text-gray-800 text-sm">{rep.revenue}</div>
                            <div className="text-center">
                                <span className="bg-gray-900 text-white text-xs font-bold px-2.5 py-1 rounded-full">{rep.leads}</span>
                            </div>
                            <div className="text-center text-sm font-semibold text-gray-600">{rep.kpi}</div>
                            <div className="text-right text-xs font-bold text-gray-500 font-mono">
                                {rep.wl}
                            </div>
                        </div>
                      ))}
                   </div>
                   
                   <div className="flex gap-3 mt-5 overflow-x-auto pb-2 scrollbar-hide">
                       <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-gray-600 shadow-sm whitespace-nowrap cursor-pointer hover:bg-gray-50">Top sales 👍</span>
                       <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-gray-600 shadow-sm whitespace-nowrap cursor-pointer hover:bg-gray-50">Sales streak 🔥</span>
                       <span className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-gray-600 shadow-sm whitespace-nowrap cursor-pointer hover:bg-gray-50">Top review ✍️</span>
                   </div>
                </div>

                <div className="flex-1">
                   <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3 pl-1">Work with platforms</div>
                   <SalesChart />
                </div>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;