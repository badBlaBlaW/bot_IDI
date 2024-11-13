const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');
const { getRandomElement, formatUserMention } = require('./utils');

class RandomPickerBot {
  constructor() {
    this.bot = new TelegramBot(config.BOT_TOKEN, { polling: true });
    this.initializeHandlers();
  }

  initializeHandlers() {
    // Command handlers
    this.bot.onText(/\/start/, this.handleStart.bind(this));
    this.bot.onText(/\/help/, this.handleHelp.bind(this));
    this.bot.onText(/\/pickrandom/, this.handlePickRandom.bind(this));

    // Error handler
    this.bot.on('polling_error', (error) => {
      console.error('Polling error:', error);
    });
  }

  async handleStart(msg) {
    try {
      await this.bot.sendMessage(msg.chat.id, config.MESSAGES.START);
    } catch (error) {
      console.error('Start handler error:', error);
    }
  }

  async handleHelp(msg) {
    try {
      await this.bot.sendMessage(msg.chat.id, config.MESSAGES.HELP);
    } catch (error) {
      console.error('Help handler error:', error);
    }
  }

  async handlePickRandom(msg) {
    const chatId = msg.chat.id;

    try {
      // Get all chat members
      const chatMembers = await this.bot.getChatAdministrators(chatId);
      const eligibleMembers = chatMembers.filter(member => !member.user.is_bot);

      if (eligibleMembers.length === 0) {
        return await this.bot.sendMessage(chatId, config.MESSAGES.NO_MEMBERS);
      }

      // Pick and announce winner
      const winner = getRandomElement(eligibleMembers);
      const winnerMention = formatUserMention(winner.user);
      
      await this.bot.sendMessage(
        chatId,
        config.MESSAGES.WINNER.replace('{username}', winnerMention),
        { parse_mode: 'Markdown' }
      );

    } catch (error) {
      console.error('Pick random handler error:', error);
      await this.bot.sendMessage(chatId, config.MESSAGES.ERROR);
    }
  }
}

module.exports = RandomPickerBot;