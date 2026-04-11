// Create a book object with title, author, pages, and a nested ratings object containing average and total. Log the average rating and total using dot notation.

const book = {
    title : "How to win friends and influence people",
    author: "Dale C.",
    pages: 180,
    ratings : {
        average: 7,
        total: 50
    }
};

console.log(book.ratings.average);
console.log(book.ratings.total);