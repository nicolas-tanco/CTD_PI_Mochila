let array=[ "Fizz","Buzz"]

function FizzBuzz(x,y,arr){
    for(let i=1;i<=100;i++){ 
    let k=i
      if (i%x==0 && i%y==0){ k=arr[0]+arr[1]
       } else if(i%x==0) {k=arr[0]
       } else if(i%y==0) {
       k=arr[1]}
       console.log(k)
    }
}



