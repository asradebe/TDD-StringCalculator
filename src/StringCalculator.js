    function Add(Str) {
        let result = 0;
        
        let num = Str.replace(/^(\/\/.\n)/, '');
        let addUp = num.split(/[//;\n,]/);

    if (Str === " ") {
        return 0;
    }
    for (let x = 0; x < addUp.length; x++) {

        result += parseInt(addUp[x]);

        if (result < 0) {
        throw 'ERROR: negatives are not allowed';
        }
    }
    return result;
    }

Add("//;\n1;2");