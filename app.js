let battery = new Battery(50);
let flashLamp = new FlashLamp(battery);

document.write("Battery info: "+flashLamp.getBatteryInfo()+"<br>");
flashLamp.light();

document.write("Turn on<br>");
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info: "+flashLamp.getBatteryInfo()+"<br>");

document.write("Turn off<br>");
flashLamp.turnOff();
flashLamp.light();
document.write("Battery info: "+flashLamp.getBatteryInfo()+"<br>");
