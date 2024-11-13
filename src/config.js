require('dotenv').config();

module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  MESSAGES: {
    NO_MEMBERS: '❌ No eligible members found in the chat!',
    ERROR: '❌ Something went wrong. Please try again.',
    WINNER: ' "Эй, {username}!\n\n🎉 Или Нахуй!',
    START: '👋 Ты Ваня?',
    HELP: `Available commands:
• /pickrandom - Select a random member
• /help - Show this help message
• /start - Show welcome message`
  }
};