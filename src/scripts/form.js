import { BOT_API, CHAT_ID } from '../../config.js';

const TELEGRAM_BOT_TOKEN = BOT_API;
const TELEGRAM_CHAT_IDS = CHAT_ID;

document
  .getElementById("orderForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const company = document.getElementById("company").value;

    let message = `🔔 Новая заявка!\n\n`;
    message += `👤 Имя: ${name}\n`;
    message += `📱 Телефон: ${phone}\n`;
    if (company) {
      message += `🏢 Компания: ${company}\n`;
    }

    try {
      for (const chatId of TELEGRAM_CHAT_IDS) {
        await fetch(
          `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: message,
              parse_mode: "HTML",
            }),
          },
        );
      }

      const snackbar = document.getElementById("form-snackbar");
      snackbar.className = "show";
      setTimeout(function () {
        snackbar.className = snackbar.className.replace("show", "");
      }, 3000);

      document.getElementById("orderForm").reset();
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Ошибка отправки. Попробуйте позже.");
    }
  });