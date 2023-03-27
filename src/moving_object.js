MovingObect = function() {
    this.pos = [];
    this.vel = [];
    this.radius = 0;
    this.color = "";

    this.draw = function(context){

    };

    this.move = function(){
        newPos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
        this.pos = newPos;
    };
};