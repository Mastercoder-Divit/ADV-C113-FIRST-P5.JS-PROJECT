function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw()
{
    image(video, 70, 110, 380, 290);
    fill("cyan");
    tint(tint_color);
    circle(60, 100, 70);
    fill("lightgreen");
    rect(80, 90, 350, 20);
    fill("cyan");
    circle(450, 100, 70);
    fill("lightgreen");
    rect(50, 134, 20, 250);
    fill("cyan")
    rect(85, 390, 350, 20);
    fill("cyan");
    circle(60, 400, 70);
    fill("lightgreen");
    rect(440, 114, 20, 250);
    fill("cyan");
    circle(450, 400, 70);
}    

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}