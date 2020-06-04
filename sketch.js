//Selectors
let sel1;
let sel2;
let sel3;

var colourData;

//Slider
let slider;

//Setup function
function setup() {
    //Create canvas and set the background color
    createCanvas(1370, 772);
    background(200);
    
    //Create the Style selector
    sel1 = createSelect();
    sel1.position(120, 120);
    sel1.option('style-1');
    sel1.option('style-2');
    
    //Create the Complexity selector
    sel2 = createSelect();
    sel2.position(120, 149);
    sel2.option('low');
    sel2.option('medium');
    sel2.option('high');
    
    //Create the Size selector
    sel3 = createSelect();
    sel3.position(120, 178);
    sel3.option('small');
    sel3.option('medium');
    sel3.option('large');
    
    //Create the slider valued between 0 to 20 and set 10 as default
    slider = createSlider(0, 20, 10);
    slider.position(120.5, 280.5);
    slider.style('width', '160px');

}

//Draw function
function draw() {
    
    //Create the boxes: Pixel Code Viewer, Code Selection, View Options, and empty box
    fill(247)
    rect(2, 2, 1366, 62);
    rect(2, 68, 340, 152);
    rect(2, 224, 340, 106);
    rect(2, 333, 340, 437);
    
    //Create the titles of the boxes
    fill(112);
    textSize(20);
    textStyle(BOLD);
    text('Pixel Code Viewer', 631, 43);
    text('Code Selection', 20, 101);
    text('View Options', 20, 261);
    
    //Create the choises of the boxes
    textSize(16);
    textStyle(NORMAL);
    text('Style', 20, 136);
    text('Complexity', 20, 165);
    text('Size', 20, 193);
    text('Pixel Size', 20, 297);
    
    //Put the slider value as text next to slider
    let val = slider.value();
    fill(112);
    textSize(16);
    text(slider.value(), 290, 295);
    noFill();
    
    //Loading the JSON file depends on the selector
    loadJSON("https://hotsprings.io/demo/pixel-code-viewer/assignment/api/"+ sel1.value() + "-" + sel2.value() + "-" + sel3.value() + ".json", gotData);
    
}

//Data got function from JSON file inside of Draw function
function gotData(daten){
    w = daten.width;
    
    //Refresh the background after changing the size with slider
    background(200);
    
    //Get the data value from Json file
        for(var j = 0; j < daten.data.length; j++){ 
            
                //Setting the fill function with the color value that comes from colorTable in JSON
                fill(daten.colorTable[j][0], daten.colorTable[j][1], daten.colorTable[j][2]);
            
                //Use the width value from Json file
                rect(400 + (slider.value() * w * j), 317, slider.value() * w, slider.value() * daten.data[j]);
    }
    
    
    
}


















