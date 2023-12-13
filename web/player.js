// 在页面加载时创建一个音频元素
var audioElement = document.createElement('audio');
audioElement.id = 'music';
audioElement.src = "../image/Theme2.mp3";
audioElement.loop = true;

// 将音频元素添加到页面中的合适位置
document.body.appendChild(audioElement);

// 监听页面切换事件，并记录当前播放位置
window.addEventListener('beforeunload', function() {
  localStorage.setItem('musicPosition', audioElement.currentTime);
});

// 在每个页面加载完毕后继续播放音乐
window.addEventListener('load', function() {
  var savedPosition = localStorage.getItem('musicPosition');
  
  if (savedPosition) {
    audioElement.currentTime = parseFloat(savedPosition);
  }
  
  audioElement.play();
});
