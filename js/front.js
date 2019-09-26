// GESTION FULL PAGE
function scrollResponsive(){
	if(document.body.clientWidth < 500 || window.outerHeight < 700){
		$('.page_intro').removeClass('anim_intro');
		var scrollWindow = $(window).scrollTop();
		var windowHeight = $(window).outerHeight(true);

		if(scrollWindow > $('.page_visuel').height()){
			var laclasse = 'couleur';
			if($(".marque_fermes").length != 0 && scrollWindow >= $('.marque_fermes').offset().top && scrollWindow <= $('.marque_savoir_faire').offset().top){
				if($('body').hasClass('couleur')) $('body').removeClass('couleur');
				laclasse = 'blanc';
			}
			if(!$('body').hasClass(laclasse)) $('body').addClass(laclasse);
			
			if(!$('body').hasClass('noburger')) $('body').addClass('noburger');
		}
		else{
			if($('body').hasClass('couleur')) $('body').removeClass('couleur');
			if($('body').hasClass('noburger')) $('body').removeClass('noburger');
		}
		
		if(scrollWindow > 10){
			if(!$('body > .back_top').hasClass('couleur')) $('body > .back_top').addClass('couleur');
			if(!$('body > .back_top').hasClass('aff')) $('body > .back_top').addClass('aff');
		}
		else{
			if($('body > .back_top').hasClass('couleur')) $('body > .back_top').removeClass('couleur');
			if($('body > .back_top').hasClass('aff')) $('body > .back_top').removeClass('aff');
		}

	}
}


//POURCENTAGE DU SCROLL
function percentScroll(elt, scrollTop) {

    if(elt == 'body'){
        var scrollTop = document.body.scrollTop,
        scrollHeight = document.body.scrollHeight;   
    
        var scrollPercent = (scrollTop / scrollHeight) * 200;
    }else{
        // var scrollTop = document.body.scrollTop,
        scrollHeight = document.body.scrollHeight;     
        var windowHeight = document.body.offsetHeight;
    	
        var scrollPercent = (scrollTop / windowHeight) * 70 + 10;
    }   

    console.log('scrollTop : '+scrollTop);
    console.log('windowHeight : '+windowHeight);
    return scrollPercent
}


function fullPage(){
	if(document.body.clientWidth > 580 && window.outerHeight > 650 && document.getElementsByClassName('legal').length == 0){	
		if(window.outerHeight > 650 ){
			$('.section.hidden').remove();

			$('#contenu').fullpage({
				scrollBar: true,
				responsive: 580,
				navigation: true,
				afterLoad: function(anchorLink, index){
		            
			    },
				onLeave: function(index, nextIndex, direction){
					if(index > 2){
						$('.back_top').css('opacity','1');
						$('body').addClass('couleur');
						$('body').addClass('noburger');
					}else{
						if(direction != 'down'){
							$('.back_top').css('opacity','0');
							$('body').removeClass('couleur');
							$('body').removeClass('noburger');
						}else{
							$('.back_top').css('opacity','1');
							$('body').addClass('couleur');
							$('body').addClass('noburger');
						}
					}


					if(index == 1 || index == 2 || index == 3){
						$('.page_intro').removeClass('anim_intro');
					}

					if(document.getElementsByClassName('marque_fermes').length > 0){
						if(index == 5 && direction == 'up' || index == 3 && direction == 'down'){
							$('body').removeClass('couleur');
						}
					}
					
				},
			});
		}else{
			if(document.getElementsByClassName('legal').length == 0){
				$('.section').css('height', 'auto');
				$('.section:not(.footer_section)').css('margin-bottom', '200px');
			}
		}
	}else{
		if(document.getElementsByClassName('legal').length == 0){
			$('.section').css('height', 'auto');
		}
		if(document.body.clientWidth > 500 ){
			$('.section:not(.footer_section)').css('margin-bottom', '200px');
		}
	}
}

//AJOUTE UN DELAY TRANSITION A CHAQUE ELEMENT
function transitionDelay(elements, tps, base) {
    var things = base;
    for (var j = 0; j < elements.length; j++) {
        things += tps;
        elements[j].style.transitionDelay = things + "s";
    }
}


function animParagraphe(element){
	var text = element.text();
	var newText = '<span class="animp">';

	// console.log(text);
	// text.split(' ').join('+');
	text = text.replace(new RegExp(' ', 'gi'), '</span> <span class="animp">');
	newText += text + "</span>";

	element.html(newText);
	transitionDelay(document.getElementsByClassName('animp'), 0.045, 0.2);
}

