let old = [1,2,5,7,9,22];
let new1 =[];
let z = old.length;
for (i=0;i<old.length;i++) {

    new1[i] =old[(z-1)];
    z--;
}
console.log(new1)
document.write(new1);