let args = process.argv.slice(2);
let args_as_ints = args.map((a) => Number(a))
let sum = args_as_ints.reduce((a,b) => a + b, 0);
