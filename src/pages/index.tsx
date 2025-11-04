import { useState } from 'react';
import { type StatsType } from '@/types/dashboard.ts';
import Stats from '@/components/Dashboard/Stats.tsx';
import Table from '@/components/Common/Table.tsx';
import Post from '@/components/Dashboard/NewsFeed/Post.tsx';

interface TransactionHeader {
  label: string;
  key: string;
  align?: 'left' | 'center' | 'right';
  width?: string;
}

const Dashboard = () => {
  const stats: StatsType[] = [
    {
      label: 'Total',
      count: 3,
    },
  ];
  const transactionHeader: TransactionHeader[] = [
    {
      label: 'Date',
      key: 'date',
      align: 'left',
      width: '100px',
    },
    {
      label: 'Category',
      key: 'date',
      align: 'left',
      width: '100px',
    },
    {
      label: 'Amount',
      key: 'date',
      align: 'left',
      width: '100px',
    },
  ];
  return (
    <>
      <h1 className="text-3xl my-6">Dashboard</h1>
      <div className="mb-4">
        <div className="grid grid-cols-12">
          {stats.map((stat, index) => (
            <div key={index} className="col-span-12 md:col-span-4">
              <Stats props={stat} />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8">
          <Post />
        </div>
        <div className="col-span-12 shadow p-6 bg-white md:col-span-4">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <h1 className="text-3xl ">Recent Transactions</h1>
            </div>
            <div className="col-span-12">
              <Table props={{ headers: transactionHeader, data: [] }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
