import { daysInYear } from "@/utils/days-in-year";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { ACTIVITY_GRADUATION } from "./heatmap.constants";
import { HeatmapActivity } from "./heatmap.activity";

const date = new Date();
const currentYear = date.getFullYear();
const HEATMAP_COUNT = daysInYear(currentYear);



export function Heatmap() {
    return (
        <div className="grid grid-cols-[repeat(60,_minmax(0,_1fr))] w-ful gap-1">
            {HEATMAP_COUNT.map((date, i) => <HeatmapActivity key={i} date={date} />)}
        </div>
    );
}
