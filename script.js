var cardapioBtn = document.getElementById('cardapioBtn');
        var navbar = document.querySelector('.navbar');

        cardapioBtn.addEventListener('click', function() {
            if (navbar.style.display === 'none') {
                navbar.style.display = 'block';
            } else {
                navbar.style.display = 'none';
            }
        });