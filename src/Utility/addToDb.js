const getStoredBook = () => {
    const storedBookStr = localStorage.getItem('bookList');
    if (storedBookStr) {
        const storedBook = JSON.parse(storedBookStr);
        return storedBook;
    }
    else {
        return [];
    }
}

const addToStoredDb = (id) => {
    const storedBookData = getStoredBook();

    if (storedBookData.includes(id)) {
        alert('Book Already Added');
    }
    else {
        storedBookData.push(id);
        const newStoredBookData = JSON.stringify(storedBookData);
        localStorage.setItem('bookList', newStoredBookData)
    }
}
export { addToStoredDb };