let v1 = new Array;
let i = 0;
let tope = 1000

while (i<=tope)
{
    v1[i] = 1;
    i++;
}

let u = 2;
while (u*u <= tope)
{

    if(v1[u] == 1)
            {
                // Actualiza todos los múltiplos de p
                for(let x = u*2; x <= tope; x += u)
                    v1[x] = 0;
            }

    u++
}

for(let x = 2; x <= tope; x++)
{
    if(v1[x] == 1)
        console.log(x + " ");
}