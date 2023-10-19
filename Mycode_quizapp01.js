// クイズゲームを作ります。
// ロジックを組む時の注意点はね、
// javascriptファイルは、Unityファイルのように、繰り返し読まれる訳じゃなくて、一回しか読まれないんです。

// １問だけのクイズならば、HTMLに直書きしてもいいが、
// 今回は、複数のクイズを出題するので、
// 問題文、解答、などを、javascriptで、変数として持たせる必要がある。
const question = [
    'ゲーム市場最も売れたゲーム機は次の内どれ？',
    '無敵の笑顔で荒らす',
    '知りたいその',
    '抜けてるとこさえ彼女の'
]

const answers = [
    ['スーパーファミコン','プレイステーション2','ニンテンドースイッチ','ニンテンドーDS'],
    ['テレビ', 'コメ欄', 'メディア', 'マイクラサーバー'],
    ['秘密ミステリアス', '音のソノリティ', '教えてよ何が好き？', 'サンドイッチ!'],
    ['あぁ！僕も好きだ!', 'エリア', '私たちは', 'よく似てるね']
]

const correct = [
    'ニンテンドーDS',
    'メディア',
    '秘密ミステリアス',
    'エリア'
]

// 上記で定義した、変数をHTMLに埋め込みたい。
// document.getElementsByTagNameで、取ってきましょう。
// getElementById -> HTMLタグのid属性で、識別してオブジェクトを取得
// .textContentメソッドで、HTMLタグが持っている、テキスト情報を取得できる。
// .constructor.name で、データ型を判別できる。

// HTMLのオブジェクトを変数に格納する場合は、$を先頭につけます。
const $button = document.getElementsByTagName('button')
const $question = document.getElementById('js-question')

// 実際に、HTMLタグのテキスト情報を、オブジェクト化して、値を代入していきます。
// for(初期化式; 条件式; 変化式){実行文}
// .addEventListenerを使って、ボタンを押した時の処理を追加していきます。
// .addEventListenerメソッドは、if文とは違って、独立した処理ではなく、オブジェクトの属性として、付け加えられるものです。
// 引数の"e"は、イベントオブジェクトです。
// ここの処理でいったら、addEventListenerメソッドのトリガーオブジェクトですね。
// このイベントオブジェクトというものも、沢山の情報を持っています。
// クリックオブジェクトで言ったら、ディスプレイ上のクリックされた座標などなど。笑



// Myクイズゲームソースコード


// 今回のクイズゲームのコードでは、
// 画面の遷移は、個別に用意した関数で、実現させました。
// removeEventListenerの引数を渡せないという都合上、if文を重複して書かざるを得なかった。
const first_question=()=>{
    for(num=0; num<answers[0].length; num++){
        $question.textContent = question[0]
        $button[num].textContent = answers[0][num]
        $button[num].addEventListener('click', correct_check)
    }
    }

const second_question=()=>{
    for(num=0; num<answers[1].length; num++){
        $question.textContent = question[1]
        $button[num].textContent = answers[1][num]
        $button[num].removeEventListener('click', correct_check)
        $button[num].addEventListener('click', correct_check01)
    }
    }

const third_question=()=>{
    for(num=0; num<answers[2].length; num++){
        $question.textContent = question[2]
        $button[num].textContent = answers[2][num]
        $button[num].removeEventListener('click', correct_check01)
        $button[num].addEventListener('click', correct_check02)
    }
    }

const fourth_question=()=>{
    for(num=0; num<answers[3].length; num++){
        $question.textContent = question[3]
        $button[num].textContent = answers[3][num]
        $button[num].removeEventListener('click', correct_check02)
        $button[num].addEventListener('click', correct_check03)
    }
    }

function correct_check(e){
    if(e.target.textContent===correct[0]){ 
        window.alert('正解です')
        second_question()
    }else{
        window.alert('不正解です')
    }
}

function correct_check01(e){
    if(e.target.textContent===correct[1]){ 
        window.alert('正解です')
        third_question()
    }else{
        window.alert('不正解です')
    }
}

function correct_check02(e){
    if(e.target.textContent===correct[2]){ 
        window.alert('正解です')
        fourth_question()
    }else{
        window.alert('不正解です')
    }
}

function correct_check03(e){
    if(e.target.textContent===correct[3]){ 
        window.alert('正解です')
        document.write('終わりじゃ')
    }else{
        window.alert('不正解です')
    }
}

first_question()


// 一通り、自分で、コード書いてみて、作ってみたけど、
// 動画では、＋＋とか使ってる。
// 多分、俺が書いたコードよりも、絶対みじかく作ってるよこれ。
// 俺の、コードも、見直そ。短くできるように。




