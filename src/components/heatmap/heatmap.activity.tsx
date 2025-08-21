import { DaysType } from "@/utils/days-in-year";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { ACTIVITY_GRADUATION } from "./heatmap.constants";

const dummyHeatmap = [
    {
        id: 345345,
        minutes: 23,
        date: "Wednesday, 21 May 2025",
        day: 20,
        year: 2025,
        month: 5,
    },
    {
        id: 435435,
        minutes: 1,
        date: "Wednesday, 21 May 2025",
        day: 1,
        year: 2025,
        month: 1,
    },

];

export function HeatmapActivity({ date }: { date: DaysType }) {
    const currentActivity = dummyHeatmap.find((activity) => {
        const isCurrentDay =
            activity.month === date.month &&
            activity.day === date.day &&
            activity.year === date.year;

        return isCurrentDay;
    });

    const minutesCount = currentActivity ? currentActivity.minutes : 0;

    return (
        <Tooltip delayDuration={300}>
            <TooltipTrigger>
                <div
                    style={{
                        backgroundColor: minutesCount
                            ? ACTIVITY_GRADUATION[minutesCount] || "#FFFFFF"
                            : "#151515",
                    }}
                    className="w-[20px] cursor-pointer h-[20px] rounded-sm border-2 border-transparent hover:border-white"
                />
            </TooltipTrigger>

            <TooltipContent>
                {minutesCount > 0 ? `${minutesCount} ${minutesCount > 1 ? "minutes" : "minute"}` : "no minutes"} on {date.formatted}
            </TooltipContent>

        </Tooltip>
    );
}

