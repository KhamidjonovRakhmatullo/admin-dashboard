import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [2, 300, 200, 278, 189, 239, 349];
const bData = [11, 139, 98, 398, 48, 38, 43];
const pData = [30, 222, 44, 333, 77, 444, 43];
const amtData = [24, 444, 111, 2, 166, 25, 210];
const xLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
];

export default function LineChartComponent() {
  return (
    <LineChart
    // width="100%"
      width={600}
      height={400}
      series={[
        { data: uData, label: 'Motor', area: true, stack: 'total', showMark: false },
        { data: bData, label: 'Caravan', area: true, stack: 'total', showMark: false },
        { data: pData, label: 'Tuning', area: true, stack: 'total', showMark: false, color: "#447ea0"},
        { data: amtData, label: 'Used Car', area: true, stack: 'total', showMark: false, color: "#006DAB" },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        '.MuiLineElement-root': {
          display: 'none',
        },
      }}
    />
  );
}