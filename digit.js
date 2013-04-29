
digit_map = new Array ( 'सुन्य', 'एक', 'दुई' ,'तीन', 'चार', 'पाँच' , 'छ', 'सात' , 'आठ' , 'नौँ' , 'दश', 'एघार', 'बह्र', 'तेह्र', 'चौध', 'पन्ध्र', 'शोह्र', 'सत्र', 'अठार', 'उन्नाइस', 'बीस', 'एकाइस', 'बाइस', 'तेइस', 'चौबीस', 'पचीस', 'छबीस', 'सत्ताइस', 'अठाइस', 'उन्नतीस', 'तीस', 'एकतीस', 'बतीस', 'तेइतीस', 'चौतीस', 'पैँतीस', 'छतीस', 'सैँतीस', 'अठसैँतीस', 'उन्नचालीस', 'चालीस', 'एकचालीस', 'बैयालीस', 'तीर्‍चालीस', 'चौवालीस', 'पैँतालीस', 'छैयालीस', 'सडचालीस', 'अडचालीस', 'उन्नपचास', 'पचास', 'एकौन्न', 'बाउन्न', 'तिर्‍पन्न', 'चौवन्न', 'पचपन्न', 'छपन्न', 'सन्तौन्न', 'आन्ठौन्न', 'उन्नसाठी', 'साठी', 'एकसाठी', 'बैसाठी', 'तीर्‍साठी', 'चौवसाठी', 'पैँसाठी', 'छैसाठी', 'सडसाठी', 'अडसाठी', 'उन्नसतरी', 'सतरी', 'एक्तर', 'बहतर', 'तिर्‍हतर', 'चौहतर', 'पच्चतर', 'छहतर', 'सत्त्ततर', 'अठत्त्ततर', 'उन्नाअशी', 'अशी',  'एकाशी', 'बैयाशी', 'तीर्याशी', 'चौवाशी', 'पचाशी', 'छैयाशी', 'सडाशी', 'अडाशी', 'उन्ननबे', 'नब्बे', 'एकानबे', 'बैयानबे', 'तिर्यानबे', 'चौवानबे', 'पन्चानबे', 'चयानबे', 'सन्तानबे', 'अन्ठानबे', 'उन्नसय', 'सय' );

multiple_map = new Array ( '', 'सय', 'हजार', 'लाख', 'करोड', 'अरब', 'खरब' );

// main function that user calls for conversion
function convert( nep_digit ) {
  // remove commas
  nep_digit = nep_digit.replace(/\,/g,'');

  console.log(nep_digit);
}

function convertTwoDigit ( two_digit ) {
  return digitMap(two_digit);
}




	
