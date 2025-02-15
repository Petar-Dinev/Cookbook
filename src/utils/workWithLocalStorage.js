function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}
function setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function clearData(key) {
    localStorage.removeItem(key);
}

export { getData, setData, clearData };