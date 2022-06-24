import React from 'react'

export default function ArrayTask() {
    const arr = [10, 5, 11, 2, 35]
    let largeNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largeNumber) {
            largeNumber = arr[i]
        }
    }
    let smallNumber = 100;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallNumber) {
            smallNumber = arr[i]
        }
    }
    console.log("The largest number is ", largeNumber);
    console.log("The smallest number is ", smallNumber)
    return (
        <>
            <div>ArrayTask</div>
        </>
    )
}