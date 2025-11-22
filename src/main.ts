
import "./extend/import";

type Any = (
    number |
    string |
    boolean |
    number[] |
    string[] |
    boolean[] |
    void
);

class Func<T, R> {
    constructor(public name: string, private f: (arg: T) => R) {}
    exec(arg: T) { return this.f(arg) };
}

const fn = <T, R>(name: string, f: (arg: T) => R): Func<T, R> => {
    const func = new Func(name, f);
    return func;
};

const println = (str: string, ...args: Any[]) => {

    let cloned = str;
    for (const arg of args) {
        if (Array.isArray(arg)) {
            cloned = cloned.replace("{}", `[${arg.toString()}]`);
            continue;
        }
        cloned = cloned.replace("{}", (arg as unknown)?.toString());
    }

    console.debug(cloned);

};

const main = async () => {

    const args: Func<number[], Any>[] = [
        fn("is_empty", x => x.is_empty()),
        fn("first", x => x.first()),
        fn("last", x => x.last()),
        fn("sum", x => x.sum()),
        fn("max", x => x.max()),
        fn("min", x => x.min()),
        fn("insert", x => x.insert(2, 1919)),
        fn("remove", x => x.remove(2)),
        fn("insert_empty", x => x.insert(810, 9315)),
        fn("remove_empty", x => x.insert(364364, 8931)),
        fn("remove_until_empty", x => {
            const vec = [];
            while(!x.is_empty()) {
                vec.push(x.remove(0));
            }
            return vec;
        }),
    ];

    const a = [1, 2, 3, 4, -5];
    const b: number[] = [];

    println("entry = {}\n", a);
    for (const arg of args) {
        println("name: {}, result: {}, state: {}", arg.name, arg.exec(a), a);
    }
    println("entry = {}\n", b);
    for (const arg of args) {
        println("name: {}, result: {}, state: {}", arg.name, arg.exec(b), b);
    }

};

main();