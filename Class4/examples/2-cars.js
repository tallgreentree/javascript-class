var extend = function() {
       function F() {}
       F.prototype = this;
       return new F();
}

var driver = {
        swear: function() {
                       if(this.favoriteSwear == undefined) {
                               this.favoriteSwear = 'FUDGE!';
                       }
                       document.write('<p><b>' + this.favoriteSwear + '</b></p>');
                       return this;
        },
        extend: extend
}

var car = {
        driver: driver.extend(),
        pickup: function(passenger) {
                if(this.passengers == undefined) {
                        this.passengers = [];
                }
                this.passengers.push(passenger);
                return this;
        },
        statePassengers: function() {
                document.write("<p><i>The car's passengers are now " + this.passengers + "</i></p>"); 
                return this;
        },
        accelerate: function(mph) {
                if(this.speed == undefined) {
                        this.speed = 0;
                }
                this.speed += mph;
                return this;
        },
        brake: function(mph) {
                if(this.speed == undefined) {
                        this.speed = 0;
                }
                this.speed -= mph;
                return this;
        },
        stateSpeed: function() {
                document.write("<p><i>The car's speed is now " + this.speed + "mph.</i></p>");
        },
        extend: extend
}
