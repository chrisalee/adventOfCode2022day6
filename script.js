const input = `srjsssgppnssqzszmzjmjdmmqwqcwqccslsjswjssgbsgsnggqtqnnjznndtndnhddfldfdsfswsjsjjptjpttlwlccpnpgngcncnscncsnnwrwmwggsgdgssvbsstzsstqqrjqqlsqlsqscschhclhccznzcnnzzqppjbpjjqzzbwbqqzdqdjjqtjtbtgtqgtgdgwwsjjbwjjzssrsvsttgqtgglgplgpllcrcncssbrbgrbrllsqlsltthshrrnddwzdzdbbrppdvdqvvpvdvdsslbbmnbnjjrdrnntzzftzftttrsshpspvvrzzqzwzhzszbzjjwqwvqqglgflfwfrfprpddfvdffhzztwtppwwwztzsznzmnnbvbbtqqdhqdqdfffnjnmnlmljmlmnlnddzbbdgdqdnqqtjjtnthttvwwtrwwwgffqcfchfcfwcczhhgjhghpgpwgwffhghzghhtftntnnmlnmlmddqbbfwbfwbwvvfssrggptpltpllbcbzczzlccjgcgvcczjzvvvdtvdvqdqwdqdvdjvddjfdjjqmmfgfsftfzfwzwzfftmfmmqdqccjqcqwwflwlccpssvzzzbnbjnbjjgtgpttbwbrbwrwvrrwccgrgrvvpjvvznvvhddtdldpldppmlplltdllhqhpqhqqbpptgpgjgqjgjffvfdvdttsrsllhzlzrrdrnrjrddqbbjrrvrsstgsttjqjhjbhhnmndmmnrmnnrggmtgmmhshjjfqjjtqtstpstppggtzzrsrwwqffvzvzvqqggqsqtstszttpvtvvvddcncvncvchhnsnpsnnlmnnmqnqjjfwfccmwmbwbswbswwghhzrrptptbbjbtjjgdjgjrgrwgwlglblbnlnbbwnnpbnbmbtmtvvhjjlwlhhszslldwlwdllhjhghqghhqpplhhtjhhnhqhlhjhmmlhlmmrpptvvcczfcccwgcccpgpspdpccfhchffbjbzzwppfbbstbtltpllcssnnctnnqcqhhclhccvlvlffnjjwbwfbfttwvvdvnnnsrstrtmtfthtzzcvzvhzzpmpfpmmmwggdbdqdbbjnbbdqbbrnnnprrwbbcwbbpjjprjjzzvwwvrrthhqvhvnhhzmzszrszsjssclcjjbhjbhjbhjbjhhzbbzttnrnssrbrjbrjjmsmffdlflfzfbzzmtztdthdhldhlddnccgbbmtbbsbzsbzzcsszpzfffprfpfzfrzzhvhffsmmqtjwgjbzhnmrslrmgfjpqcllcgsjdhrshqtlgmqqtfmswfzwtnrswtzdjzclcfmltqgdhcsgvzrdltgfbtqclpppvbqnbqmlhmdbsjbwbdllzpnrwfhmnlgvdwsdjsznnhqzhwntjvcpzdrfwmwwdrttdvzspmbmqggmlmsvwgcjgpvcmplqwfjgpghnfpbctnfhcgngcbdmzhlpcnjpmczzsgfgrdftrzgvmmpdmgcrpcdrjsgczpfjnwpdjpntdngdjwctvcbsjmfwvtsrlhvpswppmfwrwzsbsgbjvljzqjjldmnqnmwsmqnmhmqhhttppbpqlvdcvdbhmbnjzztjrdjdzlvmbdrghtftwdpcwwblsjbgnzwtpztmtmnrpsvzfzncqmrvhcbqcvqvnlngdcllrqlbhjttnmjmhfhdzmjmplcfdqpmwblzsnmpczwcnggcwdvgnjcrrtmpwwqdqpvtbzpdbfnbfcfllntqjlslcsznjvzvsbntrtzwhcbtdmbmwttvhdvdtvrcmprcrrjlgsqddrsmwsrbtbpjrmlbrnsdrjfhjnqjtgjmhzjbjnprvmhtjcdbztwqmrlfflfmcslshtwmwhgvbdslgjhzjlglhllsdphlzngjfwfrlwpnqfhghnqhzhgrszbcwjvlrtmshntszsqplvfbccjwctgtfmqgqjdlgdbwhgvctqtcgfdwvqdwqzddmsbrpftzpqztgzbnplvhftmgpdthnrdhqbltbrmhpcqsfccmqzwmrbnbgbjspslwpjhdqspssqdtnssmjmvzwwfstgzzjrmfczdlznwqpdhbsjqddvffcgfhfdqdrlwcsgcsszdtpqbbsthpwbhdfzmgmcdggfcwcmzfjnfbzbccjhvwhbwfslnqnrwhgrwtlnmrmncnjtbjbdlmqsczppgbcmsdrwlrpjbgrmnhqqfhhsdhmdmpvvpjrnzsvzctmqhpzcvcjfgtlfvqvnvlnprmgrsvrrvtjfndqfsvqdsfbcwlbglmfhfhcfgqdfmclnzhdtppgzzsqgjqncqrbdhlhdjqwjpmbdnfmgdgwbwmnlngnmrhcgqwzvmbjzdvsspjwwdtpnvpftdlqlzfgtscfczsvbrtrqqpgqlvmrtddqplbzsswbgpdzpqfvqpqbndblghmdhmnctdnjbgglmrlvmrmsfgntfdwvqcvvlvbcnwrctvjqhmnsjqccwltbfqpqpmwsfvmnnfqmlmlcchqcdtbvqwcpptvfwrwtbdrlsgnwpmjgnwlprzqjlwqmtmjglbrzlgfbsghwqdmwhrcmfwdmzmflsbngtgndftdpzsqvgqdsfdhplmfcmwpbtvcdmpghmfwqjvhdhfpmbrqpvnbhlftgdtprlztrgnlcldfpjqjqdfrvqtcnzrtjcgzgsslzghlnfhwwjwzdsmpsczclrfmnqjvfmvsqpntsnnnlrfswqtrppzhqgjzlzvrrbhhfhchhvgztpgctcsgssvttszsrdwzwrbmwmspgqhmmfnzqqdbmnbltdmrsvqgddltwczbbjcmplncspgqgmzrndhttsrbvqbpbvhshfqrpqgmmdbhmmtccjcmntmpqhrvhnfnlqqbctsnfzjbphhqwmztgbhqqlbctbsfcszbggzrlcdhwddtjgtqhppzgjsqcddwjsngjrcdflmgwgfnzhjtcwgbqvpwmpgcpdwvqgswwfzcnjgmdpffmqczmsqgpthpmsjlwnrcbzrfshvwftzllwrmfccmlpjnmpjdfpcvjgjpznllmqjwpcflgqgdljtbbjvjlvhhmtvzfnjfnnwrvtlfdbhqphrjghtmlsrplqscsnvjvqdslsbsfzzrjfmchplzgjgdqvzhfphvsjfvnqlgmjfzhrdlmmvfntnzdvrnwqshsmtjnqmwzgpbbzszrsqcvlzjwnmgjhmfqrbvgmfqpswctmvpfcghvdqgstglmzvpfhzfzvhqqdmvrvrttlpwwhqgddzqlrvvdffqtznvlfgjhhmvbmtzjqnnhqzrtbzpqcwpngrdcndcgzwhzgtfwbmwbrpvvczczhwcqwsqzqbqvqftcswtcbzdbpccjhtwbpnwlwwwqwscptlwshrdbmmdcgrmpnnwgjwzszwwdwctfspbfqvdjqtrflshrqlbfgpnrmbszwjpcdzbggphgplcgvwljprzmtncsvfwqchttndhpnzmtdvtjqtcsddtqvcmztmjgwqvjhflrjjtnvfpjrnlvzvwvrpbhrzslmrqqzqhnzqnvtqppmncddphbwwsjczmphsrlltzndtqjgdlqgpnlfcvwntstmrgcrjzmmllpwldnwmwzpvzctmhszspcvtgnqthszzsmtdnzwtfddfctpjhscbqgwfpqmzpvqrzvtbrdjzrqprdgbpmzzfbgqcvcdtsfrffcpqwtvdwvtcqlcsdrzntgrhrspznndslmnvptlphpdqgbblfhmgbpmmfwqzlhvzshhpzgfjldqclngbcbrmmnqqvqmwdnjsglsggqfgjldqfbsqgtrwmpdffqlcwwlfhlpqfgwtssnjwzhgvtwqzmhmgwzwmcggmpmrzqrcsmflqsrbnzvdmjcdbnscstqrqhvddsbjpzwsvzswqhcqmgzlvfcnzjrrffzphmrvdbhqbrwpsfqvfqwhqhcgfvfsfttzcdsrjgjwcgvhllszmplmvgczqsbfldnbvrnqccbprjjdwhmqpdjjrnfdlhzdvlfmrldjlqclbjrrtjfsflphzdcdpfpr`;

