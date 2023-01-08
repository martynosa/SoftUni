

function days(day) {
    if (day === 'monday'|| day ==='wednesday' || day === 'tuesday' || day === 'thursday' || day === 'friday') {
        console.log('workday')
    }  else if( day === 'saturday' || day === 'sunday') {
        console.log('dayoff')
    } else {
        console.log('invalid input')
    }
  
}


days('sunday')