distance = function(pos1, pos2){
    const x1 = pos1[0];
    const y1 = pos1[1];
    const x2 = pos2[0];
    const y2 = pos2[1];

    return Math.sqrt(((x1 - x2)**2) + ((y1 - y2)**2));
};

norm = function(pos){
    return distance([0,0], pos);
};