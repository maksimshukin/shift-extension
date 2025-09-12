// Вставить в начало файла super.js

/**
 * Вспомогательная функция для ожидания доступности глобальной функции.
 * @param {string} functionName - Имя функции в window.
 * @returns {Promise<Function>}
 */
function dbmWaitForFunction(functionName) {
    return new Promise(resolve => {
        if (window[functionName] && typeof window[functionName] === 'function') {
            return resolve(window[functionName]);
        }
        const interval = setInterval(() => {
            if (window[functionName] && typeof window[functionName] === 'function') {
                clearInterval(interval);
                resolve(window[functionName]);
            }
        }, 100); // Проверяем каждые 100мс
    });
}  


window.dbmSuperSolutionsConfig = [
    {
        solutionCode: 'super-slider',
        cod: 'SHF001', // Номер блока
        title: 'Супер Слайдер',
        icon: 'assets/icon128.png', // Иконка для карточки
        htmlContent: `
<div id="solution-super-slider" class="feature-block">
    <h3>🎠 Супер Слайдер</h3>
    <p>Здесь находятся настройки и инструменты для Супер Слайдера.</p>
    
    <style>
        .super-slider { position: relative; overflow: hidden; border-radius: 8px; margin: 20px 0; }
        .super-slider__container { display: flex; transition: transform 0.3s ease; }
        .super-slider__slide { min-width: 100%; padding: 40px; color: white; text-align: center; }
        .super-slider__controls { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); display: flex; gap: 10px; }
        .super-slider__btn { width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; background: transparent; cursor: pointer; }
        .super-slider__btn.active { background: white; }
    </style>
    
    <div class="super-slider">
        <div class="super-slider__container">
            <div class="super-slider__slide" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                <h2>Слайд 1</h2>
                <p>Первый слайд с красивым градиентом</p>
            </div>
            <div class="super-slider__slide" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                <h2>Слайд 2</h2>
                <p>Второй слайд с другим градиентом</p>
            </div>
            <div class="super-slider__slide" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
                <h2>Слайд 3</h2>
                <p>Третий слайд с синим градиентом</p>
            </div>
        </div>
        <div class="super-slider__controls">
            <button class="super-slider__btn active" data-slide="0"></button>
            <button class="super-slider__btn" data-slide="1"></button>
            <button class="super-slider__btn" data-slide="2"></button>
        </div>
    </div>
    
    <script>
        (function() {
            var currentSlide = 0;
            var container = document.querySelector('.super-slider__container');
            var buttons = document.querySelectorAll('.super-slider__btn');
            
            if (!container || !buttons.length) return;
            
            function showSlide(index) {
                currentSlide = index;
                container.style.transform = 'translateX(-' + (index * 100) + '%)';
                buttons.forEach(function(btn, i) {
                    btn.classList.toggle('active', i === index);
                });
            }
            
            buttons.forEach(function(btn, index) {
                btn.addEventListener('click', function() { showSlide(index); });
            });
            
            setInterval(function() {
                currentSlide = (currentSlide + 1) % 3;
                showSlide(currentSlide);
            }, 5000);
        })();
    </script>
</div>
        `
    },
    {
        solutionCode: 'super-grid',
        cod: 'SHF002',
        title: 'Супер Грид',
        icon: 'assets/icon128.png',
        htmlContent: `
<div id="solution-super-grid" class="feature-block">
    <h3>📐 Супер Грид</h3>
    <p>Здесь находятся настройки и инструменты для Супер Грида.</p>
    
    <style>
        .super-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 20px; padding: 20px; margin: 20px 0; }
        .super-grid__item { padding: 20px; background: #f8f9fa; border-radius: 8px; border: 1px solid #e0e0e0; }
    </style>
    
    <div class="super-grid">
        <div class="super-grid__item" style="grid-column: span 4;">
            <h3>Колонка 1</h3>
            <p>Содержимое первой колонки</p>
        </div>
        <div class="super-grid__item" style="grid-column: span 4;">
            <h3>Колонка 2</h3>
            <p>Содержимое второй колонки</p>
        </div>
        <div class="super-grid__item" style="grid-column: span 4;">
            <h3>Колонка 3</h3>
            <p>Содержимое третьей колонки</p>
        </div>
    </div>
</div>
        `
    },
    {
        solutionCode: 'grid-stacks',
        cod: 'SHF003',
        title: 'Грид-стеки',
        icon: 'assets/icon128.png',
        htmlContent: `
<div id="solution-grid-stacks" class="feature-block">
    <h3>📚 Грид-стеки</h3>
    <p>Здесь находятся настройки и инструменты для Грид-стеков.</p>
    
    <style>
        .super-grid-stacks { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; padding: 20px; margin: 20px 0; }
        .super-stack { background: #fff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden; transition: transform 0.3s ease; }
        .super-stack:hover { transform: translateY(-5px); }
        .super-stack__header { color: white; padding: 20px; }
        .super-stack__content { padding: 20px; }
    </style>
    
    <div class="super-grid-stacks">
        <div class="super-stack">
            <div class="super-stack__header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                <h3 style="margin: 0; font-size: 18px;">Стек 1</h3>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Описание первого стека</p>
            </div>
            <div class="super-stack__content">
                <p>Содержимое первого стека с полезной информацией.</p>
                <button style="background: #667eea; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; margin-top: 10px;">Подробнее</button>
            </div>
        </div>
        <div class="super-stack">
            <div class="super-stack__header" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                <h3 style="margin: 0; font-size: 18px;">Стек 2</h3>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Описание второго стека</p>
            </div>
            <div class="super-stack__content">
                <p>Содержимое второго стека с другой информацией.</p>
                <button style="background: #f093fb; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; margin-top: 10px;">Подробнее</button>
            </div>
        </div>
        <div class="super-stack">
            <div class="super-stack__header" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
                <h3 style="margin: 0; font-size: 18px;">Стек 3</h3>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Описание третьего стека</p>
            </div>
            <div class="super-stack__content">
                <p>Содержимое третьего стека с дополнительной информацией.</p>
                <button style="background: #4facfe; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; margin-top: 10px;">Подробнее</button>
            </div>
        </div>
    </div>
</div>
        `
    },
    {
        solutionCode: 'custom-html',
        cod: 'T123',
        title: 'Кастомный HTML',
        icon: 'assets/icon128.png',
        htmlContent: `
<div id="solution-custom-html" class="feature-block">
    <h3>🔧 Кастомный HTML</h3>
    <p>Здесь находятся настройки и инструменты для Кастомного HTML.</p>
    
    <style>
        .super-custom-html { padding: 40px; text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px; margin: 20px 0; }
        .super-features { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0; }
        .super-feature { background: rgba(255,255,255,0.1); padding: 20px; border-radius: 8px; backdrop-filter: blur(10px); }
        .super-cta { background: rgba(255,255,255,0.2); color: white; border: 2px solid white; padding: 15px 30px; border-radius: 25px; font-size: 16px; cursor: pointer; transition: all 0.3s ease; backdrop-filter: blur(10px); }
        .super-cta:hover { background: white; color: #667eea; transform: translateY(-2px); }
    </style>
    
    <div class="super-custom-html">
        <div class="super-custom-content">
            <h2 style="margin: 0 0 20px 0; font-size: 32px; font-weight: 300;">Кастомный HTML</h2>
            <p style="margin: 0 0 30px 0; font-size: 18px; opacity: 0.9;">Этот блок создан с помощью SUPER Extension</p>
            
            <div class="super-features">
                <div class="super-feature">
                    <div style="font-size: 24px; margin-bottom: 10px;">🚀</div>
                    <h4 style="margin: 0 0 10px 0;">Быстро</h4>
                    <p style="margin: 0; font-size: 14px; opacity: 0.8;">Мгновенное создание блоков</p>
                </div>
                <div class="super-feature">
                    <div style="font-size: 24px; margin-bottom: 10px;">🎨</div>
                    <h4 style="margin: 0 0 10px 0;">Красиво</h4>
                    <p style="margin: 0; font-size: 14px; opacity: 0.8;">Современный дизайн</p>
                </div>
                <div class="super-feature">
                    <div style="font-size: 24px; margin-bottom: 10px;">⚡</div>
                    <h4 style="margin: 0 0 10px 0;">Эффективно</h4>
                    <p style="margin: 0; font-size: 14px; opacity: 0.8;">Оптимизированный код</p>
                </div>
            </div>
            
            <button class="super-cta">Начать работу</button>
        </div>
    </div>
    
    <script>
        (function() {
            var ctaButton = document.querySelector('.super-cta');
            if (ctaButton) {
                ctaButton.addEventListener('click', function() {
                    alert('SUPER Extension работает! 🎉');
                });
            }
        })();
    </script>
</div>
        `
    }
];

