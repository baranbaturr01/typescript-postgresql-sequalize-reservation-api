const bcryptjs = require('bcryptjs');

module.exports = {
    cryptPassword: (password: String, callback: (err: Error, salt?: string) => void) => {
        bcryptjs.genSalt(10, (err: Error, salt: string) => {
            if (err) return callback(err);

            bcryptjs.hash(password, salt, (err: Error, hash: string) => {
                return callback(err, hash);
            });
        });
    },

    comparePassword: (plainPass: string, hashword: string, callback: (err?: Error, isMatch?: boolean) => void) => {
        bcryptjs.compare(plainPass, hashword, (err: Error, isPasswordMatch: boolean) => {
            return err == null ? callback(null!, isPasswordMatch) : callback(err);
        });
    },
}