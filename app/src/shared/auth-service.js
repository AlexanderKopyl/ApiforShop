import config from '../app.config'

export const signIn = (body) => {
    return fetch({
        method: 'POST',
        url: `${config.url}customers/login`,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
};