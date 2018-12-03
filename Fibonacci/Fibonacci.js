var a, b, fibo;
a = 0;
b = 1;
fibo = b;
for( var i = 1; i < 10; i++) {
	document.write(fibo + "   ");
	fibo = a + b;
	a = b;
	b = fibo;
}