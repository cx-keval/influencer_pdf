import { IconCaretUpFilled } from "@tabler/icons-react";
import Chart from "react-apexcharts";

const subTitle = {
    Followers:
        "Followers growth is measured by the monthly increase in the total number of Followers.",
    Subscribers:
        "Subscribers growth is measured by the monthly increase in the total number of Subscribers.",
};
const GrowthRateLineChart = ({ options, series, type }) => {
    return (
        <div className="flex flex-col rounded-md border py-4">
            <div>
                <p className="pl-4 text-sm font-medium text-slate-600">
                    {type} Analysis
                </p>
                <p className="pl-4 text-xs text-slate-400">{subTitle[type]}</p>
            </div>

            <div className="flex-1">
                <Chart
                    type="area"
                    options={options}
                    series={series}
                    height={230}
                />
            </div>

            <div className="px-4">
                <div className="flex items-center justify-between rounded-md border px-2 py-1 text-sm">
                    <span className="text-slate-600">Growth by {type}</span>

                    <div className="flex justify-end gap-2 text-sm">
                        <span className="flex items-center text-sm font-semibold text-green-500">
                            <IconCaretUpFilled className="h-4 w-4" />
                            8.7%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrowthRateLineChart;
