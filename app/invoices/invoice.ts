export interface IInvoice{
    id: number;
    name: string;
}

export class Invoice implements IInvoice{
    id: number;
    name: string;

    constructor(name: string){
        this.name = name;
    }

}