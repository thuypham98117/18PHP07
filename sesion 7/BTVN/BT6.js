var n;
function OddEvenChecking(n) {
    if (n % 2 == 0) {
        document.write(n + " la so chan <br>");
    }
    else document.write(n + " la so le <br>");   
}

function FiboChecking(n) {
    var i = 1, j = 1, fibo = i + j;
    if(fibo <= 100) {
        if (n == 1 || n == 2) {
            document.write(n + " la mot so fibonacci trong day 1-100");
        }
        while (fibo < n) {
            i = j;
            j = fibo;
            fibo = (i + j);
        }
        if (fibo == n) {
            document.write(n + " la mot so fibonacci trong day 1-100");
        }
        else document.write(n + " la mot so fibonacci trong day 1-100");
            document.write('<br>')
    }
}
function SquareNumberChecking(n) {
    var i = 1;
    if(n < 0) {
        document.write("Khong la so chinh phuong")
    }
    else {
        while(i * i < n) {
            i++;
        }
        if (i * i == n) 
        document.write(n + " la so chinh phuong");
        else document.write(n + " khong la so chinh phuong");
    }    
}
OddEvenChecking(100);
FiboChecking(13);
SquareNumberChecking(-2);