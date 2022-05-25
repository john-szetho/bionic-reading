// background.js

let color = '#9E6CDF';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %brpurple', `color: ${color}`);
});