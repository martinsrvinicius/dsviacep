import RequestException from './exception/request-exception.js';

export async function getJson(){
    try {
        const response = await fetch(url);
        const jsonBody = await response.json();
        return jsonBody;
    }
    catch (e) {
        throw new RequestException("Não deu certo, amigo!");
    }
}