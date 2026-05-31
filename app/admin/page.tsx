"use client";

import React, { useState } from 'react';
import { Mail, Users, Heart, GraduationCap, Download } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

// TODO: Connect admin panel to a real database/backend for data fetching

const tabs = [
  { id: 'messages', label: 'Messages', icon: <Mail className="w-5 h-5" /> },
  { id: 'subscribers', label: 'Subscribers', icon: <Users className="w-5 h-5" /> },
  { id: 'donations', label: 'Donations', icon: <Heart className="w-5 h-5" /> },
  { id: 'mentorship', label: 'Mentorship', icon: <GraduationCap className="w-5 h-5" /> },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('messages');

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex flex-col w-[240px] bg-brand-brown fixed top-0 bottom-0 left-0 z-40 pt-20 pb-6 px-4">
        <div className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4 px-4">Admin Panel</div>
        <nav className="flex-1 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                activeTab === tab.id 
                  ? 'bg-orange-tint/20 text-brand-orange border-l-4 border-brand-orange' 
                  : 'text-white/80 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
              }`}
            >
              {tab.icon}
              <span className="ml-3 font-medium">{tab.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-[240px] p-4 md:p-8 pb-24 md:pb-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Messages', value: '124' },
            { label: 'Newsletter Subscribers', value: '892' },
            { label: 'Donations Received', value: '45' },
            { label: 'Mentorship Registrations', value: '67' }
          ].map((stat, i) => (
            <Card key={i} className="p-5 flex flex-col justify-center">
              <div className="text-[32px] font-bold text-brand-green leading-none mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-brand-brown">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {activeTab === 'messages' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-brand-brown">
                    <th className="p-4 font-bold">Status</th>
                    <th className="p-4 font-bold">Name</th>
                    <th className="p-4 font-bold">Email</th>
                    <th className="p-4 font-bold">Subject</th>
                    <th className="p-4 font-bold">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  {[1, 2, 3].map((row) => (
                    <tr key={row} className="hover:bg-gray-50 cursor-pointer">
                      <td className="p-4">{row === 1 ? <Badge variant="admin-new">New</Badge> : <span className="text-gray-500">Read</span>}</td>
                      <td className="p-4 font-medium text-[#111111]">Jane Doe</td>
                      <td className="p-4 text-gray-600">jane@example.com</td>
                      <td className="p-4 text-[#111111]">Partnership Inquiry</td>
                      <td className="p-4 text-gray-500">Oct 24, 2025</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'subscribers' && (
            <div className="p-4">
              <div className="flex justify-end mb-4">
                <Button variant="secondary" size="small"><Download className="w-4 h-4 mr-2" /> Export CSV</Button>
              </div>
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-brand-brown">
                      <th className="p-4 font-bold">Email</th>
                      <th className="p-4 font-bold">Date Subscribed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-sm">
                    {[1, 2, 3].map((row) => (
                      <tr key={row} className="hover:bg-gray-50">
                        <td className="p-4 text-[#111111] font-medium">user{row}@example.com</td>
                        <td className="p-4 text-gray-500">Oct 24, 2025</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'donations' && (
            <div className="p-4">
              <div className="mb-6 p-4 bg-green-tint rounded-lg border border-brand-green/20">
                <div className="text-sm text-brand-green font-medium mb-1">Total Raised</div>
                <div className="text-2xl font-bold text-brand-brown">1,250,000 UGX</div>
              </div>
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-brand-brown">
                      <th className="p-4 font-bold">Name</th>
                      <th className="p-4 font-bold">Email</th>
                      <th className="p-4 font-bold">Amount (UGX)</th>
                      <th className="p-4 font-bold">Method</th>
                      <th className="p-4 font-bold">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-sm">
                    {[1, 2, 3].map((row) => (
                      <tr key={row} className="hover:bg-gray-50">
                        <td className="p-4 text-[#111111] font-medium">John Smith</td>
                        <td className="p-4 text-gray-600">john@example.com</td>
                        <td className="p-4 font-medium text-brand-green">50,000</td>
                        <td className="p-4 text-gray-600">MTN Mobile Money</td>
                        <td className="p-4 text-gray-500">Oct 23, 2025</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'mentorship' && (
            <div className="p-4">
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-brand-brown">
                      <th className="p-4 font-bold">Email</th>
                      <th className="p-4 font-bold">Date Registered</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-sm">
                    {[1, 2].map((row) => (
                      <tr key={row} className="hover:bg-gray-50">
                        <td className="p-4 text-[#111111] font-medium">student{row}@university.ac.ug</td>
                        <td className="p-4 text-gray-500">Oct 20, 2025</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Tab Bar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-brand-brown z-50 flex border-t border-white/10 pb-safe">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex flex-col items-center justify-center py-3 px-1 transition-colors ${
              activeTab === tab.id 
                ? 'text-brand-orange bg-white/5' 
                : 'text-white/60 hover:text-white'
            }`}
          >
            {tab.icon}
            <span className="text-[10px] mt-1 font-medium truncate w-full text-center">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}