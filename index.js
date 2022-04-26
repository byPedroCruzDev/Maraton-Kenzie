
 function positions(firstPlace, secondPlace, lastPlace){
    const podium =[];
/* utilize a const apenas para teste, pois let não funcionou dentro do escopo da fuction */
   let podiumNum = [1,2,3]
   if(lastPlace ==='Daniel'){
       podium.push('Manoel')
       podium.push('Daniel')
       podium.push('Rafael');
       }else if(secondPlace=== 'Daniel'){
         podium.push('Daniel')
         podium.push('Manoel')
         podium.push('Rafael')
       } else{
         podium.push('Daniel')
         podium.push('Manoel')
         podium.push('Rafael');
       }
       return`em 1ª lugar: ${podium[0]}!! em 2ª lugar: ${podium[1]}!! em 3ª lugar: ${podium[2]}!! `;
     
    }
   console.log(positions('Manoel', 'Rafael','Daniel' ))