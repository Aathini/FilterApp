function setup() {
    canvas_var = createCanvas(640, 480);
    canvas_var.position(150, 350);
    video_var = createCapture(VIDEO);
    video_var.hide;
    tint_color = "";
}
function draw() {
    image(video_var,0,0,640,480);
    tint(tint_color);
}
function take_snapshot() {
    save("filter_image.png");
}
function filter_apply() {
    tint_color = document.getElementById("filter_color").value;
}