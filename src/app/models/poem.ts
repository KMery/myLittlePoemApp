export class Poem {
    constructor(
        public title:string,
        public author:string,
        public lines:Array<string>,
        public linecount:number
    ) {}
}