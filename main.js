'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const text = document.getElementById('text');
  const saveButton = document.getElementById('save');
  const clearButton = document.getElementById('clear');
  const message = document.getElementById('message');

  // メモをローカルストレージから取得
  const loadMemo = () => {
    text.value = localStorage.getItem('memo') || '';
    updateButtonState();
  };

  // メモを保存する
  const saveMemo = () => {
    localStorage.setItem('memo', text.value);
    showMessage('保存しました');
    updateButtonState();
  };

  // メモを削除する
  const clearMemo = () => {
    if (confirm('本当に削除しますか？')) {
      text.value = '';
      localStorage.removeItem('memo');
      updateButtonState();
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

  // ボタンの状態を更新する
  const updateButtonState = () => {
    const isTextEmpty = text.value.trim() === '';
    saveButton.disabled = isTextEmpty;
    clearButton.disabled = isTextEmpty;
  };

  // イベントリスナーを設定
  saveButton.addEventListener('click', saveMemo);
  clearButton.addEventListener('click', clearMemo);
  text.addEventListener('input', updateButtonState);

  // 初期化
  loadMemo();
});
