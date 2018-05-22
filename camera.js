document.addEventListener('DOMContentLoaded',function(){

    //input field to capture camera image///
    var cameraImageSelector = document.querySelector("input[type=file]");
   //listening to change in input field
    cameraImageSelector.addEventListener('change',function(){
        //create filereader inistance
        var reader = new FileReader();
        //setting result as dataURL (base64 data url) in reader instance
            reader.readAsDataURL(cameraImageSelector.files[0]);
            //adding event listerner to reader instance on load
            reader.addEventListener("load",function(event){

                //image file is event.target.result,base64 data url  giving to qrcode library decode method
                qrcode.decode(event.target.result);
            /*event.target.result can be set as src of img tag for example xxx.setAttribute("src",event.target.result)
               */
              var QRimage=document.getElementById('QRImage');
             
              QRimage.setAttribute('src',event.target.result) ; 

              QRimage.style.opacity=1;
            });
    });

    //qrcode library callback method to display result //
    qrcode.callback=function(data){
        var output=document.querySelector('output');
        output.innerHTML="<strong>QR Code data </strong>"+data;
    }


});

//1.select the file from index page to read input file

//2.when file input status change than make a file reader instance

//add load event fo file reader///

//file is  event.target.result

//