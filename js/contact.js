$(function() {
	  $('nav ul').slicknav({prependTo: 'header'});
    $('nav ul').show()
    $('nav ul').toggle();
    return false;
	});

function html5_storage_support() {
	  try {
		return 'localStorage' in window && window['localStorage'] !== null;
	  } catch (e) {
		return false;
	  }
	}
	function saveit() {
	  if (html5_storage_support()) {
		var name = document.getElementById("name").value;
		var phone = document.getElementById("phone").value;
		var email = document.getElementById("email").value;
		var website = document.getElementById("website").value;
		var DOB = document.getElementById("DOB").value;
		localStorage.setItem('name',name);
		localStorage.setItem('phone',phone);
		localStorage.setItem('email',email);
		localStorage.setItem('website',website);
		localStorage.setItem('DOB',DOB);
	  }
	}

	function restoreit() {
	  if (html5_storage_support()) {
		document.getElementById('name').value = localStorage.getItem('name');
		document.getElementById('phone').value = localStorage.getItem('phone');
		document.getElementById('email').value = localStorage.getItem('email');
		document.getElementById('website').value = localStorage.getItem('website');
		document.getElementById('DOB').value = localStorage.getItem('DOB');
	  }
	}
