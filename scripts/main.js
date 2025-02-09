const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// foor loop //

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i])
// }

// forEach //
// companies.forEach(function(company) {
//     console.log(company.name)
//     })

// Get 21 or older
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i])
//     }
// }
// filter //
// const canDrink = ages.filter(function (age) {
//     if (age >= 21) {
//         return true;
//     }
// })
//  filter method with Arrow function
const canDrink = ages.filter(age => age >= 21)

// filter retail companies
// const retailCompanies = companies.filter(function (company) {
//     if (company.category === 'Retail') {
//         return true
//     }
// })
const retailCompanies = companies.filter(company => company.category === 'Retail')

// Get 80s companies ES 5 way
// const eightiesCompanies = companies.filter(function (company) {
//     if (company.start <= 1989) {
//         return true
//     }
// })
// Get 80s companies ES 6 way ( arrow)
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))

// Get companies that lasted 10 years or more
const companiesLastedTenYearsOrPlus = companies.filter(company => (company.end - company.start >= 10))
console.log(companiesLastedTenYearsOrPlus)

