function fru(input) {
    let fuit=input[0];
    switch (fuit) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
            console.log(`fruit`);break;
        case 'cucumber':
        case 'tomato':
        case 'pepper':
        case 'carrot':
            console.log(`vegetable`);break;

    
        default:
            console.log(`unknown`);
            break;
    }
}
fru (["tomato"]);  // 91 points