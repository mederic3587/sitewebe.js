window.addEventListener('DOMContentLoaded', () => {
  const ipAddressElement = document.getElementById('ipAddress');
  ipAddressElement.textContent = getIpAddress();

  function getIpAddress() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.ipify.org?format=json', false);
    xhr.send();

    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      return response.ip;
    } else {
      return 'Adresse IP non disponible';
    }
  }
});