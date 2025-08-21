import { Heatmap } from "../heatmap";
import { HomeInput } from "./home.input";
import { HomeTitle } from "./home.title";

export function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center space-y-7">
            <HomeTitle />
            <HomeInput />
            <Heatmap />
        </main>
    );
}
