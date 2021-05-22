function getPara1()
{
    var line1= document.getElementById("1_para_input1").value
    var line2= document.getElementById("para2_input2").value
    var line3= document.getElementById("para3_input3").value
    var line4= document.getElementById("para4_input4").value
    var line5= document.getElementById("para5_input5").value
    var line6= document.getElementById("para6_input6").value

    1_para_input1.push(line1);
    para2_input2.push(line2);
    para3_input3.push(line3);
    para4_input4.push(line4);
    para5_input5.push(line5);
    para6_input6.push(line6);

    document.getElementById("finalpara").value=getPara1()

}


