let title = document.getElementById('title');
let leaf = document.getElementById('leaf');
let hill = document.getElementById('hill');
let tushuguan = document.getElementById('tushuguan');
let nanyilou = document.getElementById('nanyilou');
let qiance = document.getElementById('qiance');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    title.style.marginTop = value * 1.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    nanyilou.style.left = value * 1.5 + 'px';
    tushuguan.style.left = value * -1.5 + 'px';
    hill.style.top = value * 0.5 + 'px';
    qiance.style.top = value * 0.4 + 'px';
});