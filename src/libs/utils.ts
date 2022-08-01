import bcrypt from 'bcryptjs';
import jwt, {JwtPayload} from 'jsonwebtoken';
import dotenv from 'dotenv';


module.exports = {

    generateToken: (id: string) => {

        return jwt.sign({id: id}, process.env.SECRET_KEY!, {expiresIn: '1h'})

    },

    jwtDecode: (token: string) => {

        const decoded = jwt.verify(token, process.env.SECRET_KEY!) as JwtPayload;

        if (!decoded) {
            throw new Error('Invalid token');
        }
        return decoded.id;
    },

    /**
     * @return string
     */
    generateSalt: (): string => {
        return bcrypt.genSaltSync(10);
    },
    /**
     * @param {string} password - password to be hashed
     * @param salt
     * @returns {Promise<string>}
     */
    cryptPassword: (password: string, salt: string) => {
        return bcrypt.hash(password, salt);
    },

    /**
     *
     * @param password
     * @param hashedPassword
     * @return <Promise<boolean>
     */
    comparePassword: (password: string, hashedPassword: string) => {
        return bcrypt.compare(password, hashedPassword)
    },
}