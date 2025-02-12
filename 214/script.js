
// 逐个字显示祝福语的函数
function displayMessage() {
  const message = '祝独角兽情人节快乐';
  const messageContainer = document.getElementById('message');
  let i = 0;
  
  function showNextLetter() {
    if (i < message.length) {
      const letter = document.createElement('span');
      letter.textContent = message[i];
      letter.style.animation = `showMessage 0.5s ease-in-out forwards`;
      messageContainer.appendChild(letter);
      i++;
      setTimeout(showNextLetter, 500); // 控制每个字出现的时间
    } else {
      setTimeout(() => {
        document.getElementById('popup').style.display = 'block'; // 显示弹窗
      }, 2000);
    }
  }

  showNextLetter();
}

// 控制弹窗的显示
document.getElementById('yesButton').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('quizContainer').style.display = 'block'; // 显示答题界面
});

document.getElementById('noButton').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'none';
  alert('感谢访问！祝您有个美好的一天！');
});

// 处理答题逻辑
function handleQuiz() {
  const correctAnswer = "你知道的答案"; // 替换成正确答案
  const userAnswer = document.getElementById('answer').value.trim();

  if (userAnswer === correctAnswer) {
    document.getElementById('quizResult').innerHTML = '答对了！密码是：123456';
    document.getElementById('prizeContainer').style.display = 'block'; // 显示奖励
    document.getElementById('quizResult').style.animation = 'bounceIn 1s'; // 动态效果
  } else {
    document.getElementById('paymentQRCode').style.display = 'block'; // 显示二维码
    document.getElementById('quizResult').innerHTML = '答错了，扫描二维码付款继续答题';
    document.getElementById('quizResult').style.animation = 'shake 0.5s'; // 错误时摇晃动画
  }
}

document.getElementById('submitAnswer').addEventListener('click', handleQuiz);

// 页面加载后启动烟花和祝福语动画
window.onload = () => {
  displayMessage();
};
