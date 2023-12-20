// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let hh = 0;
let mm = 0;
let ss = 0;
let counter = function () {
    setTimeout(
        function () {
            console.log(`${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`);
            ++ss;
            if (ss >= 60) {
                ++mm;
                ss = 0;
            }
            if (mm >= 60) {
                ++hh;
                mm = 0;
            }
            counter();
        }, 1000);
}

counter();






































































// (Hint: setTimeout)