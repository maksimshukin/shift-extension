# 🔍 Диагностика проблемы с dbmCreateShiftBlocks

## ❌ **Проблема:**
```
[CONTENT] Функция dbmCreateShiftBlocks не найдена
```

## 🔧 **Что было добавлено для диагностики:**

### 1. **Подробная отладка в `content.js`:**
- Проверка загрузки скрипта
- Проверка доступности функции через `typeof`
- Повторная проверка через 100мс
- Поиск всех функций с "CreateShift" в названии
- Альтернативная загрузка через `fetch` + `eval`

### 2. **Отладка в `tilda-blocks.js`:**
- Логи при загрузке скрипта
- Проверка доступности `window` и `document`
- Логи при экспорте функции
- Финальная проверка доступности функции

### 3. **Fallback механизм:**
- Создание блоков вручную если функция не загрузилась
- Обработка ошибок загрузки скрипта

## 🧪 **Как диагностировать:**

### **Шаг 1: Проверь консоль**
После перезагрузки расширения и открытия Tilda, в консоли должны появиться логи:

```
[TILDA-BLOCKS] Скрипт tilda-blocks.js загружен и выполняется...
[TILDA-BLOCKS] typeof window: object
[TILDA-BLOCKS] typeof document: object
[CONTENT] Скрипт tilda-blocks.js загружен
[CONTENT] Проверяем доступность dbmCreateShiftBlocks...
[CONTENT] typeof dbmCreateShiftBlocks: function
[CONTENT] typeof window.dbmCreateShiftBlocks: function
```

### **Шаг 2: Если логи не появляются**
```javascript
// Проверь, загружается ли скрипт вообще
fetch(chrome.runtime.getURL('content/tilda-blocks.js'))
  .then(response => response.text())
  .then(text => console.log('Скрипт загружен:', text.substring(0, 200)))
  .catch(error => console.error('Ошибка загрузки:', error));
```

### **Шаг 3: Проверь manifest.json**
Убедись, что файл указан в `web_accessible_resources`:
```json
"web_accessible_resources": [
  {
    "resources": ["content/tilda-blocks.js"],
    "matches": ["*://tilda.cc/*", "*://tilda.ws/*", "*://tilda.ru/*"]
  }
]
```

### **Шаг 4: Принудительное создание блоков**
```javascript
// В консоли
testShiftIntegration.forceCreateBlocks();
```

## 🔍 **Возможные причины проблемы:**

### 1. **Скрипт не загружается**
- Проверь `manifest.json`
- Проверь права доступа
- Проверь URL в `chrome.runtime.getURL()`

### 2. **Скрипт загружается, но функция не экспортируется**
- Проверь синтаксис в `tilda-blocks.js`
- Проверь логи экспорта
- Возможна ошибка в коде

### 3. **Проблемы с контекстом выполнения**
- Скрипт выполняется в неправильном контексте
- `window` недоступен
- Проблемы с CORS

## 🎯 **Ожидаемые результаты:**

### **Если все работает:**
```
[TILDA-BLOCKS] Скрипт tilda-blocks.js загружен и выполняется...
[TILDA-BLOCKS] Экспорт через window.dbmCreateShiftBlocks
[TILDA-BLOCKS] window.dbmCreateShiftBlocks установлен: function
[CONTENT] Функция dbmCreateShiftBlocks найдена после eval!
[CONTENT] Создаем блоки SHIFT для Tilda...
[SHIFT] Блоки SHIFT успешно добавлены в Tilda!
```

### **Если есть проблемы:**
```
[CONTENT] Ошибка загрузки скрипта tilda-blocks.js
[CONTENT] Попробуем загрузить скрипт альтернативным способом...
[CONTENT] Скрипт загружен через fetch, выполняем...
[CONTENT] Функция все еще не найдена, создаем блоки вручную...
[CONTENT] Создаем блоки SHIFT вручную...
```

## 🚀 **Следующие шаги:**

1. **Перезагрузи расширение** в `chrome://extensions`
2. **Открой страницу Tilda** с редактором
3. **Проверь консоль** на наличие логов
4. **Запусти диагностику** в консоли:
   ```javascript
   testShiftIntegration.runAllTests();
   ```

---

**Теперь у нас есть полная диагностика проблемы!** 🔍