function heightVisuels(){
	var windowHeight = $(window).outerHeight(true);

	$("#contenu .page_visuel").each(function(){
		$(this).css('height', windowHeight+'px');
		$(this).find('img').removeClass('h100');
		if($(this).find('img').height() < windowHeight && !$(this).find('img').hasClass('h100')) $(this).find('img').addClass('h100');
		$(this).find('img').css('margin-left', '-'+(($(this).find('img').width()-$(window).width())/2)+'px');
	});
	
	if($(".marque_fermes").length != 0){
		$('.marque_fermes').css('height', windowHeight+'px');

		$(".marque_fermes .visuels img").each(function(){
			$(this).removeClass('h100');
			if($(this).height() < windowHeight && !$(this).hasClass('h100')) $(this).addClass('h100');
		});
	}
}

// INDEX - ACTU
function heightActuIndex(){
	var widthImg = 0;
	$('.index_actu .liste .col .img img').each(function(){
		var width = $(this).width();
		if(width > widthImg) widthImg = width;
	});
	
	if(widthImg > 0) $('.index_actu .liste .col .img').css('height', widthImg+'px');
	
	var heightTitre = 0;
	$('.index_actu .liste .col h4').each(function(){
		var height = $(this).outerHeight();
		if(height > heightTitre) heightTitre = height;
	});
	
	if(heightTitre > 0) $('.index_actu .liste .col h4').css('height', heightTitre+'px');
}

// POSITION TITRE PAGE VISUEL
function heightTxtPageVisuel(){
	var height = $('.page_visuel .txt h1').height();
	var miheight = Math.round(height/2);
	$('.page_visuel .txt').css('top', '50%');	
	$('.page_visuel .txt').css('margin-top', '-'+miheight+'px');	
}

// TIMELINE HISTOIRE
function heightTimeline(){
	if($(".marque_histoire").length != 0){
		var heightDateTimeline = 0;
		$('.marque_histoire #timeline .dates .valeur .date').each(function(){
			var height = $(this).outerHeight();
			if(height > heightDateTimeline) heightDateTimeline = height;
		});
		
		if(heightDateTimeline > 0){
			$('.marque_histoire #timeline .dates .valeur .date').css('height', heightDateTimeline+'px');
			$('.marque_histoire #timeline .dates .valeur .date').css('line-height', heightDateTimeline+'px');
			$('.marque_histoire #timeline .ligne').css('top', (heightDateTimeline-7)+'px');
		}
	}
}

function timelineHistoire_init(){
	if($(".marque_histoire").length != 0){
		var scrollWindow = $(window).scrollTop();
		if(scrollWindow >= $('.marque_histoire').offset().top && !$('.marque_histoire').hasClass('init')){
			$('.marque_histoire').addClass('init');
			timelineHistoire(0, true, false);
		}
	}
}

function timelineHistoire(index, init, bouge){
	if($(".marque_histoire").length != 0){
		var dateActive = $('.marque_histoire #timeline .dates .valeur:eq('+index+')');
		if(bouge){
			var leftbaseTimeline = $('.marque_histoire > .txt').offset().left;
			var widthFirsts = 0;
			
			var encore = true;
			$('.marque_histoire #timeline .dates .valeur').each(function(){
				if($(this).index() == index) encore = false;
				if(encore) widthFirsts = widthFirsts+$(this).outerWidth();
			});
			
			$('.marque_histoire #timeline .dates').animate({left: (leftbaseTimeline-widthFirsts)+'px'}, 'normal', function(){
				dateActive.removeClass('off');
				dateActive.animate({opacity: 1}, 100);
			});
		}
		else if((!init && dateActive.hasClass('off')) || init){
			if(init){
				$('.marque_histoire #timeline .dates .valeur').not(dateActive).addClass('off');
				timelineHistoire(index, false, true);
			}
			else{
				$('.marque_histoire #timeline .dates .valeur').not('.off').animate({opacity: 0.3}, 100, function(){
					$(this).addClass('off');
					setTimeout("timelineHistoire("+index+", false, true)", 10);
				});
			}
		}
	}
}

// MARQUE - DIAPO PROCESS
function diapoProcess(){
	if($(".marque_process").length != 0){
		var heightImg = 0;
		$('.marque_process .slider ul.img li img').each(function(){
			var height = $(this).height();
			if(height > heightImg) heightImg = height;
		});
		
		var heightPager = $('.marque_process .slider ul.pager').outerHeight(true);
		
		if(heightImg > 0 && heightImg > heightPager){
			$('.marque_process .slider ul.img').css('height', heightImg+'px');
			$('.marque_process .slider ul.pager').css('height', heightImg+'px');
		}
		else $('.marque_process .slider ul.img').css('height', heightPager+'px');
	}
}

