(function (){
    'use strict';

    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var result = document.getElementById('result');
    var startTime;

    start.addEventListener('click', function(){
        startTime = Date.now();
        this.className = 'pushed';
        //stopのclassNameからpushedを外すため
        stop.className = '';
    });
    stop.addEventListener('click', function(){
        var elapseTime ;
        var diff;
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