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

    }
  
  };




// Do not write or modify code below this line.
module.exports = _;