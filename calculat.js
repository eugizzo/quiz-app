

let names=['eugene','mugiraneza','27']
console.log(names.length)
const all=[{
    id:1,
    name:'eugene',
    price:'123'


},
{
    id:1,
    name:'peter',
    price:'67'


}]

all.map((e)=>{
  return(
    <div>
    

<ul style="display:flex">
<li>{e.name} {console.log(e.name)}</li>

</ul>
    </div>
  ) 
})
