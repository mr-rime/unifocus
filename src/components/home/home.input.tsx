import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { AlarmClock } from "lucide-react";

export function HomeInput() {
    return (
        <div className="w-full max-w-[500px] relative flex items-center h-fit">
            <Input
                placeholder="I will focus on..."
                className="h-[50px] border border-[#363635] focus-visible:border-[#464646] focus-visible:ring-[#2C2C2C] placeholder:!text-[#434346] text-white"
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-2 ">
                <Button className="cursor-pointer text-[#808080] flex items-center gap-2">
                    <AlarmClock />
                    Start
                </Button>
            </div>
        </div>
    );
}
