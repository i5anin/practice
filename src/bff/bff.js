const generateDate = () =>
    new Date(Math.random() * 1000000000000 + 1999999999999)
        .toISOString()
        .substring(0, 16)
        .replace('T', ' ');


export const server = {
    async authorize(authLogin, authPassword) {
        const response = await fetch('http://localhost:3005/users');
        const users = await response.json();

        const user = users.find(({login}) => login === authLogin);

        if (!user) {
            return {
                error: 'Такой пользователь не найден',
                res: null,
            };
        }

        if (authPassword !== user.password) {
            return {
                error: 'Неверный пароль',
                res: null,
            };
        }

        const session = {
            user: {login: user.login, role_id: user.role_id},
            logout() {
                Object.keys(session).forEach((key) => {
                    delete session[key];
                });
            },
            removeComment() {
                console.log('Удаление комментария');
            }
        };

        return {
            error: null,
            res: session,
        };
    },

    async register(regLogin, regPassword) {
        const response = await fetch('http://localhost:3005/users');
        const users = await response.json();

        const user = users.find(({login}) => login === regLogin);

        if (user) {
            return {
                error: 'Такой логин уже занят',
                res: null,
            };
        }

        const newUser = {
            login: regLogin,
            password: regPassword,
            registed_at: generateDate(), //new Date().toISOString(), // дата регистрации
            role_id: 2                                               // базовая роль
        };

        await fetch('http://localhost:3005/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: JSON.stringify(newUser),
        });

        return {
            error: null,
            res: newUser,
        };
    }
};
