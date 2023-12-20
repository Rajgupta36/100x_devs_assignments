/*Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

- HH:MM::SS (Eg. 13:45:23)

- HH:MM::SS AM/PM (Eg 01:45:23 PM) */

"use strict";

let Timer = function () {
  setTimeout(
    function () {
      let date = new Date();
      let HH = date.getHours() >= 12 ? date.getHours() % 12 : date.getHours();
      let TZ = date.getHours() >= 12 ? 'PM' : 'AM';
      console.log(`${String(HH).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')} ${TZ}`);
      Timer();
    }, 1000);
}

Timer();