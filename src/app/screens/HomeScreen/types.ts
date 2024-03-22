export type TypeDefault = {
  start: boolean;
  green: boolean;
  time: number | null;
  fail: boolean;
  success: boolean;
};

export type TypeHomeScreen = {
  setBest: (best: string) => void;
  setAverage: (average: string) => void;
  setAttempts: (attempts: string) => void;
};
