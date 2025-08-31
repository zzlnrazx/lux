document.body.classList.add('bg-gradient');
document.getElementById('bt1').addEventListener('click', function() {
    const msg = document.getElementById('message');
    const msg2 = document.getElementById('message2');
    let count = 3;
    msg2.textContent = '';
    msg.textContent = `เซอร์ไพรส์สุดเร้าใจ! ในอีก ${count} วินาที`;
    document.body.classList.remove('bg-gradient');
    document.getElementById('bt1').style.display = 'none';
    document.body.style.backgroundColor = '';
    document.body.classList.add('bg-image-1');

    document.querySelector('.box').style.display = 'none';

    const interval = setInterval(() => {
        count--;
        if (count > 0) {
            msg.textContent = `เซอร์ไพรส์สุดเร้าใจ! ในอีก ${count} วินาที`;
        } else {
            clearInterval(interval);
            msg.textContent = '';
            document.body.style.backgroundColor = '';
            document.body.classList.add('bg-image-2');
            document.getElementById('bt1').style.display = 'none';
            // ลดระดับเสียง
            const audio = document.getElementById('audio');
            audio.volume = 0.2; 
            audio.loop = true; 
            audio.play();
        }
    }, 1000);
});