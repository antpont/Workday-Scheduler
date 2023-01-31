

var dayjs = dayjs()
//Fromatting and showing the current date using dayjs
$('#currentDay').text(dayjs.format("dddd, MM DD, YYYY"))

var currentHour = dayjs.hour()
var timeBlock = $('.description')

timeBlock.each(function () {
  var id = $(this).attr('id')
//Setting the blocks to be able to tell if it is in the past, present, or future
  if (currentHour > id) {
    $(this).addClass('past')
  } else if (currentHour == id) {
    $(this).removeClass('past')
    $(this).addClass('present')
  } else {
    $(this).removeClass('past')
    $(this).removeClass('present')
    $(this).addClass('future')
  }
})
//When you click the button your event will show and save to local storage
$('.btn').on("click", function() {
  var key = $(this).attr('id')
  var task = $(this).siblings('textarea').val()
  console.log(key, task)
  localStorage.setItem(key, task)
  showTasks()
})

function showTasks() {
  for (var i = 9; i < 18; i++) {
    var currentTask = localStorage.getItem(i)
    console.log(i, currentTask)
    $('#'+ i).text(currentTask)
  }
}

showTasks()