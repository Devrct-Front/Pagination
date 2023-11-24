let $ = document
const Users = [
    { id: 1, name: 'Ali', family: 'Hoseinin' },
    { id: 2, name: 'Reza', family: 'Mohammadi' },
    { id: 3, name: 'Sara', family: 'Ahmadi' },
    { id: 4, name: 'Mohammad', family: 'Rahimi' },
    { id: 5, name: 'Fateme', family: 'Mousavi' },

    { id: 6, name: 'Amir', family: 'Golzar' },
    { id: 7, name: 'Neda', family: 'Asgari' },
    { id: 8, name: 'Mehdi', family: 'Zarei' },
    { id: 9, name: 'Parisa', family: 'Kazemi' },
    { id: 10, name: 'Hossein', family: 'Rezazadeh' },

    { id: 11, name: 'Fatemeh', family: 'Ebrahimi' },
    { id: 12, name: 'Ali', family: 'Sadeghi' },
    { id: 13, name: 'Mahsa', family: 'Jamali' },
    { id: 14, name: 'Sina', family: 'Karami' },
    { id: 15, name: 'Narges', family: 'Hashemi' },

    { id: 16, name: 'Armin', family: 'Razavi' },
    { id: 17, name: 'Leila', family: 'Miri' },
    { id: 18, name: 'Ehsan', family: 'Khodabandeh' },
    { id: 19, name: 'Maryam', family: 'Ghasemi' },
    { id: 20, name: 'Behnam', family: 'Pouria' },

    { id: 21, name: 'Zahra', family: 'Salehi' },
    { id: 22, name: 'Hamid', family: 'Nouri' }
  ];

let listElem = $.querySelector('#list')
let paginationElem = $.querySelector('#pagination')