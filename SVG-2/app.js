const paths=document.querySelectorAll("#text path");

console.log(paths);

for(let i=0;i<paths.length;i++)
{
    console.log(`Letter ${i} is ${paths[i].getTotalLength()}`);
}