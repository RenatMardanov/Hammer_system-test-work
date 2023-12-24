const fetchClients = {};

fetchClients.get = async (id = "") => {
    return await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
        res.json()
    );
};

fetchClients.set = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User updated");
        }, 2000);
    });
};

export default fetchClients;
