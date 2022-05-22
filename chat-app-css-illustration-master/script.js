const btn = document.getElementById('subBtn');

btn.addEventListener('click', function handleClick(event) {
    const newText = document.getElementById('typeText');
    if (newText.value != '') {
        let newEle = document.createElement("div");
        newEle.setAttribute("class", "msg chat-right")
        newEle.innerHTML = newText.value;

        let elePosition = document.getElementById('input');
        elePosition.before(newEle);
        newText.value = '';

        (function () {
            let scrollChat = document.getElementById("scrollDown");
            let newEle = scrollChat.querySelector('div:nth-last-of-type(2)');
            let x = newEle.clientHeight + 5;
            scrollChat.scrollTop += x;
        })();
    }
});