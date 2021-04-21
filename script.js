var req1 = new XMLHttpRequest();
req1.open('GET','https://restcountries.eu/rest/v2/all',true);
req1.send();
req1.onload = function(){
    var country = JSON.parse(this.response);
for(var i in country){
    try{
      var cname = country[i].name;
      var latlong = country[i].latlng;
      if(latlong===0) throw new Error("latitude and longitude no found")
      weatherdata(cname,...latlong);

    }
    catch(e){
      console.log("invalid coordinates"+cname+e.message);
    }
}
}
var weatherdata = function(name,lat,lng){
var URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f57752578d35add252885b9f2de40e29`;
var request = new XMLHttpRequest();
request.open('GET',URL,true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    console.log(`${name}:${data.main.temp}`);
}
};


var array = [1,2,3,4,5];
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

//Print odd numbers in an array 
function odd(){

var oddArray = array.filter(ele=>ele%2===1);
console.log(oddArray)
};

odd();

(function () {
    

var oddArray = array.filter(ele=>ele%2===1);
console.log(oddArray);
})();

function titleCase(string) {
    var sentence = string.toLowerCase().split(",");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence);
    var x = sentence.toString();
 return x;
 }
 console.log(titleCase("tutorix is one of best e-platforms"));

//sum of all elements in an array
function sum(){
    var sumArray = array.reduce((total,num)=>{return total + num;});
    console.log(sumArray);
}
sum();

(function () {
    var sumArray = array.reduce((total,num)=>{return total + num;});
    console.log(sumArray);

   
    })();


    //finding the prime numbers in an array
    function prime(){
    

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;


});

console.log(numArray);
    }

    prime();

    (function () {
        
    numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(numArray);
       
        })();

        //finding if the array is palindrome
        let palindromeArray = (array) => {
            //initialize to true
            let isPalindrome = true;
            
            //loop through half length of the array
            for(let i = 0; i < array.length / 2; i++) {
       
                //check if first half is equal to the second half
                if(array[i] !== array[array.length - i - 1]){
                  isPalindrome = false; 
                  break;
                }
            }
            
            return isPalindrome;
       }
       console.log(palindromeArray(array));

       //finding the median of two sorted arrays.
       const findMedianSortedArrays = (nums1, nums2) => {
        // Regular method
        //     let compare = (i, j) => {
        //         return i - j;
        //     }
        //     let arr = nums1.concat(nums2).sort(compare);
        //     if(arr.length % 2 == 0) {
        //         return (arr[arr.length/2 - 1] + arr[arr.length / 2]) / 2;
        //     }
        //     return arr[Math.floor(arr.length/2)];
        
        let arr = []
            let totalLen = nums1.length + nums2.length;
    
        if(totalLen == 1) {
            return nums1.length == 1 ? nums1[0] : nums2[0];
        }
       
        let arr_len = totalLen % 2 == 0 ? (totalLen)/2 + 1 : Math.ceil(totalLen/2);  
    
        let i = 0;
        let j = 0;
        
        while(arr.length < arr_len) {
            if(i < nums1.length && j < nums2.length) {
                if(nums1[i] <= nums2[j]) {
                    arr.push(nums1[i]);
                    i++;
                }
                else {
                    arr.push(nums2[j]);
                    j++;
                }
            }
            else if(i >= nums1.length) {
                arr.push(nums2[j]);
                j++;
            }
            else {
                arr.push(nums1[i]);
                i++;
            }
        }
    
        return totalLen % 2 == 0 ? (arr[arr.length-1] + arr[arr.length-2])/2 : arr[arr.length-1];
    };
    
    const nums1 = [1,2,3,4,10]
    const nums2 = [5,6,7,8,9]
    
    findMedianSortedArrays(nums1, nums2)

    console.log(findMedianSortedArrays(nums1, nums2));


    //program to rotate the arrays k times.

    var names = ['hey', 'how', 'are' ,'how', 'you' ];
    uniqueArray = names.filter(function(item, pos) {
        return names.indexOf(item) == pos;
    });
    console.log(uniqueArray);

    function arrayRotate(arr, count) {
        count -= arr.length * Math.floor(count / arr.length);
        arr.push.apply(arr, arr.splice(0, count));
        return arr;
      }
      console.log(arrayRotate(array,8));