console.log("Website is loaded!");

function startStory() {
    console.log("Start clicked");

    const isInIframe = window !== window.parent;

    if (isInIframe) {
        const frame = window.parent.document.getElementById('sceneFrame');
        if (frame) {
            const audio = window.parent.document.getElementById('bgAudio');
            if (audio) {
                localStorage.setItem('audioTime', audio.currentTime);
                localStorage.setItem('audioPlaying', !audio.paused);
            }

            document.querySelector('.box-content').classList.add('fade-out');

            setTimeout (() => {
                frame.src = 'scene1.html';
            }, 500);
        }
    } else {
        // fallback if not in iframe (debugging or direct access)
        window.location.href = 'scene1.html';
    }
}

document.querySelectorAll('.insta-post').forEach(post => {
    post.addEventListener('click', () => {
        const postId = post.getAttribute('data-id');

        const suspiciousIds = ['2', '4', '6'];
        const isSuspicious = suspiciousIds.includes(postId);

        post.classList.toggle('suspicious');

        if (isSuspicious) {
            showToast("✅ Good eye! This post is suspicious.");
        } else {
            showToast("❌ Hmm... this one doesn't seem suspicious.");
        }
    });
});

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}
window.startStory = startStory;
