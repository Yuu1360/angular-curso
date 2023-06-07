export class Usuarios {
    constructor(
        public id: number,
        public username: string,
        public nombre: string,
        public apellido1: string,
        public password: string,
        public roles?: string[],
        public apellido2?: string,
        public email?: string
    ) {}
}
