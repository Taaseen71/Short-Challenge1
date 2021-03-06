import React, { useState } from 'react'

function BiggestInfluencer({ allSubscribers }) {

    let array = []

    for (let i = 0; i < allSubscribers.length; i++) {
        array = [...array, allSubscribers[i].referralCount]
    }

    console.log(allSubscribers[indexOfMax(array)].email)

    function indexOfMax(arr) {
        if (arr.length === 0) {
            return -1;
        }

        var max = arr[0];
        var maxIndex = 0;

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
        return maxIndex;
    }

    return (
        <div>
            <p>Biggest Influencer: {allSubscribers[indexOfMax(array)].email} </p>
        </div>
    )
}

export default BiggestInfluencer
