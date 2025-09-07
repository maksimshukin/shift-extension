# 🔧 Настройка Supabase для SHIFT Extension

## ✅ **Проблема с Supabase решена!**

### **❌ Проблема:**
Ошибка "Критическая ошибка: Библиотека Supabase (supabase.js) не загружена"

### **✅ Решение:**
1. Создан файл `supabase.js` с конфигурацией
2. Подключена библиотека Supabase из CDN
3. Исправлены пути и инициализация

## 🎯 **Что было исправлено:**

### **1. ✅ Создан файл supabase.js:**
- Конфигурация Supabase
- Функции для работы с API
- Правильная инициализация клиента

### **2. ✅ Обновлен popup.html:**
```html
<!-- Подключение библиотеки Supabase из CDN -->
<script src="https://unpkg.com/@supabase/supabase-js@2"></script>
<script src="../supabase.js"></script>
<script src="popup-config.js"></script>
<script src="popup.js"></script>
```

### **3. ✅ Исправлен popup.js:**
- Правильная проверка загрузки Supabase
- Ожидание инициализации библиотеки
- Корректная обработка ошибок

## 🔧 **Настройка Supabase:**

### **1. Создайте проект в Supabase:**
1. Перейдите на [supabase.com](https://supabase.com)
2. Создайте новый проект
3. Получите URL и API ключ

### **2. Обновите конфигурацию:**
Откройте файл `supabase.js` и замените:

```javascript
const SUPABASE_CONFIG = {
    url: 'https://your-project.supabase.co',        // Замените на ваш URL
    anonKey: 'your-anon-key-here'                  // Замените на ваш API ключ
};
```

### **3. Пример правильной конфигурации:**
```javascript
const SUPABASE_CONFIG = {
    url: 'https://abcdefghijklmnop.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
};
```

## 🧪 **Как протестировать:**

### **1. Перезагрузи расширение:**
```bash
# В chrome://extensions нажми "Обновить"
```

### **2. Открой popup расширения:**
- Кликни по иконке расширения
- Должны появиться логи:
```
[SUPABASE] Модуль Supabase загружен
[SUPABASE] Клиент создан успешно
[POPUP] Supabase client created.
```

### **3. Проверь в консоли:**
```javascript
// В консоли popup
console.log(window.SUPABASE_CONFIG);
console.log(window.supabase);
```

## 🔍 **Диагностика проблем:**

### **Если Supabase не загружается:**

1. **Проверьте интернет-соединение:**
   - Библиотека загружается из CDN
   - Нужен доступ к `unpkg.com`

2. **Проверьте консоль браузера:**
   ```javascript
   // Должны быть логи:
   [SUPABASE] Модуль Supabase загружен
   [SUPABASE] Клиент создан успешно
   ```

3. **Проверьте конфигурацию:**
   ```javascript
   // В консоли popup
   console.log(window.SUPABASE_CONFIG);
   // Должен показать объект с url и anonKey
   ```

### **Если ошибка "SUPABASE_CONFIG is not defined":**

1. **Проверьте порядок загрузки скриптов в popup.html:**
   ```html
   <script src="https://unpkg.com/@supabase/supabase-js@2"></script>
   <script src="../supabase.js"></script>  <!-- Должен быть после библиотеки -->
   <script src="popup.js"></script>        <!-- Должен быть последним -->
   ```

2. **Проверьте путь к supabase.js:**
   - Файл должен находиться в корневой директории расширения
   - Путь `../supabase.js` правильный из папки `popup/`

### **Если ошибка "Библиотека Supabase не загружена":**

1. **Проверьте загрузку CDN:**
   - Откройте DevTools → Network
   - Перезагрузи popup
   - Должен быть запрос к `unpkg.com/@supabase/supabase-js@2`

2. **Проверьте доступность CDN:**
   - Откройте в браузере: `https://unpkg.com/@supabase/supabase-js@2`
   - Должен загрузиться JavaScript файл

## 📋 **Структура файлов:**

```
shift-extension/
├── supabase.js              # ✅ Создан - конфигурация Supabase
├── popup/
│   ├── popup.html           # ✅ Обновлен - подключение CDN
│   ├── popup.js             # ✅ Обновлен - ожидание Supabase
│   └── popup-config.js      # Конфиг popup
└── manifest.json            # Манифест расширения
```

## 🎯 **Ключевые изменения:**

### **1. Подключение библиотеки:**
```html
<script src="https://unpkg.com/@supabase/supabase-js@2"></script>
```

### **2. Конфигурация:**
```javascript
const SUPABASE_CONFIG = {
    url: 'https://your-project.supabase.co',
    anonKey: 'your-anon-key-here'
};
```

### **3. Ожидание загрузки:**
```javascript
function waitForSupabase() {
    if (window.SUPABASE_CONFIG && window.supabase) {
        initPopup();
    } else {
        setTimeout(waitForSupabase, 100);
    }
}
```

## ⚠️ **Важные замечания:**

### **1. Безопасность:**
- Не коммитьте реальные API ключи в репозиторий
- Используйте переменные окружения для продакшена
- Anon key безопасен для использования в клиенте

### **2. Производительность:**
- Библиотека загружается из CDN при каждом открытии popup
- Для продакшена рассмотрите локальное подключение

### **3. Совместимость:**
- Используется версия 2.x Supabase JS
- Совместимо с современными браузерами

---

**Теперь Supabase должен работать корректно!** 🎉
