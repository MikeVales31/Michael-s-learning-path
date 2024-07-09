function StopWatch(){
    let startTime, endTime, running, duration = 0;

    this.reset = function (){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }
    this.start = function (){
        if(running) throw new Error("StopWatch has already started");

        running = true;
        startTime = new Date();
    }
    this.stop = function (){
        if(!running) throw new Error("StopWatch is not started");

        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime()-startTime.getTime())/1000;
        duration += seconds;
    }

    Object.defineProperty(this,"duration",{
        get: function(){return duration;}
    });
}

const reloj = new StopWatch();
console.log(reloj.duration);
reloj.duration = 12;
console.log(reloj.duration);
