// background.js

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "updatePopup") {
      // Пересылаем данные в popup.js
      chrome.runtime.sendMessage({ action: "updatePopup", selectedText: request.selectedText, chatGPTResponse: request.chatGPTResponse });
    }
  });
  