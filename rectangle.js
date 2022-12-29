// setTimeout() registers function to run after some time 
// Callback function occurs after I/O (e.g, 2 sec timeout)
// Javascript property is CLOSURE -> x, y parameters are available to inner callback function 
module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0){
        setTimeout(() => 
            callback(new Error("Rectangle dimensions should be greater than zero: l = "
            + x + ", and b = " + y), null),
            2000);
    }else{
        setTimeout(() => 
            callback(null, {
                perimeter: () => (2*(x+y)),
                area: () => (x*y)
            }),
            2000);
    }
}
