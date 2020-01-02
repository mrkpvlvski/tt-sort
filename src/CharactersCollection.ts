import {Sortable} from "./Sorter";

export class CharactersCollection implements Sortable{

    constructor(public data: string) {}

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return false;
    }

    swap(leftIndex: number, rightIndex: number): void {
    }

}