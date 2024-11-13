require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/pickrandom/, async (msg) => {
  try {
    const chatId = msg.chat.id;
    
    // Get chat members
    const chatMembers = await bot.getChatAdministrators(chatId);
    const members = chatMembers.filter(member => !member.user.is_bot);
    
    if (members.length === 0) {
      return bot.sendMessage(chatId, 'No members found in the chat!');
    }

    // Pick a random member
    const randomMember = members[Math.floor(Math.random() * members.length)];
    const username = randomMember.user.username 
      ? `@${randomMember.user.username}` 
      : randomMember.user.first_name;

    // Send message mentioning the chosen person
    await bot.sendMessage(
      chatId, 
      `🎯 I choose ${username}!`,
      { parse_mode: 'Markdown' }
    );

  } catch (error) {
    console.error('Error:', error);
    bot.sendMessage(chatId, 'Или нахуй');
  }
});

// Welcome message when bot starts
bot.on('polling_error', (error) => {
  console.log(error);
});

console.log('Bot is running...');