function diapoProcessMove(index){
	clearTimeout(diapoProcessVal);
	
	var oldindex = $('.marque_process .slider .pager li.active').index();
	if(index != 'next') var newindex = index;
	else{
		var newindex = oldindex+1;
		if($('.marque_process .slider .img li').length == newindex) newindex = 0;
	}

	if(oldindex != newindex){
		$('.marque_process .slider .img li:eq('+oldindex+')').removeClass('active');
		$('.marque_process .slider .pager li:eq('+oldindex+')').removeClass('active');
		$('.marque_process .slider .img li:eq('+oldindex+')').fadeOut('normal');

		$('.marque_process .slider .img li:eq('+newindex+')').addClass('active');
		$('.marque_process .slider .pager li:eq('+newindex+')').addClass('active');
		$('.marque_process .slider .img li:eq('+newindex+')').fadeIn('normal');
	}
	diapoProcessVal = setTimeout("diapoProcessMove('next')", 4000);
}


// INITILIASE LE JS
function init_allJS(){
	// if(window.location.hash) scrollAncre();

	// GESTION FULL PAGE
	fullPage();

	// GESTION FULL PAGE
	// if($('.page_visuel').length != 0){
	// 	setTimeout("heightVisuels()", 10);
		
	// 	$(window).on('resize', function() {
	// 		heightVisuels();
	// 	});
	// }

	// if($('.page_visuel .txt h1').length != 0){
	// 	heightTxtPageVisuel();
		
	// 	$(window).on('resize', function() {
	// 		heightTxtPageVisuel();
	// 	});
	// }

	$('.menu_hover .liens').click(function(){
		$('.affmenu').removeClass('affmenu');
	})

	// INDEX - ACTU
	if($(".index_actu").length != 0 && !$('index_actu').hasClass('hidden')){
		setTimeout("heightActuIndex()", 200);
		
		$(window).on('resize', function() {
			setTimeout("heightActuIndex()", 200);
		});
	}
	
	// MARQUE - TIMELINE HISTOIRE
	if($(".marque_histoire").length != 0){
		setTimeout("heightTimeline()", 200);
		$(window).on('resize', function() {
			heightTimeline();
		});
		
		setTimeout("timelineHistoire_init()", 300);
		$(window).scroll(function(){
			if(!$('.marque_histoire').hasClass('init')) setTimeout("timelineHistoire_init()", 300);
		});
		
		$(window).on('resize', function() {
			timelineHistoire($('.marque_histoire #timeline .valeur').not('.off').index(), true, false);
		});
	}
	
	// MARQUE - FERMES
	if($(".marque_fermes").length != 0 && navigator.userAgent.match(/(iPhone)|(iPod)|(android)/i) == null){
		$('.marque_fermes .visuels img + img').fadeOut('fast');
		$('.marque_fermes .liste_fermes > div + div').fadeOut('fast');
		$('.marque_fermes .carte > span:eq(0)').addClass('active');
	}
	
	// MARQUE - DIAPO PROCESS
	if($(".marque_process").length != 0){
		$('.marque_process .slider .img li:eq(0)').addClass('active');
		$('.marque_process .slider .img li').not($('.marque_process .slider .img li:eq(0)')).fadeOut();
		$('.marque_process .slider .pager li:eq(0)').addClass('active');

		setTimeout("diapoProcess()", 50);
		$(window).on('resize', function() {
			diapoProcess();
		});
		diapoProcessVal = setTimeout("diapoProcessMove('next')", 4000);
	}
	
	// CONTACT
	$('.contact_form form .alerte').hide();
}

var timerAjaxProduit = 0;
var timerLigneScroll = true;
var HistoryState;
var diapoProcessVal;	

