const validator = {
    // ...
    isValid: function(creditCardNumber) {
        // Validación de tarjeta
        const string = creditCardNumber.toString();
        const longitud = string.length;
        let cifra = null;
        let cifraCad = null;
        let sum = 0;

        for (let i = 0; i < longitud; i += 2) {
            cifra = parseInt(string.charAt(i)) * 2;
            if (cifra > 9) {
                cifraCad = cifra.toString();
                cifra = parseInt(cifraCad.charAt(0)) + parseInt(cifraCad.charAt(1));
            }
            sum += cifra;
        }
        for (let i = 1; i < longitud; i += 2) {
            sum += parseInt(string.charAt(i));
        }

        if (sum % 10 == 0) {
            return true;
        } else {
            return false;
        }
    }

    // Enmascarar números de tarjeta

    ,
    maskify: function(creditCardNumber) {
        let show = "";
        for (let i = 0; i < creditCardNumber.length; i++) {
            if (i <= creditCardNumber.length - 5) {
                show = show + "#";
            } else {
                show = show + creditCardNumber[i];
            }
        }
        return show;
    },
};

export default validator;