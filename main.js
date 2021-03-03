var myMainImg = document.getElementById("main-img"),
	myImg1 = document.getElementById("img1"),
	myImg2 = document.getElementById("img2"),
	myImg3 = document.getElementById("img3"),
	myImg4 = document.getElementById("img4"),
	myImg5 = document.getElementById("img5"),
	imgNum;
function ChangeImg(imgNum)
{
	if(imgNum == 1)
	{
		myMainImg.firstElementChild.setAttribute("src",myImg1.firstElementChild.src);
	}
	else if(imgNum == 2)
	{
		myMainImg.firstElementChild.setAttribute("src",myImg2.firstElementChild.src);
	}
	else if(imgNum == 3)
	{
		myMainImg.firstElementChild.setAttribute("src",myImg3.firstElementChild.src);
	}
	else if(imgNum == 4)
	{
		myMainImg.firstElementChild.setAttribute("src",myImg4.firstElementChild.src);
	}
	else if(imgNum == 5)
	{
		myMainImg.firstElementChild.setAttribute("src",myImg5.firstElementChild.src);
	}
}