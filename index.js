const TestimonialCarousel = {
    container: null,
    quotes: null,
    init: function(){
        this.container = document.querySelector('.quote-container');
        this.quotes = Array.from(document.querySelectorAll('div.quote'));
        this.quotes.forEach((quote, i) => {
            quote.style.order = i + 1;
        });
        this.container.addEventListener('transitionend', (e)=>{
            this.updateOrder(this.quotes);
            this.container.classList.toggle('not-transitioning')
            this.container.classList.toggle('transitioning');
            this.applyTimer();
        });
        this.applyTimer();
    },
    updateOrder: function(arr){
        arr.forEach((item, i)=>{
            item.style.order = item.style.order - 1 === 0 ? arr.length : item.style.order - 1;
        })
    },
    applyTimer: function(){
        setTimeout(()=>{
            this.container.classList.toggle('not-transitioning')
            this.container.classList.toggle('transitioning');
        }, 10000);
    }
}

TestimonialCarousel.init();