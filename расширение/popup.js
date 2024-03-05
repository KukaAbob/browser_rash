// popup.js

// Обработчик сообщений от background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "updatePopup") {
      // Обновляем содержимое попапа с использованием данных из background.js
      const selectedTextElement = document.getElementById("selectedText");
      const chatGPTResponseElement = document.getElementById("chatGPTResponse");
  
      if (selectedTextElement && chatGPTResponseElement) {
        selectedTextElement.textContent = request.selectedText;
        chatGPTResponseElement.textContent = request.chatGPTResponse;
      }
    }
  });
  