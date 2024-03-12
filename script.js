//var textInput = document.getElementById('textarea');
//var saveButton = document.getElementById('button');
//var textInputNine = document.getElementById('nineMorning');
//var saveButtonNine = document.getElementById ("nineOClock");
// button.getElementById('is only the id of HTML element')
// button.querySelector(' #id or .class ') 
// jQuery: $('<button>')
//function displayText() {
//   const recall = JSON.stringify.localStorage.getItem(textInput);
//};
displayText();
$('.saveBtn').on('click', enterText);
//Give a 'click' listener to turn on for the button area, not only the icon. Then it knows to go to the next function.
function enterText(event) {
    event.preventDefault();  
    //console.log(event);
    //console.log(event.target);
//the event type is 'click' (i.e.Pointer Event), it's target is the class of the button, .saveBtn 
    var icon = $(event.target).attr('class'); //get the class of i instead of button.
    var textArea = $(event.target).siblings('textarea').val();
    var parentID = $(event.target).parent().attr('id');
    if (icon == 'fas fa-save') { //doublecheck to see if one clicked on the icon instead of the button. 
        //this then redirects value to the button.
        textArea = $(event.target).parent().siblings('textarea').val();
        //It then needs to be identified the same as the button, so redirects to it's "grandparent"
        parentID = $(event.target).parent().parent().attr('id');
    }
    //console.log($(event.target).siblings('textarea'));
//2nd div, textarea and button are all siblings (more than 1), so it's finding the value i.e. content in the <textarea>
//Find the ID of the parent of the button, which is <div>
    logText(textArea, parentID);
}
//changed ids in HTML to isolate textareas. If clicked on the icon's class, then textArea is redefined as all the divs
// and parentID would be the body.
//    if (i === 'fas fa-save') {
//        textArea = $(event.target).parent().siblings('textarea').val();
//        parentID = $(event.target).parent().parent().attr('id')
//    }
//    console.log(event.target);
//    console.log(parentID);
//    console.log(textArea);
//    logText(textArea, parentID);
// /** to get multiple lines of comments */}
/** 
 * parameters of new function are whatever is in the textarea, that's within the specific div.
 * trim eliminates spaces before and after content. 
 * If something is typed into the textarea, then the 'click' on the button/icon will save to local storage
 */
function logText(text_Area, parentID) {
    var saveText = text_Area.trim();
    //console.log(saveText);
    if (saveText !== 0) {
        localStorage.setItem(parentID, saveText);
//move onto the next function after it's stored in local storage
        displayText();
    }
}
/**
 * Do the same action for EACH and every individual jQuery class for div (i.e. parentID). 
 * parameters of function to display text is save icon and timeblock, i.e. div class. starting from 9:00AM
 */
function displayText() {
    $('.time-block').each(function (i, timeblock) {
    //Find the same parentID again, in order to avoid finding the same class (so id instead of class)
       // console.log(timeblock)
        var parentID = $(timeblock).attr('id');
    //based on the parentID, find the textarea associated with it, and get it
        var text = localStorage.getItem(parentID);
    //Inqire of the div for the child 'textarea', and assign it's text as a value to the area
    if (text !=0 ) {
        $(timeblock).children('textarea').val(text);
    }
        //console.log(parentID);
    });
    //localStorage.getItem(logText);
    //$('.fas').textContent = "";
};
// save info into <i> within the button