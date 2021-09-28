/* Author: 

*/
var i, j ,k ,row =10 ;

function fun(i, r){
    for(j=1; j<=i;j++)
        document.write("* ");
    for(j=1; j<=(r-(2*i));j++)
        document.write("&nbsp; ");
    for(j=1; j<=i;j++)
        document.write("* ");
    document.write("<br>");
}

document.write("<tt>Pattern Program:<br><br>1)<br><br></tt>");

for(i=1; i<=row; i++){
    for(j=1; j<=(row-i); j++)
        document.write(" &nbsp;");
    for(k=1; k<=((2*i)-1); k++){
        if(k % 2 == 0)
            document.write(" A");
        else
            document.write(" *");
    }
    document.write("<br>")
}

document.write("<br><br>2)<br><br>");

for(i=1; i<=row; i++){
    for(j=1; j<=(row-i); j++)
        document.write("&nbsp;&nbsp;");
    for(k=1; k<=((2*i)-1); k++){
        if(i!=row){
            if(k==1 || k==((2*i)-1))
                document.write("*");
            else
                document.write("&nbsp;&nbsp;");
        }
        else
            document.write("* ");
    }
    document.write("<br>")
}

document.write("<br><br>3)<br><br>");

for(i=1; i<=row; i++){
    for(j=1; j<=i; j++)
        document.write(j**i+" ");
    document.write("<br>");
}

document.write("<br><br>4)<br><br>");

for(i=row/2; i>0; i--)
    fun(i, row);
for(i=1; i<=row/2; i++)
    fun(i, row);

document.write("<br><br>5)<br><br>");

for(i=1; i<=row/2; i++)
    fun(i, row);
for(i=row/2; i>0; i--)
    fun(i, row);

document.write("<br><br>6)<br><br>");

for(i=1; i<=row; i++){
    for(j=1; j<=i; j++)
        document.write("# ");
    document.write("<br>");
}

document.write("<br><br>7)<br><br>")

for(i=1; i<row; i++){
    for(j=1; j<=(row-i); j++)
        document.write(" &nbsp;");
    for(k=i; k<(i*2) ;k++)
        document.write(k+" ");
    for(k=((i*2)-2); k>=i ;k--)
        document.write(k+" ");
    document.write("<br>");
}




















