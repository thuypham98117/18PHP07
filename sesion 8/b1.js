function showPlayer(player) {
	switch(player) {
		case 'vd' :
			document.getElementById('name').innerHTML = "Van Duc";
			document.getElementById('age').innerHTML = "23";
			document.getElementById('img_show').src = 'duc_cot.jpg';
			break;
		case 'dh' :
			document.getElementById('name').innerHTML = "Duc Huy";
			document.getElementById('age').innerHTML = "23";
			document.getElementById('img_show').src = 'huy.jpg';
			break;
		case 'xm' :
			document.getElementById('name').innerHTML = "Xuan Manh";
			document.getElementById('age').innerHTML = "23";
			document.getElementById('img_show').src = 'manh.jpg';
			break;
		case 'dt' :
			document.getElementById('name').innerHTML = "Dinh Trong";
			document.getElementById('age').innerHTML = "23";
			document.getElementById('img_show').src = 'trong.jpg';
			break;
		default:
			break;
	}
}