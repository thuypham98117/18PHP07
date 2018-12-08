var a, b, c, d;

function Max(a, b, c, d) {
	if(a == b || a == c || a == d) {
		document.write("Khong co so lon nhat");
	}
	else if(a > b & a > c & a > d) {
		document.write("So lon nhat: " + a);
	}
	else if (b > c & b > d) {
		document.write("So lon nhat: " + b);
	}
	else if(c > d) {
		document.write("So  lo nhat: " + c);
	}
	else document.write("So lon nhat: " + c);
	document.write('<br>');
}
Max(20, 10, 15, 20);

function Min(a, b, c, d) {
	if(b == a || b == c || b == d) {
		document.write("Khong co so nho nhat");
	}
	else if(a < b & a < c & a < d) {
		document.write("So nho nhat: " + a);
	}
	else if(b < c & b < d) {
		document.write("So nho nhat: " + b);
	}
	else if (c < d) {
		document.write("So nho nhat: " + c)
	}
	else document.write("So nho nhat: " + d);
}
Min(2, 5, 7, 9);
