
declare global {
    interface Array<T> {
        is_empty(): boolean,
        first(): T | undefined,
        last(): T | undefined,
        sum(this: number[]): number,
        max(this: number[]): number,
        min(this: number[]): number,
        insert(this: T[], i: number, item: T): void,
        remove(this: T[], i: number): T | undefined,
    }
}

Array.prototype.is_empty = function () {
    return !this.length;
};
Array.prototype.first = function () {
    return this[0];
};
Array.prototype.last = function () {
    return this[this.length - 1];
};
Array.prototype.sum = function () {
    if (this.is_empty()) return 0;
    let sum = 0;
    for (const v of this) {
        sum += v;
    }
    return sum;
};
Array.prototype.max = function () {
    let max = -Infinity;
    for (const v of this) {
        if (max < v) {
            max = v;
        }
    }
    return max;
};
Array.prototype.min = function () {
    let min = Infinity;
    for (const v of this) {
        if (min > v) {
            min = v;
        }
    }
    return min;
};
Array.prototype.insert = function<T> (i: number, item: T) {
    const prev = this[i];
    if (prev === undefined) return;
    this.splice(i, 0, item);
    return;
};
Array.prototype.remove = function (i: number) {
    const prev = this[i];
    if (prev === undefined) return;
    return this.splice(i, 1)[0];
};

export default 0;