const sampleInput = `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`;

let possible4Diff = [];
for (let i = 3; i < input.length; i++) {
  const inputChecking = [input[i - 3], input[i - 2], input[i - 1], input[i]];
  const dupCheck = [...new Set(inputChecking)];
  // console.log(inputChecking, 'removed dups ', dupCheck, 'at position i ', i)
  if (dupCheck.length === 4) {
    possible4Diff.push(i);
  }
}
console.log(parseInt(possible4Diff[0]) + 1);

// part 2
let possible4Diff2 = [];
for (let i = 13; i < input.length; i++) {
  const inputChecking = [
    input[i - 13],
    input[i - 12],
    input[i - 11],
    input[i - 10],
    input[i - 9],
    input[i - 8],
    input[i - 7],
    input[i - 6],
    input[i - 5],
    input[i - 4],
    input[i - 3],
    input[i - 2],
    input[i - 1],
    input[i],
  ];
  const dupCheck = [...new Set(inputChecking)];
  // console.log(inputChecking, 'removed dups ', dupCheck, 'at position i ', i)
  if (dupCheck.length === 14) {
    possible4Diff2.push(i);
  }
}
console.log(parseInt(possible4Diff2[0]) + 1);

////////////////////////////////////////////////////////////////////////////////
//  functional way to do it

const findUniqueSubstringIndex = (str, i = 0) => {
  // get the substring of length 4 starting at index i
  const substring = str.slice(i, i + 4);
  // count the number of unique characters in the substring
  const uniqueCount = new Set(substring).size;
  // if it has 4 unique characters in the substring, return i + 4
  // otherwise repeat the process at the next index
  return uniqueCount === 4 ? i + 4 : findUniqueSubstringIndex(str, i + 1);
};

console.log(findUniqueSubstringIndex(input));

// part 2 with a way for checking any size unique characters
const findUniqueSubstringIndex2 = (str, windowSize, i = 0) => {
  const substring = str.slice(i, i + windowSize);

  const uniqueCount = new Set(substring).size;

  return uniqueCount === windowSize
    ? i + windowSize
    : findUniqueSubstringIndex2(str, windowSize, i + 1);
};
console.log(findUniqueSubstringIndex2(input, 14));
