'use strict';

{
    const resultpage = document.getElementById('wrapper');
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    const scoreLabel = document.querySelector('#result > p');

    const quizSet = shuffle([
        {q: '清楚な人は誰でしょう？', c : ['冨永恵祐', '臺本純華', '東明日菜']},
        {q: '実はレイさんと同じ小学校出身の人は誰でしょう？', c : ['福田沙良', '神保舞琴', '冨永恵祐']},
        {q: 'ハッカソン中に夜勤に行った人は誰でしょう？', c : ['又吉見秋', '原拓海', '枡井正樹']},
        {q: '三期生１（？）素敵な恋をしている人は誰でしょう？', c : ['松本はるか', '野村春菜', '神保舞琴']},
        {q: '子供が苦手なのに子供相手に塾講師をしている人は誰でしょう？', c : ['大串真由', '松本はるか', '竹内優']},
        {q: '恋してそうなのに恋していない人は誰でしょう？', c : ['内藤麻優子', '臺本純華', '東明日菜']},
        {q: 'TWICEの曲を聞くと思わず踊りだしちゃう人は誰でしょう？', c : ['本村晴基', '臺本純華', '東明日菜']},
        {q: '熱血(笑)だけどよく空回りしている人は誰でしょう？', c : ['伊藤流星', '冨永恵祐', '木下倭']},
        {q: '自称恋愛マスターは誰でしょう？', c : ['西田優希', '伊藤流星', '中井厚博']},
        {q: '最近韓国人の義姉ができました　誰でしょう？', c : ['東明日菜', '臺本純華', '福田沙良']},
    ]);
    let currentNum = 0;
    let isAnswered;
    let score = 0;

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    
    function checkAnswer(li) {
        if (isAnswered) {
            return;
        }
        isAnswered = true;
    
        if (li.textContent === quizSet[currentNum].c[0]) {
            li.classList.add('correct');
            score++;
        } else {
            li.classList.add('wrong');
        } 
    
        btn.classList.remove('disabled');
    }


    
    function setQuiz() {
        isAnswered = false;
    
        question.textContent = quizSet[currentNum].q;

        while (choices.firstChild) {
            choices.removeChild(choices.firstChild);
        }

        const shuffledChoices = shuffle([...quizSet[currentNum].c]);
        shuffledChoices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice;



            li.addEventListener('click', () => {
                checkAnswer(li);
            });
            choices.appendChild(li);
        });

        if (currentNum === quizSet.length - 1) {
            btn.textContent = 'Show Score';
        }
    }



    setQuiz();

    btn.addEventListener('click', () => {
        if (btn.classList.contains('disabled')) {
            return;
        }
        
        if (currentNum === quizSet.length - 1) {
            scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
            result.classList.remove('hidden');
            btn.classList.add('disabled');
        } else {
            currentNum++;
            setQuiz();

        
        }

    });
}
