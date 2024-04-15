import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const aData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const bData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];

const xLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
];

export default function BarChartComponent() {
  return (
    <BarChart
      width={500}
      height={400}
      series={[
        { data: pData, label: 'Motor', id: 'pvId', stack: 'total' },
        { data: uData, label: 'Caravan', id: 'uvId', stack: 'total' },
        { data: aData, label: 'Tuning', id: 'avId', stack: 'total', color: "#447ea0"},
        { data: bData, label: 'Used Car', id: 'bvId', stack: 'total', color: "#006DAB" },

      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}