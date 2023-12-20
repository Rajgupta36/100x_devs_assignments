/*## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second
*/
let hh = 0;
let mm = 0;
let ss = 0;
let counter = function () {
    setInterval(
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
        }, 1000);
}

counter();
