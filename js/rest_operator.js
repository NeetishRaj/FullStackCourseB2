function fun(a, b = 5, c, ...args){

    console.log("\nfunction.name : " + fun.name);

    console.log("\narguments.length : " + arguments.length);
    
    console.log("\nfun.length(formal args) : " + fun.length);
    
    console.log("\nargs.length(extra arguments) : " + args.length + "\n");
}
   

fun(1, 2, 3, 4, 5, 6);