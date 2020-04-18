export function formatTime(time){
    // const d = Math.floor(time / 60 / 60 / 24);
    // time -= (d * 60 * 60 * 24);
    const h = Math.floor(time / 60 / 60);
    time -= (h * 60 * 60);
    const m = Math.floor(time / 60);
    
    return `${('0' + h).slice(-2)}:${('0' + m).slice(-2)}`;
}