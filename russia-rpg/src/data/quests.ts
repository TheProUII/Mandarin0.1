import { Quest, Item } from '../types.js';

export const items: { [key: string]: Item } = {
  // Оружие
  woodenSword: {
    name: 'Деревянный меч',
    type: 'weapon',
    effect: { attack: 5 },
    description: 'Простой деревянный меч для тренировок',
    value: 10
  },

  ironSword: {
    name: 'Железный меч',
    type: 'weapon',
    effect: { attack: 12 },
    description: 'Прочный железный меч русского кузнеца',
    value: 50
  },

  varangianAxe: {
    name: 'Варяжская секира',
    type: 'weapon',
    effect: { attack: 18 },
    description: 'Тяжелая секира варяжских воинов',
    value: 100
  },

  // Броня
  leatherArmor: {
    name: 'Кожаный доспех',
    type: 'armor',
    effect: { defense: 5 },
    description: 'Легкая кожаная броня',
    value: 30
  },

  chainmail: {
    name: 'Кольчуга',
    type: 'armor',
    effect: { defense: 12 },
    description: 'Кольчуга русского дружинника',
    value: 80
  },

  // Зелья
  healingPotion: {
    name: 'Настой целебных трав',
    type: 'potion',
    effect: { health: 50 },
    description: 'Восстанавливает здоровье',
    value: 25
  }
};

export const quests: Quest[] = [
  // Глава 1: Киевская Русь
  {
    id: 'unite_tribes',
    title: 'Объединение племен',
    description: 'Князь Олег поручил вам помочь объединить славянские племена вокруг Киева. Убедите вождей древлян присоединиться к союзу.',
    completed: false,
    reward: {
      experience: 100,
      gold: 50,
      items: [items.ironSword]
    }
  },

  {
    id: 'defeat_khazars',
    title: 'Освобождение от хазарской дани',
    description: 'Хазарский каганат долго взимал дань с восточных славян. Пришло время покончить с этим. Победите хазарского воина.',
    completed: false,
    reward: {
      experience: 150,
      gold: 75
    }
  },

  {
    id: 'trade_route',
    title: 'Путь из варяг в греки',
    description: 'Защитите торговый караван на пути в Константинополь от варягов-разбойников.',
    completed: false,
    reward: {
      experience: 120,
      gold: 100,
      items: [items.varangianAxe]
    }
  },

  // Глава 2: Принятие христианства
  {
    id: 'christianization',
    title: 'Крещение Руси',
    description: 'Князь Владимир принял решение крестить Русь. Помогите распространить новую веру среди народа.',
    completed: false,
    reward: {
      experience: 200,
      gold: 150
    }
  },

  {
    id: 'byzantine_relations',
    title: 'Дипломатия с Византией',
    description: 'Разоблачите византийского шпиона, пытающегося поссорить русских князей.',
    completed: false,
    reward: {
      experience: 180,
      gold: 120,
      items: [items.chainmail]
    }
  },

  // Глава 3: Борьба с Ордой
  {
    id: 'mongol_invasion',
    title: 'Монгольское нашествие',
    description: 'Орды Батыя надвигаются на русские земли. Защитите город от монгольских захватчиков.',
    completed: false,
    reward: {
      experience: 250,
      gold: 100
    }
  },

  {
    id: 'resist_tribute',
    title: 'Сопротивление баскакам',
    description: 'Татарские баскаки притесняют народ, собирая непосильную дань. Дайте отпор сборщикам дани.',
    completed: false,
    reward: {
      experience: 300,
      gold: 150
    }
  },

  // Глава 4: Куликовская битва
  {
    id: 'kulikovo_preparation',
    title: 'Подготовка к великой битве',
    description: 'Князь Дмитрий собирает войска для решающего сражения с Мамаем. Соберите союзников.',
    completed: false,
    reward: {
      experience: 350,
      gold: 200
    }
  },

  {
    id: 'kulikovo_battle',
    title: 'Куликовская битва',
    description: 'Настал час величайшего сражения! Сразитесь с ханом Мамаем на Куликовом поле.',
    completed: false,
    reward: {
      experience: 500,
      gold: 300
    }
  }
];
