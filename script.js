const dog = document.querySelector(".dog");
const stage = document.querySelector(".stage");
const startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", function () {
  // 狗回到起點
  dog.style.transition = "none";
  dog.style.left = "30px";

  // 加上 running
  // 尾巴和腳開始動
  dog.classList.add("running");
  stage.classList.add("running");

  setTimeout(function () {
    // 設定跑步時間為 10 秒
    dog.style.transition = "left 10s linear";

    // 跑到右邊
    dog.style.left = "calc(100% - 180px)";
  }, 100);

  // 10 秒後停止腳和尾巴
  setTimeout(function () {
    dog.classList.remove("running");
    stage.classList.remove("running");
  }, 10100);
});
