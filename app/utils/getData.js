import data from '../data/clients.json';

export default async function fetchData() {
    let users = [];
    try {
        users = await fetch(data);

    } catch (error) {

    }
}


