'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const text = document.getElementById('text');
  const saveButton = document.getElementById('save');
  const clearButton = document.getElementById('clear');
  const message = document.getElementById('message');

  // メモをローカルストレージから取得
  const loadMemo = () => {
    text.value = localStorage.getItem('memo') || '';
  };

  // メモを保存する
  const saveMemo = () => {
    localStorage.setItem('memo', text.value);
    showMessage('保存しました');
  };

  // メモを削除する
  const clearMemo = () => {
    if (confirm('本当に削除しますか？')) {
      text.value = '';
      localStorage.removeItem('memo');
    }
  };

  // メッセージを表示する
  const showMessage = (msg) => {
    message.textContent = msg;
    message.classList.add('appear');
    setTimeout(() => {
      message.classList.remove('appear');
    }, 1000);
  };

  // イベントリスナーを設定
  saveButton.addEventListener('click', saveMemo);
  clearButton.addEventListener('click', clearMemo);

  // 初期化
  loadMemo();
});
