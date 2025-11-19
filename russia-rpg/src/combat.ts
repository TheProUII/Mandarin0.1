import { Character, Enemy } from './types.js';

export class CombatSystem {
  static calculateDamage(attacker: Character | Enemy, defender: Character | Enemy): number {
    const baseDamage = attacker.attack;
    const defense = defender.defense;
    const damage = Math.max(1, baseDamage - Math.floor(defense / 2));
    const variance = Math.floor(Math.random() * 5) - 2;
    return Math.max(1, damage + variance);
  }

  static async fight(player: Character, enemy: Enemy): Promise<boolean> {
    console.log(`\n⚔️  Бой начался! ${player.name} против ${enemy.name}\n`);

    let round = 1;
    while (player.health > 0 && enemy.health > 0) {
      console.log(`--- Раунд ${round} ---`);

      // Ход игрока
      const playerDamage = this.calculateDamage(player, enemy);
      enemy.health -= playerDamage;
      console.log(`${player.name} наносит ${playerDamage} урона! (HP врага: ${Math.max(0, enemy.health)}/${enemy.maxHealth})`);

      if (enemy.health <= 0) {
        console.log(`\n🎉 Победа! ${enemy.name} повержен!`);
        player.experience += enemy.experienceReward;
        player.gold += enemy.goldReward;
        console.log(`Получено: ${enemy.experienceReward} опыта, ${enemy.goldReward} золота\n`);
        this.checkLevelUp(player);
        return true;
      }

      // Ход врага
      const enemyDamage = this.calculateDamage(enemy, player);
      player.health -= enemyDamage;
      console.log(`${enemy.name} наносит ${enemyDamage} урона! (Ваше HP: ${Math.max(0, player.health)}/${player.maxHealth})`);

      if (player.health <= 0) {
        console.log(`\n💀 Поражение! Вы пали в бою...\n`);
        return false;
      }

      round++;
      console.log('');
    }

    return false;
  }

  static checkLevelUp(player: Character): void {
    const expNeeded = player.level * 100;
    if (player.experience >= expNeeded) {
      player.level++;
      player.experience -= expNeeded;
      player.maxHealth += 20;
      player.health = player.maxHealth;
      player.attack += 5;
      player.defense += 3;
      console.log(`\n✨ ПОВЫШЕНИЕ УРОВНЯ! Теперь уровень ${player.level}`);
      console.log(`Характеристики улучшены: HP +20, Атака +5, Защита +3\n`);
    }
  }

  static heal(player: Character, amount: number): void {
    const healed = Math.min(amount, player.maxHealth - player.health);
    player.health += healed;
    console.log(`💚 Восстановлено ${healed} HP (${player.health}/${player.maxHealth})`);
  }
}
