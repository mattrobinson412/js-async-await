const baseURL = "http://numbersapi.com";

// #1 //
async function numberFact() {
    let p1promise = $.getJSON(`${baseURL}/23?json`);
    let p1 = await p1promise;
    console.log(p1.text);
}
numberFact();

// #2 //

async function numberRange() {
    let p2Promise = $.getJSON(`${baseURL}/40..43`);
    let p2 = await p2Promise;
    console.log(p2[40]);
    console.log(p2[41]);
    console.log(p2[42]);
    console.log(p2[43]);
};
numberRange();

// #3 //

async function fourFacts() {
    let p3Promise = $.getJSON(`${baseURL}/13?json`);
    let p4Promise = $.getJSON(`${baseURL}/13?json`);
    let p5Promise = $.getJSON(`${baseURL}/13?json`);
    let p6Promise = $.getJSON(`${baseURL}/13?json`);

    let p3 = await p3Promise; 
    let p4 = await p4Promise;
    let p5 = await p5Promise; 
    let p6 = await p6Promise; 

    console.log(p3.text);
    console.log(p4.text);
    console.log(p5.text);
    console.log(p6.text);
};
fourFacts();

