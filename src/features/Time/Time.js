import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router';

function Time(unix){

    const postedDateTime = new Date(unix * 1000);

    //GET TIME
    const hours = postedDateTime.getHours() < 10 ? '0' + postedDateTime.getHours() : postedDateTime.getHours() + 24 % 12 || 12;
    const mins = postedDateTime.getMinutes() < 10 ? '0' + postedDateTime.getMinutes() : postedDateTime.getMinutes();
    const date = postedDateTime.getDate() < 10 ? '0' + postedDateTime.getDate() : postedDateTime.getDate();

    //GET DAY, MONTH, YEAR
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[postedDateTime.getDay()];

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[postedDateTime.getMonth()];

    const year = postedDateTime.getFullYear();

    let numeralDate = '';

    //GET DATE USING DATE
    function getNum(date){
        if(date === 1 || date === 21 || date === 31) {
            numeralDate = `${date}st`
        }
        else if(date === 2 || date === 22) {
            numeralDate = `${date}nd`
        }
        else if(date === 3 || date === 23) {
            numeralDate = `${date}rd`
        }
        else{
            numeralDate = `${date}th`
        }
    }

    getNum(date);

    return(
        <div className = "dateTime">
          Posted at: {hours}:{mins}:{date} on {day} {numeralDate} {month} {year}
        </div>
    );
}

export default Time;