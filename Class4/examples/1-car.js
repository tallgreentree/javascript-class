var car = {
        passengers: [],
        speed: 0,
        driver: {
                swear: function() {
                               document.write('<p><b>FUDGE!</b></p>');
                               return this;
                }
        },
        pickup: function(passenger) {
                this.passengers.push(passenger);
                return this;
        },
        statePassengers: function() {
                document.write("<p><i>The car's passengers are now " + this.passengers + "</i></p>"); 
                return this;
        },
        accelerate: function(mph) {
                this.speed += mph;
                return this;
        },
        brake: function(mph) {
                this.speed -= mph;
                return this;
        },
        stateSpeed: function() {
                document.write("<p><i>The car's speed is now " + this.speed + "mph.</i></p>");
        }
}
