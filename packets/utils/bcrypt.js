const bcrypt = require('bcrypt')

const password = '12345Secure!';

bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash);

    bcrypt.compare(password, hash, (err, res) => {
        if (err)
            console.error(err);
        console.log(res);
    })
});