const products = [
 {
     title: 'product1',
     description: 'this is the best',
     imageUrl: 'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1028x675/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fa4b9db4764a8ae2cd84aedf5851564b5%2F0%2Faggressive-kitten-picture-id855025366',
     size: '4" x 4"',
     weight: '8 oz.',
     price1: '$1.99',
     price2: '$1.49',
     price3: '$0.99',
     validUntil: '04/01/2016'
 },
 {
    title: 'product2',
    description: 'this is the best',
    imageUrl: 'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1028x675/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fa4b9db4764a8ae2cd84aedf5851564b5%2F0%2Faggressive-kitten-picture-id855025366',
    size: '4" x 4"',
    weight: '8 oz.',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: '04/01/2016'
},
{
    title: 'product3',
    description: 'this is the best',
    imageUrl: 'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1028x675/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fa4b9db4764a8ae2cd84aedf5851564b5%2F0%2Faggressive-kitten-picture-id855025366',
    size: '4" x 4"',
    weight: '8 oz.',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: '04/01/2016'
},
{
    title: 'product4',
    description: 'this is the best',
    imageUrl: 'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1028x675/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fa4b9db4764a8ae2cd84aedf5851564b5%2F0%2Faggressive-kitten-picture-id855025366',
    size: '4" x 4"',
    weight: '8 oz.',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: '04/01/2016'
},
{
    title: 'product5',
    description: 'this is the best',
    imageUrl: 'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1028x675/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fa4b9db4764a8ae2cd84aedf5851564b5%2F0%2Faggressive-kitten-picture-id855025366',
    size: '4" x 4"',
    weight: '8 oz.',
    price1: '$1.99',
    price2: '$1.49',
    price3: '$0.99',
    validUntil: '04/01/2016'
}
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = () => {
    let domString = ``;
    domString += `<div class="container">`
    domString += `<div class="row">`
    products.forEach((product) => {
        domString += `<div class="col-4">`;
        domString +=    `<h3>${product.title}</h3>`;
        domString += `</div>`;
    })
    domString += `</div>`
    domString += `</div>`
    printToDom('product-container', domString);
};

const init = () => {
    domStringBuilder();
};

init();