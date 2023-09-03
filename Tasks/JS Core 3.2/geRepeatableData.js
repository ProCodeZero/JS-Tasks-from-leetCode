
class AttemptsLimitExceeded extends Error {
    constructor(){
      super('Max attempts limit exceed');
      this.name = 'AttemptsLimitExceeded';
    }
  }
  
  class NotFoundError extends Error {
    constructor(){
      super('Not found');
      this.name = 'NotFoundError';
    }
  }
  
  class TemporaryError extends Error {
    constructor(){
      super('TemporaryError');
      this.name = 'TemporaryError';
    }
  }
  

function getRepeatableData(getData, key, maxRequestsNumber) {
    try{
        return getData.call(getData, key);
    } catch(err) {
        if (err instanceof NotFoundError) {
            throw new NotFoundError;
        } else if (err instanceof TemporaryError) {
            if (maxRequestsNumber === 1) {
                throw new AttemptsLimitExceeded;
            } else {
            return getRepeatableData(getData, key, maxRequestsNumber-1);
            }
        }
    }
}
  


const getData = (key) => 'hello' + key;
const res = getRepeatableData(getData, '1', 3); // 'hello1'
const r = getRepeatableData(undefined, 1, 2);
