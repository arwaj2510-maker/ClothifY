"use client";

export async function createProduct() {

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "New Product",
            body: "This is dummy data",
            userId: 1,
        }),
    })
        .then((res) => res.json())
        .then((data) => console.log(data));

}