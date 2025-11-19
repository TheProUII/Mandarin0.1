import { Enemy } from '../types.js';

// Враги, основанные на исторических противниках Руси

export const enemies: { [key: string]: Enemy } = {
  // Глава 1: Киевская Русь (9-10 века)
  khazarWarrior: {
    name: 'Хазарский воин',
    health: 40,
    maxHealth: 40,
    attack: 12,
    defense: 5,
    experienceReward: 30,
    goldReward: 15,
    description: 'Воин Хазарского каганата, взимающий дань с славянских племен'
  },

  pecheneg: {
    name: 'Печенег-кочевник',
    health: 50,
    maxHealth: 50,
    attack: 15,
    defense: 6,
    experienceReward: 40,
    goldReward: 20,
    description: 'Кочевник из степи, совершающий набеги на русские земли'
  },

  varангian: {
    name: 'Варяг-разбойник',
    health: 45,
    maxHealth: 45,
    attack: 14,
    defense: 7,
    experienceReward: 35,
    goldReward: 25,
    description: 'Варяг, грабящий торговые пути'
  },

  // Глава 2: Расширение (10-11 века)
  byzantineAgent: {
    name: 'Византийский шпион',
    health: 55,
    maxHealth: 55,
    attack: 16,
    defense: 8,
    experienceReward: 50,
    goldReward: 30,
    description: 'Агент Византийской империи, сеющий раздор между князьями'
  },

  polovtsian: {
    name: 'Половецкий хан',
    health: 70,
    maxHealth: 70,
    attack: 20,
    defense: 10,
    experienceReward: 80,
    goldReward: 50,
    description: 'Предводитель половцев, угрожающий южным рубежам Руси'
  },

  // Глава 3: Монгольское нашествие (13 век)
  mongolScout: {
    name: 'Монгольский разведчик',
    health: 60,
    maxHealth: 60,
    attack: 18,
    defense: 9,
    experienceReward: 60,
    goldReward: 35,
    description: 'Разведчик монгольской орды'
  },

  mongolWarrior: {
    name: 'Монгольский воин',
    health: 80,
    maxHealth: 80,
    attack: 25,
    defense: 12,
    experienceReward: 100,
    goldReward: 60,
    description: 'Закаленный в боях воин Золотой Орды'
  },

  tarlarKhan: {
    name: 'Татарский баскак',
    health: 90,
    maxHealth: 90,
    attack: 28,
    defense: 14,
    experienceReward: 120,
    goldReward: 80,
    description: 'Сборщик дани от Золотой Орды'
  },

  // Глава 4: Объединение земель (14-15 века)
  lithuanianKnight: {
    name: 'Литовский рыцарь',
    health: 85,
    maxHealth: 85,
    attack: 26,
    defense: 15,
    experienceReward: 110,
    goldReward: 70,
    description: 'Рыцарь Великого княжества Литовского'
  },

  teutonicKnight: {
    name: 'Тевтонский крестоносец',
    health: 95,
    maxHealth: 95,
    attack: 30,
    defense: 18,
    experienceReward: 130,
    goldReward: 90,
    description: 'Крестоносец Тевтонского ордена'
  },

  // Боссы
  mamaiKhan: {
    name: 'Хан Мамай',
    health: 200,
    maxHealth: 200,
    attack: 35,
    defense: 20,
    experienceReward: 300,
    goldReward: 200,
    description: 'Темник Золотой Орды, предводитель войск на Куликовом поле'
  }
};
