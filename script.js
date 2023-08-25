//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");
  const applyButton = document.getElementById("apply-btn");
  const customText = document.getElementById("custom-text");

  // Load user preferences from cookies
  const savedFontSize = getCookie("font-size");
  const savedFontColor = getCookie("font-color");

  // Apply saved preferences if available
  if (savedFontSize) {
    customText.style.fontSize = savedFontSize + "px";
    fontSizeInput.value = savedFontSize;
  }
  if (savedFontColor) {
    customText.style.color = savedFontColor;
    fontColorInput.value = savedFontColor;
  }

  // Add event listener to Apply button
  applyButton.addEventListener("click", () => {
    const selectedFontSize = fontSizeInput.value;
    const selectedFontColor = fontColorInput.value;

    // Apply user preferences
    customText.style.fontSize = selectedFontSize + "px";
    customText.style.color = selectedFontColor;

    // Save preferences in cookies
    setCookie("font-size", selectedFontSize, 365);
    setCookie("font-color", selectedFontColor, 365);
  });

  // Helper function to set a cookie
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  // Helper function to get a cookie value
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
});