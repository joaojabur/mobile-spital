export interface LevelProps {
  level: number;
  nextLevelXp: number;
}

const levels: Array<LevelProps> = [
  {
    level: 1,
    nextLevelXp: 64,
  },
  {
    level: 2,
    nextLevelXp: 144,
  },
  {
    level: 3,
    nextLevelXp: 256,
  },
  {
    level: 4,
    nextLevelXp: 400,
  },
  {
    level: 5,
    nextLevelXp: 576,
  },
  {
    level: 6,
    nextLevelXp: 784,
  },
  {
    level: 7,
    nextLevelXp: 1024,
  },
  {
    level: 8,
    nextLevelXp: 1296,
  },
  {
    level: 9,
    nextLevelXp: 1600,
  },
  {
    level: 10,
    nextLevelXp: 1936,
  },
  {
    level: 11,
    nextLevelXp: 2304,
  },
  {
    level: 12,
    nextLevelXp: 3136,
  },
];

export default levels;
