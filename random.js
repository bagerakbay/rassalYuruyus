$(function(){
    // Populate select inputs
    populateSelect('#mediums', lists.mediums);
    populateSelect('#verbs', lists.verbs);
    populateSelect('#subjects', lists.subjects);

    // Open list chooser
    $('.js-chooseLists').click(function(e){
        if(!($('.js-wrapper--listChooser').hasClass('open'))){
            $('.js-wrapper--listChooser').addClass('open');
            $(this).text('Hide lists');
        } else {
            $('.js-wrapper--listChooser').removeClass('open');
            $(this).text('Choose lists');
        }

        e.preventDefault();
    });
});

function randomise() {

	$('.random').animate({
		opacity: 0,
	}, 0, function() {
	});

	document.querySelector('#array1').innerHTML = '';/*getRandomArrayItem(lists['mediums'][$('#mediums').val()]['data']);*/
	document.querySelector('#array2').innerHTML = '';/*getRandomArrayItem(lists['verbs'][$('#verbs').val()]['data']);*/
	document.querySelector('#array3').innerHTML = getRandomArrayItem(lists['subjects'][$('#subjects').val()]['data']);

	$('.random').animate({
		opacity: 1,
	}, 500, function() {
	});

};

/* Helper functions
-------------------------------- */
function getRandomArrayItem(theArray){
    return theArray[Math.floor(Math.random() * theArray.length)];
}

function populateSelect(elementId, listOfLists){
    $.each(listOfLists, function(i, val){
        $(elementId).append('<option value="' + i + '">' + val.name + '</option>');
    });
}



