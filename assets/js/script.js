/* Author: 

*/

var i, j ,k ;

document.write("Pattern Program:<br><br>1)<br><br>");

for(i=1; i<5; i++){
    for(j=1; j<=(5-i); j++){
        document.write(" &nbsp;");
    }
    for(k=1; k<=((2*i)-1); k++){
        if(k % 2 == 0)
        {
            document.write(" A");
        }
        else{
            document.write(" *");
        }
    }
    document.write("<br>")
}

document.write("<br><br>2)<br><br>");

for(i=1; i<6; i++){
    for(j=1; j<=(5-i); j++){
        document.write("&nbsp;");
    }
    for(k=1; k<=((2*i)-1); k++){
        if(i!=5){
            if(k==1 || k==((2*i)-1)){
                document.write("*");
            }
            else{
                document.write("&nbsp;");
            }
        }
        else{
            document.write("*");
        }
    }
    document.write("<br>")
}

document.write("<br><br>3)<br><br>");

for(i=1; i<4; i++){
    for(j=1; j<=i; j++){
        document.write(j**i+" ");
    }
    document.write("<br>");
}

document.write("<br><br>4)<br><br>");



document.write("<br><br>5)<br><br>");



document.write("<br><br>6)<br><br>");

for(i=1; i<7; i++){
    for(j=1; j<=i; j++){
        document.write("# ");
    }
    document.write("<br>");
}

document.write("<br><br>7)<br><br>")






















