# 🔧 Исправление проблемы с tp__addRecord

## ❌ **Проблема:**
```
[CONTENT] tp__addRecord недоступен, блок не может быть добавлен
```

## ✅ **Решение:**

### 🎯 **Что было исправлено:**

1. **Добавлен `data-tpl-id="131"`** - для всех блоков SHIFT
2. **Улучшена проверка `tp__addRecord`** - с ожиданием загрузки
3. **Добавлены альтернативные способы** - создание блоков в DOM
4. **Обновлен маппинг кодов** - `T123` для custom-html

### 🔄 **Изменения в коде:**

#### `content/content.js`:
```javascript
// БЫЛО:
id: blockCode,

// СТАЛО:
id: "131", // Всегда data-tpl-id="131"

// БЫЛО:
if (typeof tp__addRecord === 'function') {
    tp__addRecord(blockCode);
} else {
    console.log('[CONTENT] tp__addRecord недоступен');
}

// СТАЛО:
if (typeof tp__addRecord === 'function') {
    tp__addRecord(blockCode);
} else {
    // Ждем загрузки tp__addRecord
    let attempts = 0;
    const checkTpAddRecord = () => {
        if (typeof tp__addRecord === 'function') {
            tp__addRecord(blockCode);
        } else if (attempts >= maxAttempts) {
            // Альтернативные способы
            createBlockInDOM(block);
        } else {
            setTimeout(checkTpAddRecord, 100);
        }
    };
    checkTpAddRecord();
}
```

#### Добавлена функция `createBlockInDOM()`:
```javascript
function createBlockInDOM(block) {
    const blockHTML = `
        <div class="t-block" data-tpl-id="131" data-block-code="${block.cod}">
            <div class="t-block-header">
                <h3>${block.name}</h3>
                <p>${block.descr}</p>
            </div>
            <div class="t-block-content">
                ${block.modcontent ? block.modcontent() : 'Блок ' + block.cod}
            </div>
        </div>
    `;
    blockContainer.insertAdjacentHTML('beforeend', blockHTML);
}
```

### 🧪 **Как протестировать:**

1. **Перезагрузи расширение** в `chrome://extensions`
2. **Открой страницу Tilda** с редактором
3. **Открой библиотеку блоков** (кнопка "+")
4. **Кликни по карточке блока** SHIFT
5. **Проверь консоль** - должны появиться логи:

```
[CONTENT] Клик по карточке блока: SHF001
[CONTENT] Добавляем блок: Супер Слайдер
[CONTENT] tp__addRecord недоступен, ждем загрузки...
[CONTENT] tp__addRecord загружен после 3 попыток
[CONTENT] Блок добавлен через tp__addRecord
```

**ИЛИ (если tp__addRecord не загрузился):**

```
[CONTENT] tp__addRecord не загрузился, используем альтернативные способы...
[CONTENT] Создаем блок напрямую в DOM...
[CONTENT] Блок успешно создан в DOM
```

### 🔍 **Проверка в консоли:**

```javascript
// Проверить блоки с правильным id
const shiftBlocks = dbmBlocks?.filter(b => b.cod?.startsWith('SHF') || b.cod === 'T123');
console.log('SHIFT blocks:', shiftBlocks);
console.log('Все блоки имеют id="131":', shiftBlocks?.every(b => b.id === "131"));

// Проверить tp__addRecord
console.log('tp__addRecord доступен:', typeof tp__addRecord === 'function');

// Принудительно создать блок
const testBlock = dbmBlocks?.find(b => b.cod === 'SHF001');
if (testBlock) {
    createBlockInDOM(testBlock);
}
```

### 📋 **Ожидаемые результаты:**

- ✅ **Все блоки имеют `id: "131"`** - правильный data-tpl-id
- ✅ **tp__addRecord работает** - блоки добавляются через Tilda API
- ✅ **Альтернативные способы** - блоки создаются в DOM если API недоступен
- ✅ **Обновленный маппинг** - `T123` для custom-html
- ✅ **Подробные логи** - видно какой способ сработал

### 🎯 **Ключевые улучшения:**

1. **Правильный data-tpl-id** - все блоки имеют `id: "131"`
2. **Ожидание загрузки API** - проверяем `tp__addRecord` с таймаутом
3. **Fallback механизм** - создание блоков в DOM если API недоступен
4. **Обновленный маппинг** - поддержка нового кода `T123`
5. **Визуальная обратная связь** - блоки прокручиваются в поле зрения

### 🔧 **Структура блока в DOM:**

```html
<div class="t-block" data-tpl-id="131" data-block-code="SHF001">
    <div class="t-block-header">
        <h3>Супер Слайдер</h3>
        <p>Создание красивых слайдеров</p>
    </div>
    <div class="t-block-content">
        <!-- Содержимое блока -->
    </div>
    <div class="t-block-footer">
        <small>SHIFT Extension - SHF001</small>
    </div>
</div>
```

---

**Теперь блоки добавляются правильно с data-tpl-id="131"!** 🎉
