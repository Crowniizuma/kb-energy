$(function(){
    //creat list of images using for slideshow
    // let picNum = 7;
    // for (let i = 1; i <= picNum; i++) {
    //     let li = document.createElement('li');
    //     $('.home-slide-img').append(li);
    //     li.classList.add('pic-' + i);
    //     li.innerHTML = `
    //     <div class="pic-${i}"></div>
    //     `;
    // }

    //create slideshow
    $(window).on('load', function () {
        
        //text revealing
        let text = $('.text');
        text.addClass('load');
        
        //slideShow

        const circle = $('.progress-ring-circle');
        const radius = circle[0].r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        circle[0].style.strokeDasharray = `${circumference} ${circumference}`;
        
        slideShow();
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        async function slideShow () {
            let loopDuration = 6000;
            let ul = $('.home-slide-img');
            while (true) {
                let liFirst = ul.children('li').eq(0);
                liFirst.removeClass('active');
                liFirst.remove();
                liFirst.appendTo(ul);
                for (let i = 0; i < 30; i++) {
                    await sleep(500/30);
                    circle[0].style.strokeDashoffset -= circumference / 30;
                }
                await sleep(100);
                liFirst.addClass('active');
                circle[0].style.strokeDashoffset = circumference;
                for (let i = 0; i < 360; i++) {
                    await sleep(loopDuration/360);
                    circle[0].style.strokeDashoffset -= circumference / 360;
                }
            }

        }

        

        //hover
        let ul = $('.info-container');
        let li = ul.children('li');
        li.each(function() {
            
            let arrowHover = $(this).find('.more-info');
            let imgHover = $(this).find('.img-hover');
            let whiteArrow = arrowHover.children('span');

            arrowHover.hover(function () {
                imgHover.addClass('hover-effect');
            },
            function() {
                imgHover.removeClass('hover-effect');
            }); 

            imgHover.hover(function () {
                arrowHover.addClass('hover-effect-2');
                whiteArrow.addClass('arrow-effect');
            },
            function() {
                arrowHover.removeClass('hover-effect-2');
                whiteArrow.removeClass('arrow-effect');
            });        
        })

        //scroll to top
        let scroll = $('.scroll');
        scroll.click(function () {
            let scrollDuration = 1500;
            $('html,body').animate({scrollTop : 0}, scrollDuration);
            return false;
        })
        
        //hamburger menu toggle
        $('#menu').click(function() {
            $('.nav-description').toggleClass('open');
            $('.nav-list').toggleClass('nav-list-open');
        })

        

        


    });
});
    