console.log('[SUPER CONFIG] Конфигурация загружена:', window.dbmSuperSolutionsConfig.length, 'решений');

/**
 * Вспомогательная функция для "умного" и быстрого ожидания элемента в DOM.
 * РЕШАЕТ ПРОБЛЕМУ №1: Убирает задержки, работая мгновенно.
 * @param {string} selector - CSS-селектор элемента.
 * @returns {Promise<Element>}
 */
function dbmWaitForElement(selector) {
    return new Promise(resolve => {
        const el = document.querySelector(selector);
        if (el) return resolve(el);

        const observer = new MutationObserver(() => {
            const el = document.querySelector(selector);
            if (el) {
                observer.disconnect();
                resolve(el);
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    });
}

/**
 * Главная функция отрисовки. Создает вкладку и карточки модов.
 * РЕШАЕТ ПРОБЛЕМЫ №4 и №9: Создает вкладку и карточки по структуре Tilda.
 */
async function dbmRenderSuperPanel() {
    console.log('[SUPER] Начинаем отрисовку панели SUPER...');
    
    // Ждем, пока Tilda загрузит свою библиотеку
    const libraryContainer = await dbmWaitForElement('.tp-library__body');
    const rightSideContainer = await dbmWaitForElement('.tp-library-rightside');

    console.log('[SUPER] Контейнеры Tilda найдены, создаем интерфейс...');

    // --- 1. Создание кастомной вкладки "SUPER" ---
    const categoryHTML = `
        <div class="tp-library__type-body" id="super-category-tab" data-library-type-id="-super-mods">
            <div class="tp-library__type">
                <div class="tp-library__type-title-wrapper">
                    <div class="tp-library__type-title" style="font-weight: 600;">SUPER Моды</div>
                </div>
            </div>
        </div>
    `;
    libraryContainer.insertAdjacentHTML('afterbegin', categoryHTML);

    // --- 2. Создание контейнера для карточек наших модов ---
    const superBlocksContainerHTML = `
        <div class="tp-library__tpls-list-body" id="tplslist-super-mods" data-tpls-for-type="-super-mods" style="display: none;">
            <div class="tp-library__tpls-list-body__container">
                </div>
        </div>
    `;
    rightSideContainer.insertAdjacentHTML('beforeend', superBlocksContainerHTML);
    const blocksContainer = rightSideContainer.querySelector('#tplslist-super-mods .tp-library__tpls-list-body__container');

    // --- 3. Генерация и вставка карточек модов ---
    // Убедитесь, что у вас в проекте есть файл config.js с этой переменной
    if (typeof window.dbmSuperSolutionsConfig === 'undefined') {
        console.error('SUPER: Конфиг dbmSuperSolutionsConfig не найден!');
        return;
    }

    console.log('[SUPER] Создаем карточки для', window.dbmSuperSolutionsConfig.length, 'решений...');

    window.dbmSuperSolutionsConfig.forEach(config => {
        // РЕШАЕТ ПРОБЛЕМУ №8 и №9: Используем структуру Tilda для карточки и подтягиваем данные (cod, title)
        const cardHTML = `
            <div class="tp-library__tpl-body" data-solution-code="${config.solutionCode}" data-tpl-id="131">
                <div class="tp-library__tpl-wrapper">
                    <div class="tp-library__tpl-secwrapper">
                        <div class="tp-library__tpl-thirdwrapper">
                             <img class="tp-library__tpl-icon" src="${chrome.runtime.getURL(config.icon)}">
                             <div class="tp-library__tpl-bottom-wrapper">
                                <div class="tp-library__tpl-caption">
                                    <span class="tp-library__tpl-cod">${config.cod}</span>
                                    <span class="tp-library__tpl-title">${config.title}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        blocksContainer.insertAdjacentHTML('beforeend', cardHTML);
    });

    console.log('[SUPER] Карточки созданы, добавляем обработчики событий...');
    dbmAddEventListeners();
}

/**
 * Добавляет все необходимые обработчики событий.
 */
function dbmAddEventListeners() {
    const superTab = document.getElementById('super-category-tab');
    const superBlocksPanel = document.getElementById('tplslist-super-mods');

    // --- Логика переключения вкладок ---
    // РЕШАЕТ ПРОБЛЕМУ №5: Добавляет/убирает классы для корректного отображения.
    superTab.addEventListener('click', () => {
        console.log('[SUPER] Переключаемся на вкладку SUPER...');
        
        document.querySelectorAll('.tp-library__type-body_active').forEach(el => el.classList.remove('tp-library__type-body_active'));
        superTab.classList.add('tp-library__type-body_active');
        
        document.querySelectorAll('.tp-library__tpls-list-body_active').forEach(el => el.classList.remove('tp-library__tpls-list-body_active'));
        superBlocksPanel.classList.add('tp-library__tpls-list-body_active');
        superBlocksPanel.style.display = 'block';
        
        document.querySelector('.tp-library').classList.add('tp-library_rightsideopened');
        
        console.log('[SUPER] Вкладка SUPER активирована');
    });

    // --- Логика добавления блока по клику на карточку ---
    // РЕШАЕТ ПРОБЛЕМЫ №2, №6, №7: Полный цикл добавления и сохранения блока.
    document.querySelectorAll('#tplslist-super-mods .tp-library__tpl-body').forEach(card => {
        card.addEventListener('click', async () => {
            const solutionCode = card.dataset.solutionCode;
            const config = window.dbmSuperSolutionsConfig.find(s => s.solutionCode === solutionCode);

            if (!config) {
                console.error('[SUPER] Конфигурация не найдена для:', solutionCode);
                return;
            }

            console.log(`[SUPER] Добавляем блок для мода "${config.title}"`);

            try {
                // 1. Скрываем библиотеку самым надежным способом - симуляцией клика.
                const closeButton = document.querySelector('.tp-library__header-close-wrapper .tp-library__header-close');
                if (closeButton) {
                    closeButton.click();
                } else {
                    console.error('[SUPER] Кнопка закрытия библиотеки не найдена.');
                    // Попытка вызова функции напрямую как запасной вариант
                    const tildaHideLibrary = window.tp__library__hide || window.tp__library__close || window.tpgallery_close;
                    if (typeof tildaHideLibrary === 'function') {
                        tildaHideLibrary();
                    } else {
                        return; // Прерываем выполнение, если ничего не сработало
                    }
                }
                console.log('[SUPER] Библиотека скрыта');
            
                // 2. Ждем готовности API Tilda для сохранения данных.
                await dbmWaitForFunction('tp__addRecord');
                await dbmWaitForFunction('panel__editrecord_saveval');
                await dbmWaitForFunction('tp__updateRecord');
                console.log('[SUPER] Tilda API готово.');
            
                // 3. Добавляем пустой блок и получаем его ID.
                const newRecId = window.tp__addRecord('123', window.afterid || '', true);
                const fullRecId = `rec${newRecId}`;
                console.log(`[SUPER] Блок создан с ID: ${fullRecId}`);
            
                // 4. Получаем HTML-контент (динамически или статически).
                const htmlContent = typeof config.getHtmlContent === 'function' 
                    ? config.getHtmlContent() 
                    : config.htmlContent;
            
                if (!htmlContent) {
                    console.error('[SUPER] HTML-контент для блока не определен!');
                    return;
                }
                
                // 5. ПОСЛЕДОВАТЕЛЬНО СОХРАНЯЕМ ДАННЫЕ НАПРЯМУЮ
                console.log('[SUPER] Сохраняем HTML контент...');
                await window.panel__editrecord_saveval(fullRecId, 'html', htmlContent);
                console.log('[SUPER] HTML контент сохранен.');
            
                console.log('[SUPER] Добавляем CSS класс "dbm-block"...');
                await window.panel__editrecord_saveval(fullRecId, 'cssclassname', 'dbm-block');
                console.log('[SUPER] CSS класс "dbm-block" добавлен.');
                
                // 6. Обновляем блок на странице, чтобы все изменения отобразились.
                await window.tp__updateRecord(fullRecId);
                
                console.log(`[SUPER] Мод "${config.title}" успешно добавлен и сохранен!`);
            
            } catch (error) {
                console.error('[SUPER] Ошибка при добавлении блока:', error);
            }
        });
    });

    console.log('[SUPER] Обработчики событий добавлены');
}

// ============================================================================
// ЭКСПОРТ ФУНКЦИЙ ДЛЯ ОТЛАДКИ
// ============================================================================

// Экспортируем функции в глобальную область видимости для отладки
window.superDebug = {
    // Основные функции
    renderShiftPanel,
    dbmAddEventListeners,
    dbmWaitForElement,
    
    // Данные
    dbmSuperSolutionsConfig: () => window.dbmSuperSolutionsConfig,
    
    // Функции для тестирования
    testTildaAPI: function() {
        console.log('[SUPER DEBUG] Проверяем доступность Tilda API...');
        const api = {
            tpAddRecord: typeof window.tp__addRecord === 'function',
            panelEditRecord: typeof window.panel__editrecord === 'function',
            tpLibraryHide: typeof window.tp__library__hide === 'function',
            recordDel: typeof window.record__del === 'function',
            recordOnoff: typeof window.record__onoff === 'function'
        };
        console.log('[SUPER DEBUG] Tilda API статус:', api);
        return api;
    },
    
    testWaitForElement: async function(selector, timeout = 5000) {
        console.log(`[SUPER DEBUG] Тестируем ожидание элемента: ${selector}`);
        const startTime = Date.now();
        const element = await dbmWaitForElement(selector);
        const elapsedTime = Date.now() - startTime;
        
        if (element) {
            console.log(`[SUPER DEBUG] Элемент найден за ${elapsedTime}мс:`, element);
        } else {
            console.log(`[SUPER DEBUG] Элемент не найден за ${elapsedTime}мс`);
        }
        
        return element;
    },
    
    testAddBlock: async function(solutionCode) {
        const config = window.dbmSuperSolutionsConfig.find(s => s.solutionCode === solutionCode);
        if (!config) {
            console.error('[SUPER DEBUG] Решение не найдено:', solutionCode);
            return;
        }
        
        console.log('[SUPER DEBUG] Тестируем добавление блока:', config.title);
        
        try {
            // 1. Скрываем библиотеку
            window.tp__library__hide();
            
            // 2. Добавляем блок
            const newRecId = window.tp__addRecord('123', window.afterid || '', true);
            const fullRecId = `rec${newRecId}`;
            
            // 3. Открываем настройки
            window.panel__editrecord(fullRecId, 'content');
            
            // 4. Ждем поле для HTML
            const htmlTextarea = await dbmWaitForElement('#ts-control-html-code');
            
            // 5. Вставляем код
            htmlTextarea.value = config.htmlContent;
            htmlTextarea.dispatchEvent(new Event('input', { bubbles: true }));
            
            // 6. Сохраняем
            const saveButton = await dbmWaitForElement('.ts-btn-pro-close');
            if (saveButton) {
                saveButton.click();
                console.log('[SUPER DEBUG] Блок успешно создан и сохранен!');
            }
            
        } catch (error) {
            console.error('[SUPER DEBUG] Ошибка при тестировании:', error);
        }
    },
    
    listBlocks: function() {
        const blocks = document.querySelectorAll('.record[data-record-cod^="SHF"], .record[data-record-cod="T123"]');
        console.log('[SUPER DEBUG] Найденные SUPER блоки:', blocks.length);
        blocks.forEach((block, index) => {
            const recId = block.id;
            const recordCod = block.getAttribute('data-record-cod');
            const title = block.getAttribute('data-title');
            console.log(`[SUPER DEBUG] Блок ${index + 1}:`, { recId, recordCod, title });
        });
        return blocks;
    },
    
    testFullFlow: async function(solutionCode) {
        console.log('[SUPER DEBUG] Тестируем полный поток создания блока...');
        const config = window.dbmSuperSolutionsConfig.find(s => s.solutionCode === solutionCode);
        if (!config) {
            console.error('[SUPER DEBUG] Решение не найдено:', solutionCode);
            return;
        }
        
        console.log('[SUPER DEBUG] Начинаем тест для:', config.title);
        
        // Проверяем API
        const api = this.testTildaAPI();
        if (!api.tpAddRecord || !api.panelEditRecord) {
            console.error('[SUPER DEBUG] Tilda API недоступен');
            return;
        }
        
        // Тестируем создание блока
        await this.testAddBlock(solutionCode);
        
        // Проверяем результат
        setTimeout(() => {
            this.listBlocks();
        }, 2000);
    }
};

console.log('[SUPER] Функции отладки доступны в window.superDebug');

// ============================================================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================================================

/**
 * Главная функция инициализации
 */
async function dbmInitSuperExtension() {
    console.log('[SUPER] Инициализация SUPER Extension...');
    console.log('[SUPER] Текущий URL:', window.location.href);
    console.log('[SUPER] Document ready state:', document.readyState);
    
    try {
        // Проверяем, что мы на странице Tilda
        const isTildaPage = window.location.href.includes('tilda.cc') || 
                           window.location.href.includes('tilda.ws') || 
                           window.location.href.includes('tilda.ru');
        
        if (!isTildaPage) {
            console.log('[SUPER] Не на странице Tilda, пропускаем инициализацию');
            console.log('[SUPER] Текущий URL:', window.location.href);
            return;
        }
        
        console.log('[SUPER] На странице Tilda, продолжаем инициализацию');
        
        // Ждем загрузки DOM
        if (document.readyState === 'loading') {
            await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve));
        }
        
        // Ждем загрузки конфигурации
        let attempts = 0;
        while (typeof window.dbmSuperSolutionsConfig === 'undefined' && attempts < 50) {
            await new Promise(resolve => setTimeout(resolve, 100));
            attempts++;
        }
        
        if (typeof window.dbmSuperSolutionsConfig === 'undefined') {
            console.error('[SUPER] Конфигурация dbmSuperSolutionsConfig не загружена!');
            return;
        }
        
        console.log('[SUPER] Конфигурация загружена, начинаем отрисовку...');
        
        // Запускаем отрисовку панели
        await dbmRenderSuperPanel();
        
        console.log('[SUPER] SUPER Extension успешно инициализирован!');
        
    } catch (error) {
        console.error('[SUPER] Ошибка при инициализации:', error);
    }
}

// Запускаем инициализацию
console.log('[SUPER] Запускаем инициализацию SUPER Extension...');
dbmInitSuperExtension();
console.log('[SUPER] Файл super.js загружен полностью');