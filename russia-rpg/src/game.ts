import * as readline from 'readline';
import { Character, GameState, Quest } from './types.js';
import { CombatSystem } from './combat.js';
import { enemies } from './data/enemies.js';
import { quests, items } from './data/quests.js';

export class Game {
  private state: GameState;
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    // Инициализация игрока
    this.state = {
      player: {
        name: '',
        level: 1,
        health: 100,
        maxHealth: 100,
        attack: 15,
        defense: 10,
        experience: 0,
        gold: 50,
        inventory: [items.woodenSword, items.leatherArmor, items.healingPotion]
      },
      currentLocation: 'Киев',
      quests: [...quests],
      completedQuests: [],
      chapter: 1
    };
  }

  private question(prompt: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(prompt, (answer) => {
        resolve(answer);
      });
    });
  }

  async start(): Promise<void> {
    console.clear();
    this.printBanner();

    console.log('\n🏰 Добро пожаловать в "Становление Руси"!\n');
    console.log('Вы - молодой дружинник, которому предстоит пройти через');
    console.log('века русской истории, от объединения племен до освобождения');
    console.log('от монгольского ига.\n');

    const name = await this.question('Как вас зовут, воин? ');
    this.state.player.name = name || 'Безымянный дружинник';

    console.log(`\nДобро пожаловать, ${this.state.player.name}!\n`);

    await this.gameLoop();
  }

  private printBanner(): void {
    console.log('═══════════════════════════════════════════════════════');
    console.log('          🗡️  СТАНОВЛЕНИЕ РУСИ - RPG  ⚔️');
    console.log('═══════════════════════════════════════════════════════');
  }

  private async gameLoop(): Promise<void> {
    let playing = true;

    while (playing) {
      console.log('\n' + '─'.repeat(55));
      this.printStatus();
      console.log('─'.repeat(55));

      console.log('\nЧто вы хотите сделать?');
      console.log('1. Просмотреть квесты');
      console.log('2. Отправиться в путешествие (случайная встреча)');
      console.log('3. Инвентарь');
      console.log('4. Отдохнуть в таверне (восстановить здоровье)');
      console.log('5. Информация о текущей главе');
      console.log('6. Выход');

      const choice = await this.question('\nВыберите действие (1-6): ');

      switch (choice.trim()) {
        case '1':
          await this.showQuests();
          break;
        case '2':
          await this.randomEncounter();
          break;
        case '3':
          this.showInventory();
          break;
        case '4':
          this.rest();
          break;
        case '5':
          this.showChapterInfo();
          break;
        case '6':
          playing = false;
          console.log('\nСпасибо за игру! До новых встреч!');
          break;
        default:
          console.log('\nНеверный выбор!');
      }

      if (this.state.player.health <= 0) {
        console.log('\n💀 Вы пали в бою. Игра окончена.');
        playing = false;
      }
    }

    this.rl.close();
  }

  private printStatus(): void {
    const p = this.state.player;
    console.log(`\n👤 ${p.name} | Уровень: ${p.level} | Глава: ${this.state.chapter}`);
    console.log(`❤️  Здоровье: ${p.health}/${p.maxHealth} | ⚔️  Атака: ${p.attack} | 🛡️  Защита: ${p.defense}`);
    console.log(`⭐ Опыт: ${p.experience}/${p.level * 100} | 💰 Золото: ${p.gold}`);
    console.log(`📍 Локация: ${this.state.currentLocation}`);
  }

  private async showQuests(): Promise<void> {
    console.log('\n📜 ДОСТУПНЫЕ КВЕСТЫ:');

    const availableQuests = this.state.quests.filter(q =>
      !q.completed && this.isQuestAvailable(q)
    );

    if (availableQuests.length === 0) {
      console.log('\nНет доступных квестов. Отправьтесь в путешествие!');
      return;
    }

    availableQuests.forEach((quest, index) => {
      console.log(`\n${index + 1}. ${quest.title}`);
      console.log(`   ${quest.description}`);
      console.log(`   Награда: ${quest.reward.experience} опыта, ${quest.reward.gold} золота`);
    });

    const choice = await this.question('\nВыберите квест (номер) или 0 для отмены: ');
    const questIndex = parseInt(choice) - 1;

    if (questIndex >= 0 && questIndex < availableQuests.length) {
      await this.startQuest(availableQuests[questIndex]);
    }
  }

  private isQuestAvailable(quest: Quest): boolean {
    // Простая логика доступности квестов по главам
    if (quest.id.includes('unite') || quest.id.includes('khazar') || quest.id.includes('trade')) {
      return this.state.chapter >= 1;
    }
    if (quest.id.includes('christian') || quest.id.includes('byzantine')) {
      return this.state.chapter >= 2;
    }
    if (quest.id.includes('mongol') || quest.id.includes('tribute')) {
      return this.state.chapter >= 3;
    }
    if (quest.id.includes('kulikovo')) {
      return this.state.chapter >= 4;
    }
    return true;
  }

  private async startQuest(quest: Quest): Promise<void> {
    console.log(`\n⚔️  Начинаем квест: ${quest.title}\n`);

    // Определяем врага для квеста
    let enemy;
    if (quest.id.includes('khazar')) {
      enemy = { ...enemies.khazarWarrior };
    } else if (quest.id.includes('trade')) {
      enemy = { ...enemies.varангian };
    } else if (quest.id.includes('byzantine')) {
      enemy = { ...enemies.byzantineAgent };
    } else if (quest.id.includes('mongol_invasion')) {
      enemy = { ...enemies.mongolWarrior };
    } else if (quest.id.includes('tribute')) {
      enemy = { ...enemies.tarlarKhan };
    } else if (quest.id.includes('kulikovo_battle')) {
      enemy = { ...enemies.mamaiKhan };
    } else {
      enemy = { ...enemies.pecheneg };
    }

    const victory = await CombatSystem.fight(this.state.player, enemy);

    if (victory) {
      quest.completed = true;
      this.state.completedQuests.push(quest.id);
      this.state.player.experience += quest.reward.experience;
      this.state.player.gold += quest.reward.gold;

      console.log(`✅ Квест "${quest.title}" завершен!`);
      console.log(`Награда: ${quest.reward.experience} опыта, ${quest.reward.gold} золота`);

      if (quest.reward.items) {
        quest.reward.items.forEach(item => {
          this.state.player.inventory.push(item);
          console.log(`Получен предмет: ${item.name}`);
        });
      }

      CombatSystem.checkLevelUp(this.state.player);

      // Прогресс по главам
      this.checkChapterProgress();
    }
  }

  private async randomEncounter(): Promise<void> {
    console.log('\n🗺️  Вы отправляетесь в путешествие...\n');

    const enemyKeys = Object.keys(enemies).filter(key => {
      // Фильтруем врагов по главе
      if (this.state.chapter === 1) {
        return ['khazarWarrior', 'pecheneg', 'varangian'].includes(key);
      } else if (this.state.chapter === 2) {
        return ['byzantineAgent', 'polovtsian', 'pecheneg'].includes(key);
      } else if (this.state.chapter >= 3) {
        return ['mongolScout', 'mongolWarrior', 'tarlarKhan'].includes(key);
      }
      return true;
    });

    const randomKey = enemyKeys[Math.floor(Math.random() * enemyKeys.length)];
    const enemy = { ...enemies[randomKey] };

    console.log(`Вы встретили: ${enemy.name}`);
    console.log(enemy.description + '\n');

    await CombatSystem.fight(this.state.player, enemy);
  }

  private showInventory(): void {
    console.log('\n🎒 ИНВЕНТАРЬ:');

    if (this.state.player.inventory.length === 0) {
      console.log('Инвентарь пуст.');
      return;
    }

    this.state.player.inventory.forEach((item, index) => {
      console.log(`\n${index + 1}. ${item.name} (${item.type})`);
      console.log(`   ${item.description}`);
      if (item.effect) {
        const effects = [];
        if (item.effect.attack) effects.push(`Атака +${item.effect.attack}`);
        if (item.effect.defense) effects.push(`Защита +${item.effect.defense}`);
        if (item.effect.health) effects.push(`Здоровье +${item.effect.health}`);
        console.log(`   Эффект: ${effects.join(', ')}`);
      }
    });
  }

  private rest(): void {
    const cost = 20;
    if (this.state.player.gold >= cost) {
      this.state.player.gold -= cost;
      this.state.player.health = this.state.player.maxHealth;
      console.log('\n🏨 Вы отдыхаете в таверне...');
      console.log(`Здоровье полностью восстановлено! (-${cost} золота)`);
    } else {
      console.log('\n💰 Недостаточно золота! Нужно 20 золота.');
    }
  }

  private showChapterInfo(): void {
    const chapters = [
      {
        title: 'Глава 1: Киевская Русь (9-10 века)',
        description: 'Объединение восточнославянских племен под властью киевских князей. Освобождение от хазарской дани.'
      },
      {
        title: 'Глава 2: Расцвет Киевской Руси (10-11 века)',
        description: 'Крещение Руси при князе Владимире. Укрепление связей с Византией. Борьба с кочевниками.'
      },
      {
        title: 'Глава 3: Монгольское нашествие (13 век)',
        description: 'Нашествие Батыя. Установление монголо-татарского ига. Сопротивление захватчикам.'
      },
      {
        title: 'Глава 4: Возрождение (14 век)',
        description: 'Возвышение Московского княжества. Куликовская битва - начало освобождения от ига.'
      }
    ];

    console.log('\n📖 ИСТОРИЯ СТАНОВЛЕНИЯ РУСИ:\n');
    chapters.forEach((chapter, index) => {
      const marker = this.state.chapter > index + 1 ? '✅' : this.state.chapter === index + 1 ? '▶️' : '🔒';
      console.log(`${marker} ${chapter.title}`);
      console.log(`   ${chapter.description}\n`);
    });
  }

  private checkChapterProgress(): void {
    const completedCount = this.state.completedQuests.length;

    if (completedCount >= 3 && this.state.chapter === 1) {
      this.state.chapter = 2;
      this.state.currentLocation = 'Киев';
      console.log('\n🎊 Новая глава открыта: Расцвет Киевской Руси!');
    } else if (completedCount >= 5 && this.state.chapter === 2) {
      this.state.chapter = 3;
      this.state.currentLocation = 'Владимир';
      console.log('\n🎊 Новая глава открыта: Монгольское нашествие!');
    } else if (completedCount >= 7 && this.state.chapter === 3) {
      this.state.chapter = 4;
      this.state.currentLocation = 'Москва';
      console.log('\n🎊 Новая глава открыта: Возрождение!');
    }
  }
}
