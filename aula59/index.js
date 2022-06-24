function recursiva(max) {
    if (max >= 10020) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);