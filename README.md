# "RockStone-test"

Тестовое задание

## О приложениии

[Демо](https://rockstone-test-124b2.web.app).

* В приложении реализовано модальное меню;
* Меню выдвигается при клике по кнопке на главной странице;
* Меню задвигается при клике по кнопке-стрелке на оверлее;
* Состав меню и наличие лейблов формируется динамически при открытии в зависимости от наличия нотификаций. В рамках данного проекта исходные данные для формирования меню находятся в файлах `src/modules/createModalMenuLeft/modalListLeftDb.js` и `src/modules/createModalMenuRight/modalListRightDb.js`;

## Стек технологий

* Модульная структура скриптов /src/modules;
* Сборка webpack;
* SASS/SCSS;
* Адаптивная кроссбраузерная верстка;
* Request Animation Frame

## Как использовать?

* Скопировать содержимое в рабочую директорию;
* В консоли выполнить `npm install` для установки `node modules`;
* Режим разработки в консоли `npm run dev`, открыть в браузере `http://localhost:3000`;
* Сборка готового приложения в консоли `npm run build`;
* Готовый к деплою проект будет в папке `build`.