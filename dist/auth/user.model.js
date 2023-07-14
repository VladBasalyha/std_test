"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const bcrypt = require("bcrypt");
class User {
    constructor(id, email, password, name, avatar, isEmailVerified) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.avatar = avatar;
        this.isEmailVerified = isEmailVerified;
    }
    async validatePassword(password) {
        return await bcrypt.compare(password, this.password);
    }
}
exports.User = User;
//# sourceMappingURL=user.model.js.map