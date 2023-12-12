const randomUserName = generateRandomString(10);
const randomPassword = generateRandomString(10);
const randomFirstName = generateRandomString(10);
const randomLastName = generateRandomString(10);
const randomThreeSymbolsPassword = generateRandomString(3);
const randomBankName = generateRandomString(5);
const invalidBankName = generateRandomString(4);
const randomBankRoutingNumber = generateRandomNumbers(9);
const invalidBankRoutingNumber = generateRandomNumbers(8);
const randomBankAccountNumber = generateRandomNumbers(9);
const invalidBankAccountNumber = generateRandomNumbers(8);
const invalidEmail = generateRandomString(5) + '.gmail.com';
const invalidPhoneNumber = generateRandomNumbers(3);
const randomAmount = generateRandomNumbers(1);
const randomDescription = generateRandomString(5);

function generateRandomString (length) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  function generateRandomNumbers (length) {
    let result = '';
    const characters =
      '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  export { randomUserName, randomPassword, randomFirstName, randomLastName, randomThreeSymbolsPassword, randomBankName, invalidBankName, randomBankRoutingNumber, invalidBankRoutingNumber, randomBankAccountNumber, invalidBankAccountNumber, invalidEmail, invalidPhoneNumber, randomAmount, randomDescription }