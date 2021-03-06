var playing = '❌';
var lastPlay = {};

document.getElementById('field').onclick = function (event) {
	if (event.target.tagName == 'TD' && !event.target.textContent.trim()) {
		event.target.textContent = playing;
		lastPlay.className = '';
		lastPlay = event.target;
		lastPlay.className = 'lastPlay';
		if (find5(lastPlay, 0, 1) || find5(lastPlay, 1, 1) || find5(lastPlay, 1, 0) || find5(lastPlay, 1, -1)) {
			document.getElementById('field').onclick = function () {};
		}
		playing = (playing == '❌' ? '◯' : '❌');
	}
};

function find5(td, dx, dy) {
	if (findLength(td, dx, dy) + 1 + findLength(td, -dx, -dy) >= 5) {
		findLength(td, dx, dy, true);
		findLength(td, -dx, -dy, true);
		return true;
	}
}

function findLength(td, dx, dy, mark) {
	var tr = td.parentNode;
	var rows = tr.parentNode.rows;
	var x = indexOf(tr.cells, td) + dx;
	var y = indexOf(rows, tr) + dy;
	var result = 0;
	while (rows[y] && rows[y].cells[x] && rows[y].cells[x].textContent == td.textContent) {
		if (mark) {
			rows[y].cells[x].className = 'lastPlay';
		}
		result++;
		x += dx;
		y += dy;
	}
	return result;
}

function indexOf(collection, item) {
	for (var i = 0; i < collection.length; i++) {
		if (collection[i] == item) {
			return i;
		}
	}
	return -1;
}
