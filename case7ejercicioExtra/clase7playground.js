let array=["Fizz","Buzz"]

function FizzBuzz(x,y,arr){
    for(let i=1;i<=100;i++){ 
    let k=0
      if (x%i==0 && y%i==0){ k=arr[0]+arr[1]
       } else if(x%i==0) {k=arr[0]
       } else if(y%i==0) {
       k=arr[1]}
       console.log(k)
    }
}

FizzBuzz(80,90,array)
