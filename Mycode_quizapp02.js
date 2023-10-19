
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

const $button = document.getElementsByTagName('button')
const $question = document.getElementById('js-question')
let quiz_num = 0 // 出題されているクイズ番号
let true_num = 0 // 正解した数

const set_question=(quiz_num)=>{
    for(num=0; num<answers[quiz_num].length; num++){
        $button[num].textContent = answers[quiz_num][num]
        if(quiz_num===0){$button[num].addEventListener('click', correct_check)} // 初期値としてボタンイベントを追加
    }
    }

function correct_check(e){
    if(e.target.textContent===correct[quiz_num]){
        window.alert('正解だよ')
        quiz_num += 1 // 出題されるクイズを変える。
        true_num += 1
        if(quiz_num===question.length){ // クイズ全問消化したかの分岐
            document.write(`4問中正解した数 -> ${true_num}問`)
        }else{
            $question.textContent = question[quiz_num] // 次の問題文をセットする
            set_question(quiz_num) // 正解したら、引数を渡して、次のfor文を回す。
        }
    }else{
        window.alert('不正解っす')
        quiz_num += 1 
        if(quiz_num===question.length){ // クイズ全問消化したかの分岐
            document.write(`4問中正解した数 -> ${true_num}問`)
        }else{
            $question.textContent = question[quiz_num]
            set_question(quiz_num)
        }
    }
}

set_question(quiz_num) // 最初の問題文を実行
$question.textContent = question[quiz_num] // 初期値として問題文をセット。

// 機能追加
// 正解した数を統計
// クイズ終わった後の処理
// 結果発表






