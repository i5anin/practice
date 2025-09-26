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
    }
};
