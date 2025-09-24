## Области хранения данных

- база данных на json-server
- BFF
- редакс стор

---

## Сущности приложения:

- пользователь:
    - БД (список пользователей),
    - BFF (сессия текущего),
    - стор (отображение в браузере)
- роль пользователя:
    - БД (список ролей),
    - BFF (сессия пользователя с ролью),
    - стор (использование на клиенте)
- статья:
    - БД (список статей),
    - стор (отображение в браузере)
- комментарий:
    - БД (список комментариев),
    - стор (отображение в браузере)

---

## Таблицы БД:

- пользователи - users: `id` / `login` / `password` / `registed_at` / `role_id`
- роли - roles: `id` / `name`
- статьи - posts: `id` / `title` / `image_url` / `content` / `published_at`
- комментарии - comments: `id` / `author_id` / `post_id` / `content`

Хорошо, я дополню твои данные, чтобы схема была полной и согласованной по уровням (БД → BFF → Redux store).

---

## Обновлённые таблицы БД

* **users**: `id` / `login` / `password` / `registered_at` / `role_id`
* **roles**: `id` / `name`
* **posts**: `id` / `title` / `image_url` / `content` / `published_at`
* **comments**: `id` / `author_id` / `post_id` / `content` / `published_at`

---

## Схема состояния на BFF

* **сессия текущего пользователя**: `login` / `password` / `role`
* **posts** (для клиента): `id` / `title` / `imageUrl` / `content` / `publishedAt` / `commentsCount`
* **comments** (привязка к посту): `id` / `author` / `content` / `publishedAt`

---

## Схема для редакс стора (клиент)

* **user**: `id` / `login` / `roleId`
* **posts**: массив `post`:

    * `id` / `title` / `imageUrl` / `content` / `publishedAt` / `commentsCount`
* **post** (детализация конкретной статьи):

    * `id` / `title` / `imageUrl` / `content` / `publishedAt`
    * `comments`: массив `comment`: `id` / `author` / `content` / `publishedAt`
* **users**: массив `user`: `id` / `login` / `registeredAt` / `role`

