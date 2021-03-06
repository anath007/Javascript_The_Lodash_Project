const _ ={

    clamp(number, lower, upper)
    {
      const lowerClampedValue=Math.max(number, lower);
      const clampedValue=Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
  
    inRange(number, start, end)
    {
      if(end===undefined)
      {
        end=start
        start=0
      }
      if (start>end)
      {
        var temp= end
        end= start
        start= temp
      }
      var isInRange= start<= number && number < end
      return isInRange
    },
    words(string)
    {
      const words= string.split(' ');
      return words;
    },

    pad(string, length)
    {
      if(string.length>=length)
      {
        return string;
      }
      const startPaddingLength=Math.floor((length-string.length)/2);
      const endPaddingLenght=length-string.length-startPaddingLength;

      const paddedString=' '.repeat(startPaddingLength)+string+' '.repeat(endPaddingLenght);
      return paddedString;

    },

    has(object, key)
    {
      const hasValue=object[key];
      if(hasValue!=undefined)
      {
        return true;
      }
      else{
        return false;
      }
    },
    invert(object) {
      const invertedObject = {};
  
      for (key in object) {
        invertedObject[object[key]] = key;
      }
  
      return invertedObject;
    },

    findKey (object, predicate) {
      
      for(let key in object) {
        
        
        let value = object[key];
        
        let predicateReturnValue = predicate(value);
        
        
        if (predicateReturnValue) {
          return key;
        };
      };
      
      return undefined;
    
    },

    drop(array, n)
    {
      if (n===undefined)
      {
        n=1;
      }
      let droppedArray=array.slice(n, array.length);
      return droppedArray;
    },

  dropWhile(array, predicate)
  {
    const call_back=(element, index) =>
    {
      return !predicate(element, index, array);
    }
    let dropNumber=array.findIndex(call_back)
    let droppedArray=this.drop(array,dropNumber);
    return droppedArray;
  },

  chunk(array, size=1)
  {
    let arrayChunks=[];
    for(let i=0; i<array.length; i +=size)
    {
      let arrayChunk=array.slice(i, i+size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
  
  };




// Do not write or modify code below this line.
module.exports = _;