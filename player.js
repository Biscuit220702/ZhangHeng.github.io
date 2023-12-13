var musicPlayer = document.getElementById('music'); // 获取音乐播放器元素
var currentTime = 0; // 记录音乐播放器当前的播放位置

// 监听页面即将隐藏的事件
window.addEventListener('pagehide', function() {
  saveCurrentTime(); // 保存当前音乐播放器的播放位置
});

// 监听页面即将显示的事件
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    restorePlayerState(); // 在页面显示时恢复音乐播放器状态
  }
});

// 保存当前音乐播放器的播放位置
function saveCurrentTime() {
    localStorage.setItem('currentTime', musicPlayer.currentTime.toString());
}

// 在页面显示时恢复音乐播放器状态
function restorePlayerState() {
  // 在新页面中查找音乐播放器元素
  musicPlayer = document.getElementById('music');
  var currentTime = localStorage.getItem('currentTime');
  // 设置音乐播放器的播放位置为之前保存的时间点
  musicPlayer.currentTime = parseFloat(currentTime);

  // 恢复音乐播放
  musicPlayer.play();
}

// var musicPlayer = document.getElementById('music-player'); // 获取音乐播放器元素

// // 获取存储在 localStorage 中的 currentTime 值
// var currentTime = localStorage.getItem('currentTime');

// // 如果存在保存的 currentTime 值，则将音乐播放器的播放位置设置为该值
// if (currentTime !== null) {
//   musicPlayer.currentTime = parseFloat(currentTime);
// }

// // 监听页面即将隐藏的事件
// window.addEventListener('pagehide', function() {
//   // 保存当前音乐播放器的播放位置到 localStorage 中
//   localStorage.setItem('currentTime', musicPlayer.currentTime.toString());
// });