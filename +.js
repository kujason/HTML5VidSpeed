javascript:(function()
{
	var vid=document.getElementsByTagName("video")[0];
	vid.playbackRate+=0.2;
	var speedDiv = document.createElement('div');
	speedDiv.id = "showSpeedDiv";
	speedDiv.style.position="absolute";
	speedDiv.style.top="0";
	speedDiv.style.left="0";
	speedDiv.style.color="white";
	speedDiv.style.backgroundColor="black";
	speedDiv.style.zIndex="2147483647";
	vid.parentElement.appendChild(speedDiv);
	speedDiv.innerHTML = parseFloat(Math.round(vid.playbackRate*10)/10).toFixed(1);
	setTimeout(function(){ speedDiv.parentNode.removeChild(speedDiv) }, 3000);
})();
