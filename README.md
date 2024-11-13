# Telegram Random Picker Bot

This bot randomly picks one person from a Telegram chat.

## Setup Instructions

1. Create a new bot with BotFather on Telegram:
   - Open Telegram and search for @BotFather
   - Send `/newbot` command
   - Follow the instructions to create your bot
   - Copy the bot token provided

2. Update the `.env` file with your bot token:
   ```
   BOT_TOKEN=your_telegram_bot_token_here
   ```

3. Add the bot to your group chat and make it an admin

## Usage

Send `/pickrandom` in the chat where the bot is present to randomly select a member.