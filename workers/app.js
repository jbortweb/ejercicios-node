const worker = require('worker_threads');
const { Worker, isMainThread, workerData, parentPort} = worker;

if(isMainThread) {
    console.log('Este es el hilo principal');
    for (let i=0; i<10; i++){
        const worker = new Worker(__filename, { workerData: {num: 4}});
        worker.once('message', (result) => {
            console.log('Worker ' + worker.threadId + ' square of 5 is:', result);
        })
    }
}
else {
    console.log('Worker ' + worker.threadId + ' Este no lo es');
    parentPort.postMessage(worker.workerData.num * workerData.num);
}