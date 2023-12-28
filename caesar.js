// ************************************************************************************************
// Caesar page
// ************************************************************************************************

let shiftAmt = 0, pT = "", eT = "", x = 0, y = 0;

function restrictToTwoDigitNum()
{
    if (document.getElementById('js-shift-box').value.length > 3)
        {
            document.getElementById('js-shift-box').value = document.getElementById('js-shift-box').value.slice(0, 2);
        }

    return document.getElementById('js-shift-box').value;
}

function encryptPlaintextWrap(event)
{
    if (event.key === 'Enter' || event.type === 'click')
    {
        pT = document.getElementById('js-caesar-pt').value;
        eT = encryptPlaintext(pT, shiftAmt);
        document.getElementById('js-caesar-et').value = eT;
    }
}

function encryptPlaintext(pT, shiftAmt)
{
    let eT = "";
    let letter = "";
    pT = pT.trim();

    console.log(`Shift amount is ${shiftAmt}`);

    // Loop through input plaintext and only encrypt ascii range of normal alphabetic letters.
    for (var i = 0; i < pT.length; i++)
    {
        // If alpabetic
        if (((pT.charCodeAt(i) >= 65) && (pT.charCodeAt(i)) <= 90) || ((pT.charCodeAt(i) >= 97) && (pT.charCodeAt(i)) <= 122))
        {
            letter = (pT[i]).toLowerCase();
            x = (letter.charCodeAt(0) - 97 + shiftAmt);
            y = 26;

            // Needs to be done like this because Java/JavaScript handles modulos weird.
            eT += String.fromCharCode((((x % y) + y) % y) + 97);
        }

        else 
        {
            eT += pT[i];
        }
    }

    console.log(eT);
    return eT;
}
