window.onload = function() {
    var cards = document.getElementsByClassName('card');
    var currentOpen = 0, len = cards.length;

    var next = document.getElementsByClassName('next');
    var prev = document.getElementsByClassName('prev');

    for(i = 0; i < len; i++)  {
        if(i != currentOpen) {
            cards[i].classList.add('hide');
        } else {
            cards[i].classList.add('open')
        }
    }


    for(n of next) {
        n.addEventListener('click', () => {
            cards[currentOpen].classList.remove('open');
            cards[currentOpen].classList.add('hide');
    
            currentOpen = (currentOpen + 1) % len;
    
            cards[currentOpen].classList.add('open');
            cards[currentOpen].classList.remove('hide');
        }) 
    }

    for(p of prev) {
        p.addEventListener('click', () => {
            cards[currentOpen].classList.remove('open');
            cards[currentOpen].classList.add('hide');
    
            currentOpen = (currentOpen - 1 + len) % len;
    
            cards[currentOpen].classList.add('open');
            cards[currentOpen].classList.remove('hide');
        }) 
    }
}