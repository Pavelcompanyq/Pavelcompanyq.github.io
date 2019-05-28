window.onload = function() {
    slaid();
}

function slaid() {
    var titletext = document.getElementById('newstitletext'),
        ttstyle = titletext.style,
        text = document.getElementById('newstext'),
        tstyle = text.style,
        link = document.getElementById('pavelcompany'),
        lstyle = link.style,
        img = document.getElementById('newsimg'),
        imgcontainer = document.getElementById('newsimgcontainer'),
        i = 0;
    var timerid = setInterval(function () {
        if(i == 0){												//////////
            ttstyle.transition = '0.5s';                          // Переход заголовка
            ttstyle.color = 'rgba(00,00,00,0)';
            tstyle.transition = '0.5s';                            //Переход основного текста
            tstyle.color = 'rgba(00,00,00,0)';
            lstyle.transition = '0.5s';                            //Переход ссылки "PavelCompany"
            lstyle.color = 'rgba(00,00,00,0)';
            var timeout = setTimeout(function () {
                titletext.innerHTML = 'D.F.T.R.';
                ttstyle.transition = '';
                ttstyle.color = '';
                tstyle.transition = '';
                tstyle.color = '';
                lstyle.transition = '';
                lstyle.color = '';
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
            tstyle.transition = '0.5s';                            //Переход основного текста
            tstyle.color = 'rgba(00,00,00,0)';
            lstyle.transition = '0.5s';                            //Переход ссылки "PavelCompany"
            lstyle.color = 'rgba(00,00,00,0)';
            var timeout = setTimeout(function () {
                titletext.innerHTML = 'QERCL';
                ttstyle.transition = '';
                ttstyle.color = '';
                tstyle.transition = '';
                tstyle.color = '';
                lstyle.transition = '';
                lstyle.color = '';
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
            tstyle.transition = '0.5s';                            //Переход основного текста
            tstyle.color = 'rgba(00,00,00,0)';
            lstyle.transition = '0.5s';                            //Переход ссылки "PavelCompany"
            lstyle.color = 'rgba(00,00,00,0)';
            var timeout = setTimeout(function () {
                titletext.innerHTML = 'SCREEN';
                ttstyle.transition = '';
                ttstyle.color = '';
				tstyle.transition = '';
                tstyle.color = '';
                lstyle.transition = '';
                lstyle.color = '';
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