//matrix print
function nxn(n) {
    let hor = n.toString() + ' ';


    function horizontal(n) {
        console.log(`${hor.repeat(hor)}`);
    }

    for (i = 0; i < n; i++) {
        horizontal(n)
    }





}
nxn(7);