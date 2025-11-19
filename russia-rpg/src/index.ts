#!/usr/bin/env node
import { Game } from './game.js';

async function main() {
  const game = new Game();
  await game.start();
}

main().catch(console.error);
