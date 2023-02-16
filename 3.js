const roadMines = [false, false, false, true, false, false, false, true, false, false];
let tankLives = 2;
for (let i = 0; i < roadMines.length; ++i) {
    console.log(`Танк переместился на ${i + 1}`);
    if (roadMines[i] === true && tankLives > 1) {
        tankLives -= 1;
        console.log('Танк повреждён');
    } else if (roadMines[i] === true && tankLives > 0) {
        tankLives -= 1;
        console.log('Танк уничтожен')
        break;
    }
}