$(document).ready(function(){
	// INITIALISE JS À CHAQUE CHARGEMENT
	init_allJS();

	// LANGUES
	$('body header .langues div').hide();

	$('body').on('click', 'header .langues', function(){
		$('body header .langues div').fadeToggle();
	});
	
	// MENU HOVER
	$('body').on('click', 'header nav .burger', function(){
		if(!$('body').hasClass('affmenu')) $('body').addClass('affmenu');
	});
	
	$('body').on('click', '.menu_hover .close', function(){
		if($('body').hasClass('affmenu')) $('body').removeClass('affmenu');
	});
	
	// RETOUR HAUT DE PAGE
	$('body').on('click', '.back_top', function(){
		$('html, body').animate({scrollTop:0}, 'normal');
	});
	
	// MARQUE - TIMELINE HISTOIRE
	$('body').on('click', '.marque_histoire #timeline .valeur .date', function(){
		timelineHistoire($(this).parent().index(), false, false);
	});
	
	// MARQUE - FERMES
	$('body').on('click', '.marque_fermes .carte > span', function(){
		if(!$(this).hasClass('active')){
			var oldindex = $('.marque_fermes .carte > span.active').index();
			var newindex = $(this).index();

			$('.marque_fermes .visuels img:eq('+oldindex+')').fadeOut('slow');
			$('.marque_fermes .visuels img:eq('+newindex+')').fadeIn('slow');

			$('.marque_fermes .liste_fermes > div:eq('+oldindex+')').fadeOut('fast', function(){
				$('.marque_fermes .liste_fermes > div:eq('+newindex+')').fadeIn('fast');
			});
			
			$('.marque_fermes .carte > span:eq('+oldindex+')').removeClass('active');
			$(this).addClass('active');
			$('html, body').animate({scrollTop:$(".marque_fermes").offset().top}, 'fast');
		}
	});
	
	// MARQUE - DIAPO PROCESS
	$('body').on('click', '.marque_process .slider .pager li', function(){
		clearTimeout(diapoProcessVal);
		diapoProcessMove($(this).index());
	});
	
	// CONTACT
	$('body').on('click', '.contact_form form .bt button[type=submit]', function(e){
		e.preventDefault();

		$.ajax({
			url: 'contact.php',
			type: 'POST',
			data:{
				send: 'ok',
				lang: $('body').data('lang'),
				prenom: $('.contact_form form input[name=prenom]').val(),
				nom: $('.contact_form form input[name=nom]').val(),
				email: $('.contact_form form input[name=email]').val(),
				tel: $('.contact_form form input[name=tel]').val(),
				objet: $('.contact_form form input[name=objet]').val(),
				message: $('.contact_form form textarea[name=message]').val()
			},
			success:function(data){
				$('html, body').animate({scrollTop:$(".contact_form").offset().top}, 'fast');

				var result = data.split('#');
				$('.contact_form form .alerte').html(result[1]).slideDown();
				
				if(result[0] == '1'){
					$('.contact_form form .alerte').delay(3000).slideUp();
					$('.contact_form form').children('input[type=text], textarea').each(function(){
						$(this).delay(500).fadeOut('slow', function(){
							$(this).val('');
							$(this).fadeIn('slow');
						})
					});
				}
			}
		});
	});
	
	$('body').on('click', '.fake_selected', function(e){
		$('.fake_selector').addClass('open_selector');
		e.stopPropagation();
	});

	$(window).click(function() {
		$('.fake_selector').removeClass('open_selector');
	});

	$('body').on('click', '.fake_list > span', function(){
		$('.fake_selected').text($(this).text());
		$('input[name="receiver"]').val($(this).data('value'));
		$('.fake_selector').removeClass('open_selector');
	});

	if($('#slider li').length > 1){
		$('#slider').bxSlider({
			speed:2000,
			pager:false,
			adaptiveHeight: true,
			nextSelector: '#slider-next',
			prevSelector: '#slider-prev',
			nextText: '&nbsp;',
			prevText: '&nbsp;'
		});
	}
	else{
		$('.producteurs > article .bottom .controls_slider').hide();
		$('.temoignages > article .controls_slider').hide();
	}
	
	animParagraphe($('.page_intro .txt_intro'));
	
	scrollResponsive();

	$(window).scroll(function(){
		// scrollResponsive();
		scrollResponsive();
	});

	$( window ).resize(function() {
		if(navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) == null){
			location.reload();
		}
		scrollResponsive();
		init_allJS();
	})

	// SCROLL VERS UNE ANCRE
	$('a[href^="#"]').click(function(){  
	     var the_id = $(this).attr("href");  
	     $('html, body').animate({  
	         scrollTop: ($(the_id).offset().top)
	     }, 'slow');  
	   return false;  
	});


	
	// FOOTER LIENS GROUP
	// $('body footer .footer .group > img').each(function(){
		// if($(this).data('url')) $(this).css('cursor', 'pointer');

		// $(this).on('click', function(){
			// window.open($(this).data('url'), '_blank');
		// });
	// });
});