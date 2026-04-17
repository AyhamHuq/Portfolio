export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  sourceUrl: string;
  inviteUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "goals",
    title: "Goals",
    tagline: "Family Goal Tracker",
    description:
      "A full-stack goal tracking app for small, trusted groups. Features monthly goal-setting with multi-unit logging (e.g. track Quran pages or juz interchangeably), real-time pacing indicators, a shared group dashboard, and a full month history — all deployed on my own Hetzner server via Docker.",
    image: "/images/projects/goals.png",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
      "Material UI",
      "React Query",
      "Zod",
    ],
    liveUrl: "https://demo-goals.ayhamhuq.com",
    sourceUrl: "https://github.com/AyhamHuq/Goals",
  },
  {
    slug: "songquiz",
    title: "SongQuiz",
    tagline: "Discord Music Guessing Game",
    description:
      "A Discord bot that hosts a Spotify-powered music quiz. Provide any playlist link, and the bot plays 10-second audio clips in your voice channel — players type guesses for points. Features a combo-scoring system, slash commands, and a persistent SQLite leaderboard that tracks all-time stats across games.",
    image: "/images/projects/songquiz.png",
    techStack: [
      "TypeScript",
      "Node.js",
      "discord.js",
      "Spotify API",
      "Deezer API",
      "FFmpeg",
      "SQLite",
      "Docker",
    ],
    liveUrl: undefined,
    sourceUrl: "https://github.com/AyhamHuq/SongQuiz",
    inviteUrl: "https://discord.com/oauth2/authorize?client_id=1023764406292717599&scope=bot+applications.commands&permissions=3148800",
  },
  {
    slug: "banglaprocessor",
    title: "BanglaProcessor",
    tagline: "Bangla Reading Assistant",
    description:
      "A local web app for accelerating Bangla vocabulary acquisition. Paste any Prothom Alo article — rare words are automatically underlined. Click any word for a Gemini-powered contextual translation, then add it to an Anki deck with full context (POS, root, example sentence). Export as .apkg or push directly via AnkiConnect.",
    image: "/images/projects/banglaprocessor.png",
    techStack: [
      "Python",
      "FastAPI",
      "JavaScript",
      "Gemini API",
      "Anki",
      "Zipf Frequency",
    ],
    liveUrl: undefined,
    sourceUrl: "https://github.com/AyhamHuq/BanglaProcessor",
  },
];
