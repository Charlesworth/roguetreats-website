function newCanvasElement(zIndex) {
    var canvas = document.createElement('canvas');

    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.zIndex = zIndex;

    return canvas;
}

function setCanvasSize(canvas) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
}

function draw() {
    // zIndex is set to -1 so the canvas is behind all of the page content
    var zIndex = -1;

    // create, correctly size and append the canvas to the page
    var canvas = newCanvasElement(zIndex);
    setCanvasSize(canvas);
    document.body.appendChild(canvas);

    // resize the canvas on the window onresize event
    window.onresize = function () {
        setCanvasSize(canvas);
    };

    cookieRain(canvas);
}

function cookieRain(canvas){
	const numCookies = 30;
	
	var cookies = [];
	for(var i = 0; i < numCookies; i++)
	{
        cookies.push({
            x: Math.random()*canvas.width,
			y: Math.random()*canvas.height,
			weight: Math.random()
		})
    }
    
    var ctx = canvas.getContext("2d");
	
	function drawCookies()
	{
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		for(var i = 0; i < numCookies; i++)
		{
			var cookie = cookies[i];
			// The size of the emoji is set with the font
			ctx.font = '50px serif'
			ctx.textAlign = "center"; 
			ctx.textBaseline = "middle"; 
			ctx.fillText('🍪', cookie.x, cookie.y)
		}
        updateCookiePosition();
        window.requestAnimationFrame(drawCookies);
	}
	
	function updateCookiePosition()
	{
		for(var i = 0; i < numCookies; i++)
		{
			var p = cookies[i];
			p.y += Math.cos(p.weight) + 0.1;
			if(p.y > canvas.height + 20)
			{
                cookies[i] = {x: Math.random()*canvas.width, y: -20, weight: p.weight};
			}
		}
	}
	
    window.requestAnimationFrame(drawCookies);
}
