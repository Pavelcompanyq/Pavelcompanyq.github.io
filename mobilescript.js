window.onload = function() {
    slaid();
}

function slaid() {
    var titletext = document.getElementById('newstitletext'),
        ttstyle = titletext.style,
        img = document.getElementById('newsimg'),
        imgcontainer = document.getElementById('newsimgcontainer'),
        i = 0;
    var timerid = setInterval(function () {
        if(i == 0){												//////////
            ttstyle.transition = '0.5s';                          // Переход заголовка
            ttstyle.color = 'rgba(00,00,00,0)';
            var timeout = setTimeout(function () {
                titletext.innerHTML = 'D.F.T.R.';
                ttstyle.transition = '';
                ttstyle.color = '';
            }, 1700);
            imgcontainer.style.transition = '0.5s';
            imgcontainer.style.background = '#020202';
            var timeout = setTimeout(function () {
                img.removeAttribute('src');
                img.setAttribute('src','images/pircle.jpg');
                imgcontainer.style.transition = '';
                imgcontainer.style.background = '';
            }, 1000);
            i++;
        } else if(i == 1){										//////////
            ttstyle.transition = '0.5s';                          // Переход заголовка
            ttstyle.color = '#020202';
            var timeout = setTimeout(function () {
                titletext.innerHTML = 'QERCL';
                ttstyle.transition = '';
                ttstyle.color = '';
            }, 1700);
            imgcontainer.style.transition = '0.5s';
            imgcontainer.style.background = '#020202';
            var timeout = setTimeout(function () {
                img.removeAttribute('src');
                img.setAttribute('src','images/qircle.jpg');
                imgcontainer.style.transition = '';
                imgcontainer.style.background = '';
            }, 1000);
            i++;
        } else if(i == 2){										//////////
            ttstyle.transition = '0.5s';                          // Переход заголовка
            ttstyle.color = '#020202';
            var timeout = setTimeout(function () {
                titletext.innerHTML = 'SCREEN';
                ttstyle.transition = '';
                ttstyle.color = '';
            }, 1700);
            imgcontainer.style.transition = '0.5s';
            imgcontainer.style.background = '#020202';
            var timeout = setTimeout(function () {
                img.removeAttribute('src');
                img.setAttribute('src','images/screen.png');
                imgcontainer.style.transition = '';
                imgcontainer.style.background = '';
            }, 1000);
            i = 0;
        }
    }, 10000);
}

function mapanim() {
    var mapan = document.getElementById('map'),
        hata = document.getElementsByClassName('hata');
    if(mapan.style.width == 0) {
        mapan.style.width = '100%';
        var timeout = setTimeout(function(){
            for (var i = 0; i < 5; i++) {
                hata[i].style.display = 'block';
            }
        }, 300);
    } else{
        mapan.style.width = '';
        for(var i = 0;i < 5;i++) {
            hata[i].style.display = 'none';
        }
    }
}