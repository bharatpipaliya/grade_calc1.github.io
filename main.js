function calc()
{
   var a=document.getElementById("t1").value;
   var b=document.getElementById("t2").value;
   var c=document.getElementById("t3").value;
   var d=document.getElementById("t4").value;
   var e=document.getElementById("t5").value;
   var a1=parseFloat(a);
   var b1=parseFloat(b);
   var c1=parseFloat(c);
   var d1=parseFloat(d);
   var e1=parseFloat(e);

   var sum=a1+b1+c1+d1+e1;
   document.getElementById("total").innerHTML="total is "+ sum;

   var avg=sum/5;
   document.getElementById("perc").innerHTML="Percentage is " + avg;

    if(avg>0 && avg<=100)
    {
        if(avg>0 && avg<35)
        {
            document.getElementById("grad").innerHTML="Pass Class";
        }
        else if(avg>=35 && avg <=50)
        {
            document.getElementById("grad").innerHTML="Grade is D";
        }
        else if(avg>=51 && avg <=60)
        {
            document.getElementById("grad").innerHTML="Grade is C";
        }
        else if(avg>=61 && avg <=70)
        {
            document.getElementById("grad").innerHTML="Grade is B";
        }
        else if(avg>=71 && avg <=85)
        {
            document.getElementById("grad").innerHTML="Grade is A";
        }
        else
        {
            document.getElementById("grad").innerHTML="Grade is A+";

        }
    }
    else
    {
        document.getElementById("grad").innerHTML="fail";
    }

}