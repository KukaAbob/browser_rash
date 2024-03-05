// content.js

async function handleContextMenu(event) {
    const selectedText = window.getSelection().toString().trim();
  
    if (selectedText) {
      try {
        const chatGPTResponse = await sendToChatGPT(selectedText);
        // Отправляем сообщение с выделенным текстом и ответом от ChatGPT в popup.js
        chrome.runtime.sendMessage({ action: "updatePopup", selectedText, chatGPTResponse });
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
  }
  
  async function sendToChatGPT(prompt) {
    return new Promise(async (resolve, reject) => {
      try {
        const { generateChatGPTResponse } = await import('./openai');
        const response = await generateChatGPTResponse(prompt);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }
  
  document.addEventListener("contextmenu", handleContextMenu);
  