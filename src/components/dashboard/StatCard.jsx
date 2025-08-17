import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const StatCard = ({ title, value, icon, color }) => (
  <Card className="border-0 shadow-lg">
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-600">{title}</p>
          <p className="text-3xl font-bold text-slate-900">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          {icon}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default StatCard;