const yourDate = new Date("2024-01-10T00:00:00"),
    music = ["1"];

document.addEventListener(
    "DOMContentLoaded",
    function () {
        var rootTime = document.querySelector("time");

        document.querySelector("anni").textContent = `${
            yourDate.getDate() > 9 ? yourDate.getDate() : "0" + yourDate.getDate()
        }-${
            yourDate.getMonth() > 8 ? yourDate.getMonth() + 1 : "0" + (yourDate.getMonth() + 1)
        }-${yourDate.getFullYear()}`;

        document.querySelector("date").textContent =
            Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24 + 1) + " Ngày";

        function olock() {
            var today = new Date(),
                years = today.getFullYear() - yourDate.getFullYear(),
                months = today.getMonth() - yourDate.getMonth(),
                days = today.getDate() - yourDate.getDate(),
                hours = today.getHours() - yourDate.getHours(),
                minutes = today.getMinutes() - yourDate.getMinutes(),
                seconds = today.getSeconds() - yourDate.getSeconds();

            if (seconds < 0) {
                minutes--;
                seconds += 60;
            }
            if (minutes < 0) {
                hours--;
                minutes += 60;
            }
            if (hours < 0) {
                days--;
                hours += 24;
            }
            if (days < 0) {
                months--;
                var prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
                days += Math.floor((today - prevMonth) / (1000 * 60 * 60 * 24));
            }
            if (months < 0) {
                years--;
                months += 12;
            }

            var weeks = Math.floor(days / 7);
            days = (days % 7) - 1;

            rootTime.textContent = `${years}Y ${months}M ${weeks}W ${days}D ${hours}H ${minutes}M ${seconds}S`;
        }
        var timer = setInterval(function () {
            olock();
        }, 1000);
        document
            .querySelector("audio")
            .setAttribute("src", `music/${music[Math.floor(Math.random() * music.length)]}.mp3`);

        document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", "<div id='mask'></div>");
    },
    false
);
