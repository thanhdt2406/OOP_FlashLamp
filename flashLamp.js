let FlashLamp = function (battery) {
    this.status = false;
    this.battery = battery;

    this.setBattery = function (battery) {
        this.battery = battery;
    }

    this.getBatteryInfo = function (){
        return this.battery.getEnergy();
    }

    this.light = function (){
        if(this.status){
            document.write("Lighting<br>");
            this.battery.decreaseEnergy();
        } else{
            document.write("Not lighting<br>");
        }
    }

    this.turnOn = function () {
        this.status = true;
    }
    this.turnOff = function () {
        this.status = false;
    }
}