
var ob1={
    paragarph:'“Be yourself; everyone else is already taken.”',
    auther:'― Oscar Wilde'
}
var ob2={
    paragarph:'“Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.”',
    auther:'― Marilyn Monroe'
}
var ob3={
    paragarph:'“A room without books is like a body without a soul.”',
    auther:'― Marcus Tullius Cicero'
}
var ob4={
    paragarph:'“So many books, so little time.”',
    auther:'― Frank Zappa'
}
var ob5={
    paragarph:'“You only live once, but if you do it right, once is enough.”',
    auther:'― Mae West'
}
var ob6={
    paragarph:'“Be the change that you wish to see in the world.”',
    auther:'― Mahatma Gandhi'
}
var ob7={
    paragarph:'“If you tell the truth, you dont have to remember anything.”',
    auther:'― Mark Twain'
}
var ob8={
    paragarph:'“A friend is someone who knows all about you and still loves you.”',
    auther:'― Elbert Hubbard'
}
var ob9={
    paragarph:'“Always forgive your enemies; nothing annoys them so much.”',
    auther:'― Oscar Wilde'
}
var ob10={
    paragarph:'“We accept the love we think we deserve.”',
    auther:'― Stephen Chbosky'
}
var arr = [ob1,ob2,ob3,ob4,ob5,ob6,ob7,ob8,ob9,ob10]
var result=[]



function randomUniqueNum() {
    if(result.length!=10){
    var box=``;
      do {
        var random = Math.floor(Math.random() * 10)
    }while (result.includes(random));
    result.push(random);
    box=`<p class="fs-4">${arr[random].paragarph}</p>
      <p class="fs-4 fw-bold">${arr[random].auther}</p>`
      document.getElementById('q-card').innerHTML=box
     console.log(result)
     }
     else{
        result.splice(0,9)
        var box=``;
        do {
         random = Math.floor(Math.random() * 10)
        }while (result.includes(random));
         result.push(random);
      box=`<p class="fs-4">${arr[random].paragarph}</p>
        <p class="fs-4 fw-bold">${arr[random].auther}</p>`
        document.getElementById('q-card').innerHTML=box
       console.log(result)
     }
      
  }
 
