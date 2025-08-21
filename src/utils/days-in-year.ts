export type DaysType = {
    day: number;
    year: number;
    month: number;
    formatted?: string;
};

export function daysInYear(year: number) {
    const start = new Date(year, 0, 1);
    const end = new Date(year + 1, 0, 1);

    const days: DaysType[] = [];
    let current = new Date(start);

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    while (current < end) {
        const day = current.getDate();
        const month = current.getMonth() + 1;
        const year = current.getFullYear();

        days.push({
            day,
            month,
            year,
            formatted: `${dayNames[current.getDay()]} ${day} ${monthNames[month - 1]} ${year}`,
        });

        current.setDate(current.getDate() + 1);
    }

    return days;
}
