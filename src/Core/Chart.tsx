// import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
// import { data, options } from "@/data/data";
// import { data, options } from "../../api/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  // Title,
  Tooltip,
  // Legend
);

import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';

const data = [4000, 3000, 2000, 1890, 2390, 3490];
const xData = ['A', 'B', 'C', 'D', 'E', 'F'];

const Chart = () => {

  return (
    <div className=" w-full   bg-white rounded-lg">
      {/* <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className=" text-xs  tracking-widest text-gray-700">
            Narxlar tarixi
          </div>

        </div>

      </div> */}
      <div>
        <Stack sx={{ width: '100%' }} className=" p-0">

          <LineChart
            xAxis={[{ data: xData, scaleType: 'point' }]}
            series={[{ data, showMark: false, area: true, connectNulls: true, label: "Narxlar tarixi" }]}
            height={200}
            margin={{ top: 10, bottom: 20 }}
          />
        </Stack>
        {/* <Line width={1200} height={600} data={data} options={options} ></Line> */}
      </div>
    </div>
  );
};

export default Chart;
