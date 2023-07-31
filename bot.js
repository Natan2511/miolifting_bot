const TelegramBot = require("node-telegram-bot-api");

// Замените 'YOUR_API_KEY' на ваш API-ключ
const API_KEY = "6583297372:AAES2XVKFy5Lnu0LunNmhFTWgLUQ59npjOs";

// Инициализируем бота с использованием API-ключа
const bot = new TelegramBot(API_KEY, { polling: true });

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Отправляем сообщение с кнопкой старта
  bot.sendMessage(chatId, "Привет! Я бот, а ты Карнишон =)", {
    reply_markup: {
      keyboard: [["Купить"], ["Купить"], ["Купить"]],
      resize_keyboard: true, // Позволяет изменять размер кнопок (необязательно)
    },
  });
});

// Обработчик текстовых сообщений
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, msg.text);
});
