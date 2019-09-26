// ALLER VERS UNE ANCRE
function go_ancre(ancre){
	if($(ancre).length != 0) $('html, body').animate({scrollTop:$(ancre).offset().top}, 'normal');
}

function falseRadioCheckbox(){
	// FAUX RADIO ET CHECKBOX
	$('label.checkbox, label.radio').on('click', function (e){
		e.preventDefault();
		if(!$(this).hasClass('disabled')){
			var input = $(this).find('input');
			if(input.prop('checked') && !$(this).hasClass('radio')){
				input.prop('checked', false);
				$(this).removeClass('active');
			}
			else{
				input.prop('checked', true);
				$(this).addClass('active');
				if($(this).hasClass('radio')) $('label.radio input[name='+input.attr('name')+']').parent().not(this).removeClass('active');
			}
		}
	}).each(function (){
		var input = $(this).find('input');
		if(input.prop('checked')) $(this).addClass('active');
		else $(this).removeClass('active');
		
		input.hide();
		if(input.prop('disabled')) $(this).addClass('disabled');
	});
}

$(document).ready(function(){
	$('select').mouseleave(function(event){
		event.stopPropagation();
	});

	if(typeof console === 'undefined'){
		console = { log: function() {} };
	}

	$('input, textarea').placeholder();
	falseRadioCheckbox();
});