function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        npc.walkEast(2000)
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

     function walkEast(time, callback) {
        direction = 'east'
        element.src = `./assets/red-character/east.gif`
        setTimeout(()=>{
            stop()
            if(callback){
                callback()
            }
        },time)
        
    }

    function walkNorth(time, callback) {
        direction = 'north'
        element.src = `./assets/red-character/north.gif`
        setTimeout(()=>{
            stop()
            if(callback){
                callback()
            }
        },time)
    }

    function walkWest(time, callback) {
        direction = 'west'
        element.src = `./assets/red-character/west.gif`
        setTimeout(()=>{
            stop()
            if(callback){
                callback()
            }
        },time)
    }

    function walkSouth(time, callback) {
        direction = 'south'
        element.src = `./assets/red-character/south.gif`
        setTimeout(()=>{
            stop()
            if(callback){
                callback()
            }
        },time)
    }

    function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }

    function sleep(time){
        return new Promise(resolve => {
            setTimeout(resolve, time)
        })  
    }

    
    
}