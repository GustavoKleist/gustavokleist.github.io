let storage = localStorage.getItem("numeroBrejas")

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function() {
      console.log('SW registered');
    });
}

$(document).ready(function() {
	if (storage){
		$(".counts").text(storage);
		var count = storage;
	} else {
		var counts = 0;
	}
	$(".btn").click(function() {
		counts += +1;
		if (counts < 10) {
			counts1 = "0" + counts;
		} else {
			counts1 = counts;
		}
		localStorage.setItem("numeroBrejas", counts1);
		$(".counts").text(counts1);
	});

	$(".reset").click(function(e) {
		counts = 0;
		counts1 = "0" + counts;
		$(".counts").text(counts1);
	});
});
