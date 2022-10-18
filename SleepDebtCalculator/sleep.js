const getSleepHours = day =>{
    if (day === 'monday') {
        return 8;
    } else if(day === 'tuesday') {
      return 8;  
    
    } else if(day === 'wednesday') {
        return 7; 
    
    } else if(day === 'thursday') {
        return 4; 
    
    } else if(day === 'friday') {
        return 9;  
    
    } else if(day === 'saturday') {
        return 10; 
    
    } else if(day === 'sunday') {
        return 7;    
    
    } else {
        return 'error';
    }
    }

const getActualSleepHours = () =>{
   return getSleepHours('monday') + 
   getSleepHours('tuesday') + 
   getSleepHours('wednesday') +  
   getSleepHours('thursday') + 
   getSleepHours('friday') + 
   getSleepHours('saturday') + 
   getSleepHours('sunday');
}

const getIdealSleepHours = () =>{
    const idealHours = 8;
    return idealHours * 7;
}

const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
       console.log('ideal bro!')
    } else if (actualSleepHours > idealSleepHours) {
        console.log('you slept ' + (actualSleepHours - idealSleepHours) + ' hours too much')
    }else if(actualSleepHours < idealSleepHours){
        console.log('sleep ' + (idealSleepHours - actualSleepHours ) + ' hours more every day Jajinko!')
    }
}



// console.log(getSleepHours('saturday'));
// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());
calculateSleepDebt();