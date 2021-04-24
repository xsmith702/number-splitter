// Number splitter
function numSplit(sum)
{
    // Input is even
    if(sum % 2 === 0)
    {
      let evenNum1 = sum / 2;
      let evenNum2 = evenNum1;
      let evenArray = [evenNum1, evenNum2];
      return evenArray;
    }
    // Input is odd
    else
    {
      let oddNum1 = Math.floor(sum / 2);
      let oddNum2 = sum - oddNum1;
      let oddArray = [oddNum1, oddNum2];
      return oddArray;
    } 
}
numSplit();
