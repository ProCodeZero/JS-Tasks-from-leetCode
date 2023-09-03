// SumFileSizes
// Напишите функцию, которая принимает имена двух файлов и вызывает 
// функцию, переданную третьим параметром и передает ей первым 
// агрументом сумму их размеров.

// Для получения рамзера файла необходимо использовать функцию 
// getFileSize(filename, cb).

let fileSizes = {
    testFile1: 65,
    testFile2: 48,
  }
  
function getFileSize(filename, cb) {
    setTimeout(() => cb(fileSizes[filename]), 500);
}

function sumFileSizes(filename1, filename2, cb) {
    // код писать внутри этой функции
    getFileSize(filename1, (firstSize) => {
        getFileSize(filename2, (secondSize) => {
            cb(firstSize + secondSize);
        })
    })
}

