export type GameState = "IDLE" | "PLAYING" | "ENDED";
export type GameCompleteModalState = "Submitting" | "Redirect to App" | "";

export const artistes = [
  "Sarkodie",
  "R2Bees",
  "Post Malone",
  "Kofi Kinata",
  "Young M.A.",
  "Lil Wayne",
  "Rihanna",
  "Beyonce",
  "Jay Z",
  "Kanye West",
  "Taylor Swift",
  "Justin Beiber",
  "Adele",
  "Drake",
  "Ed Sheeran",
  "Lady Gaga",
  "Ariana Grande",
  "Alicia Keys",
  "Cardi B",
  "Nicki Minaj",
  "John Legend",
];

export function generateRandValue(max: number) {
  return Math.floor(Math.random() * max);
}

export function saveUserProgress(progress: { round: number; score: number }) {
  const userprogress = JSON.stringify(progress);
  window.localStorage.setItem("artistszilla-progress", userprogress);
}

export function getUserProgress() {
  const progress = window.localStorage.getItem("artistszilla-progress");
  let userprogress = null;
  if (progress) {
    userprogress = JSON.parse(progress);
  }
  return userprogress;
}
