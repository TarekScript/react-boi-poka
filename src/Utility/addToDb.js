import Swal from 'sweetalert2';
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
        Swal.fire({
            icon: "error",
            title: "Book Already Added!",
        });
    }
    else {
        storedBookData.push(id);
        const newStoredBookData = JSON.stringify(storedBookData);
        localStorage.setItem('bookList', newStoredBookData)
    }
}

const getWishListedBook = () => {
    const wishListedBookStr = localStorage.getItem('wishList');
    if (wishListedBookStr) {
        const wishListedBook = JSON.parse(wishListedBookStr);
        return wishListedBook;
    }
    else {
        return [];
    }
}

const addToWishList = (id) => {
    const wishListedData = getWishListedBook();
    if (wishListedData.includes(id)) {
        Swal.fire({
            icon: "error",
            title: "Book Already Added!",
        });
    }
    else {
        wishListedData.push(id);
        const wishListedDataStri = JSON.stringify(wishListedData);
        localStorage.setItem('wishList', wishListedDataStri)
    }
}

export { addToStoredDb, getStoredBook, addToWishList, getWishListedBook };