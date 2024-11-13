const RandomPickerBot = require('./src/bot');

try {
  const bot = new RandomPickerBot();
  console.log('🤖 Telegram Random Picker Bot is running...');
} catch (error) {
  console.error('Failed to start bot:', error);
  process.exit(1);
}