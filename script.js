let check = function () {
  if (
    document.getElementById('password').value ==
    document.getElementById('confirm-password').value
  ) {
    document.getElementById('message').innerHTML = ''
    document.getElementById('password').style.border = ''
    document.getElementById('confirm-password').style.border = ''
  } else {
    document.getElementById('message').style.color = 'red'
    document.getElementById('message').innerHTML = '* Passwords do not match'
    document.getElementById('password').style.border = '1px solid red'
    document.getElementById('confirm-password').style.border = '1px solid red'
  }
}
