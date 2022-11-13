let amount,rate,year,simpleIntrest
amount=prompt("enter your principle");
amount=parseInt(amount);
rate=prompt("rate of intrest");
rate=parseInt(rate);
year=prompt("enter year");
year=parseInt(year);
simpleIntrest=(amount*rate*year)/100;
alert("simpleIntrest :-"+simpleIntrest)
