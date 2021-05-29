//配列にオブジェクトを入れる

const quiz = [
  {
    question: '日本のメディアで「レッドオーシャン」「ブルーオーシャン」という言葉を流行らせたと自称している先生は誰?',
    answers: [
    '高須幹弥',
    '予備ノリたくみ',
    '林修',
    'ヒカキン'
    ],
    correct: '林修'
  },{
    question: '自身のYouTubeチャンネルでInstagramのフォロワーの質問に対して回答している先生は誰?',
    answers: [
    '予備ノリたくみ',
    '高須幹弥',
    '林修',
    'ヒカキン'
    ],
    correct: '高須幹弥'
  },{
    question: '将棋のアマチュア四段の先生は誰?',
    answers: [
    '高須幹弥',
    '林修',
    'ヒカキン',
    '予備ノリたくみ'
    ],
    correct: '予備ノリたくみ'
  },{
    question: '制作期間が最も短かったモンスターハンターのメインモンスターはどれ?',
    answers: [
    'ジンオウガ',
    'ナルガクルガ',
    '辻本良三',
    'ティガレックス'
    ],
    correct: 'ナルガクルガ'
  },{
    question: '2021年５月の時点で芦田愛菜さんと鈴木福さんは何歳?',
    answers: [
    '14歳',
    '15歳',
    '16歳',
    '17歳'
    ],
    correct: '16歳'
  }
];
const quizLength = quiz.length;
let quizIndex =  0;
let score = 0;

//const question = '日本のメディアで「レッドオーシャン」「ブルーオーシャン」という言葉を流行らせたと自称している先生は誰❔';
//const answers = [
  //'高須幹弥',
  //'予備ノリたくみ',
  //'林修',
  //'ヒカキン'
//];
//const correct = '林修';

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  //let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    //ここに命令
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
     buttonIndex++;
   }
};
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
   } else {
     window.alert('不正解！');
}
quizIndex++;

if (quizIndex < quizLength){
 //問題数がまだあればこちらを実行
setupQuiz();
} else {
//問題数がもう無ければこちらを実行
window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！'+'\n'+'\n'
+'[答え]'+'\n'+'＜1問目：林修＞2021年5月9日に放送されたTV番組、日曜日の初耳学にて「レッドオーシャン、ブルーオーシャンは僕自身が東進に最初数学で採用されて...」と発言'
+'\n'+'\n'+'＜2問目：高須幹也＞高須幹弥先生のYouTubeチャンネル＝【https://www.youtube.com/channel/UCwywumWHI4_hQtZpJwsC8cw】'
+'\n'+'\n'+'＜3問目：予備ノリたくみ＞ご自身のTwitterアカウント（＠Yobinori）にて2020年12月29日に「将棋ウォーズ四段になりました」とTweet'
+'\n'+'\n'+'＜4問目：ナルガクルガ＞モンハンシリーズ15周年イヤーのスペシャル企画にて辻本良三氏が「MH2Gが開発期間が10ヶ月しかなかった...まあ最長でも5ヶ月くらいかな（モンスターの制作が）...2GのOPにナルガが出てこないのはナルガのモデルがまだできてなかったんで...」と発言'
+'\n'+'\n'+'＜5問目：16歳＞2004年生まれのどちらも6月生まれ');
}
};


let handlerIndex = 0;

while (handlerIndex < buttonLength){
$button[handlerIndex].addEventListener('click',(e) => {
  clickHandler(e);
  
});
handlerIndex++;
}
//textContentで表示させる名前を選ぶ
//document.getElementsByTagName('button')[0].textContent = answers[0];
//document.getElementsByTagName('button')[1].textContent = answers[1];
//document.getElementsByTagName('button')[2].textContent = answers[2];
//document.getElementsByTagName('button')[3].textContent = answers[3];

//HTMLのオブジェクトを取ってくる場合「$」を入れる

//const $button = document.getElementsByTagName('button');

//$button[0].textContent = answers[0];
//$button[1].textContent = answers[1];
//$button[2].textContent = answers[2];
//$button[3].textContent = answers[3];



//addEventListener('click')でボタンをクリックした時に正誤判定を表示させる
//e:イベントのオブジェクト、e.target:クリックされたボタン

//$button[0].addEventListener('click', () => {
  //if(correct === $button.textContent){
   //window.alert('正解！');
  //} else {
    //window.alert('不正解！');
  //}
//});
//$button[0].addEventListener('click', (e) => {
  //clickHandler(e); 
//});
//$button[1].addEventListener('click', (e) => {
  //clickHandler(e);
//});
//$button[2].addEventListener('click', (e) => {
  //clickHandler(e);
//});
//$button[3].addEventListener('click', (e) => {
  //clickHandler(e);
//});
