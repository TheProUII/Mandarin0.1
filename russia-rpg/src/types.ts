// Типы для игры

export interface Character {
  name: string;
  level: number;
  health: number;
  maxHealth: number;
  attack: number;
  defense: number;
  experience: number;
  gold: number;
  inventory: Item[];
}

export interface Enemy {
  name: string;
  health: number;
  maxHealth: number;
  attack: number;
  defense: number;
  experienceReward: number;
  goldReward: number;
  description: string;
}

export interface Item {
  name: string;
  type: 'weapon' | 'armor' | 'potion' | 'quest';
  effect?: {
    attack?: number;
    defense?: number;
    health?: number;
  };
  description: string;
  value: number;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  reward: {
    experience: number;
    gold: number;
    items?: Item[];
  };
}

export interface GameState {
  player: Character;
  currentLocation: string;
  quests: Quest[];
  completedQuests: string[];
  chapter: number;
}
