class Server {
    constructor() {
        this.token;
    }
    async send(params = {}) {
        const query = Object.keys(params)
            .map(key => `${key}=${params[key]}`).join('&');
        const response = await fetch(`api/?${query}`);
        const answer = await response.json();
        console.log(answer?.result == 'ok' ? answer?.data : null);
        return answer?.result == 'ok' ? answer?.data : null;
    }

    async login(login, password) {
        if (login && password) {
            const data = await this.send({ method: 'login', login, password });
            if (data?.token) {
                this.token = data.token;
                delete data.token;
                return data;
            }
        }
        return null;
    }

    convert(value, systemFrom, systemTo) {
        if (value && systemFrom && systemTo) {
            return this.send({ method: 'convert', value, systemFrom, systemTo });
        }
        return null;
    }

    async logout(login) {
        if (login) {
            const data = await this.send({method: 'logout', login});
            return data;
        }
    }

    async registration(login, password) {
        if (login && password) {
            const data = await this.send({method: 'registration', login, password});
            return data;
        }
    }


}

export default Server;