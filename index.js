var buttonimage = document.querySelectorAll(".button-image");
var answer1 = document.querySelector("#answer1");
var question1 = document.querySelector("#question1");
var answers = document.querySelectorAll(".answer");
var image1 = document.querySelector("#image1");










buttonimage.forEach(i => {
    i.addEventListener("click", () => {
        var imageid = i.id;
        // console.log(imageid);
        // document.getElementById(imageid).style.trasform = 'rotate(180deg)';
        var croppedid = imageid.charAt(imageid.length-1);
        var fullimageid = "image" + croppedid;
        console.log(imageid);
        console.log(fullimageid);
        document.getElementById(fullimageid).style.transform = 'rotate(180deg)';
        var fullanswerid = "answer" + croppedid;
        document.getElementById(fullanswerid).style.visibility="visible";
        var fullquestionid = "question" + croppedid;
        document.getElementById(fullquestionid).style.fontWeight = "bold";
        
        
    })
    
})

