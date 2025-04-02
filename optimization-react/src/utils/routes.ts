import { Challenge1 } from "../pages/Phase1/Challenge1";
import { Challenge2 } from "../pages/Phase1/Challenge2";
import Challenge3 from "../pages/Phase1/Challenge3";
import Phase2Challenge1 from "../pages/Phase2/Phase2Challenge1";
import Phase2Challenge2 from "../pages/Phase2/Phase2Challenge2";
import Phase2Challenge3 from "../pages/Phase2/Phase2Challenge3";

export const challenges: Record<string, { name: string; path: string; component: React.FC }[]> = {
  Phase1: [
    { name: "Challenge 1", path: "/phase1-challenge1", component: Challenge1 },
    { name: "Challenge 2", path: "/phase1-challenge2", component: Challenge2 },
    { name: "Challenge 3", path: "/phase1-challenge3", component: Challenge3 },
  ],
  Phase2: [
    { name: "Challenge 1", path: "/phase2-challenge1", component: Phase2Challenge1 },
    { name: "Challenge 2", path: "/phase2-challenge2", component: Phase2Challenge2 },
    { name: "Challenge 3", path: "/phase2-challenge3", component: Phase2Challenge3 },
  ],
};