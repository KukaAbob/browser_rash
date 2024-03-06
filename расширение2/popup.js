// document.addEventListener('DOMContentLoaded', function() {
//   var inputElement = document.getElementById('aboba');
//   var agreeButton = document.getElementById('agreeButton');

//   agreeButton.addEventListener('click', function() {
//     var inputValue = inputElement.value;

//     if (!inputValue) {
//       alert('Пожалуйста, введите текст в поле.');
//       return;
//     }

//     // Выводим введенный текст в алерт
//     alert('Введенный текст: ' + inputValue);

//     // Отправляем запрос к ChatGPT API
//     fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer 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' // Замените YOUR_API_KEY на свой ключ API
//       },
//       body: JSON.stringify({
//         model: 'text-davinci-002', // Используйте подходящую модель
//         messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: inputValue }]
//       })
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Ошибка HTTP: ' + response.status);
//       }
//       return response.json();
//     })
//     .then(data => {
//       // Проверяем наличие ответов от модели
//       if (!data.choices || data.choices.length === 0 || !data.choices[0].message || !data.choices[0].message.content) {
//         throw new Error('Пустой или некорректный ответ от ChatGPT.');
//       }

//       // Получаем ответ от модели
//       var chatGPTResponse = data.choices[0].message.content;

//       // Выводим ответ от ChatGPT в алерт
//       alert('Ответ от ChatGPT: ' + chatGPTResponse);
//     })
//     .catch(error => {
//       alert('Произошла ошибка: ' + error.message);
//       console.error('Произошла ошибка:', error);
//     });
//   });
// });
document.addEventListener('DOMContentLoaded', function() {
  var inputElement = document.getElementById('aboba');
  var agreeButton = document.getElementById('agreeButton');

  agreeButton.addEventListener('click', function() {
    var inputValue = inputElement.value;

    if (!inputValue) {
      alert('Пожалуйста, введите текст в поле.');
      return;
    }

    // Выводим введенный текст в алерт
    alert('Введенный текст: ' + inputValue);

    // Заменяем YOUR_API_KEY на ваш ключ API OpenAI
    var apiKey = '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';

    // Заменяем model на вашу используемую модель, если это не text-davinci-002
    var model = 'gpt-3.5-turbo';

    // Отправляем запрос к ChatGPT API
    fetch('https://platform.openai.com/assistants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify({
        model: model,
        messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: inputValue }]
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка HTTP: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      // Проверяем наличие ответов от модели
      if (!data.choices || data.choices.length === 0 || !data.choices[0].message || !data.choices[0].message.content) {
        throw new Error('Пустой или некорректный ответ от ChatGPT.');
      }

      // Получаем ответ от модели
      var chatGPTResponse = data.choices[0].message.content;

      // Выводим ответ от ChatGPT в алерт
      alert('Ответ от ChatGPT: ' + chatGPTResponse);
    })
    .catch(error => {
      alert('Произошла ошибка: ' + error.message);
      console.error('Произошла ошибка:', error);
    });
  });
});

