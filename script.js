document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('background-music');
    const musicToggleButton = document.getElementById('music-toggle-btn');

    let isPlaying = false; // สถานะเริ่มต้นของเพลง

    // ลองเล่นเพลงอัตโนมัติเมื่อโหลดหน้า หากเบราว์เซอร์อนุญาต
    backgroundMusic.play().then(() => {
        isPlaying = true;
        musicToggleButton.textContent = '⏸️ หยุดเพลงอวยพร';
    }).catch(error => {
        // หากเล่นอัตโนมัติไม่ได้ จะแสดงปุ่มเล่น
        console.log("Autoplay was prevented. User interaction needed to play music.");
        isPlaying = false;
        musicToggleButton.textContent = '🎵 เล่นเพลงอวยพร';
    });


    musicToggleButton.addEventListener('click', function() {
        if (isPlaying) {
            backgroundMusic.pause();
            musicToggleButton.textContent = '🎵 เล่นเพลงอวยพร';
        } else {
            backgroundMusic.play();
            musicToggleButton.textContent = '⏸️ หยุดเพลงอวยพร';
        }
        isPlaying = !isPlaying; // สลับสถานะ
    });

    // เพิ่ม event listener เพื่ออัปเดตสถานะปุ่มเมื่อเพลงเล่นจบ (ถ้าไม่วนซ้ำ) หรือถูกหยุดด้วยวิธีอื่น
    backgroundMusic.addEventListener('ended', () => {
        isPlaying = false;
        musicToggleButton.textContent = '🎵 เล่นเพลงอวยพร';
    });

    backgroundMusic.addEventListener('pause', () => {
        isPlaying = false;
        musicToggleButton.textContent = '🎵 เล่นเพลงอวยพร';
    });

    backgroundMusic.addEventListener('play', () => {
        isPlaying = true;
        musicToggleButton.textContent = '⏸️ หยุดเพลงอวยพร';
    });
});
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if (e.keyCode == 123) { // F12 key
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Ctrl+Shift+J
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Ctrl+U
        return false;
    }
}

