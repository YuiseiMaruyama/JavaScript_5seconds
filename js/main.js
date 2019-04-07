(function (){
    'use strict';

    let start = document.getElementById('start');
    let stop = document.getElementById('stop');
    let result = document.getElementById('result');
    let startTime;
    //isStartedはゲームが始まっているかを判断する変数
    let isStarted = false;

    start.addEventListener('click', function(){
        if(isStarted === true){
            return;
        }
        isStarted = true;
        startTime = Date.now();
        this.className = 'pushed';
        //stopのclassNameからpushedを外すため
        stop.className = '';
    });
    stop.addEventListener('click', function(){
        let elapseTime ;
        let diff;
        if(isStarted === false){
            return;
        }
        isStarted = false;
        // ミリ秒->秒に変換
        elapseTime = (Date.now() - startTime) / 1000;
        //toFixed()で小数点以下を指定
        result.textContent = elapseTime.toFixed(3);
        this.className = 'pushed';
        start.className = '';
        diff = elapseTime - 5.0;

        // if(diff > -1.0 && diff < 1.0){
        // Math.abs()で絶対値を取得
            if(Math.abs(diff) < 1.0){
                result.className = 'perfect';
        }

    });
})();