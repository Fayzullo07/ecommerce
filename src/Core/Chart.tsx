import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { data, options } from "@/data/data";
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

const Chart = () => {

  return (
    <div className=" w-full  bg-white rounded-lg">
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center gap-3">
          <div className=" text-xs  tracking-widest text-gray-700">
            Narxlar tarixi
          </div>
  
        </div>
       
      </div>
      <div>
        <Line width={1200} height={600} data={data} options={options} ></Line>
      </div>
    </div>
  );
};

export default Chart;
