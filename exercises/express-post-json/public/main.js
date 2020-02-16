
const $button = $('#submit');
$button.on('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  const name =   $('#name').val();
  const course = $('#course').val();
  const grade =  $('#grade').val();
  let data = { name, course, grade };
  data = JSON.stringify(data);

  const ajaxOptions = {
    url: '/api/grades',
    method: 'POST',
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  $.ajax(ajaxOptions);
}


